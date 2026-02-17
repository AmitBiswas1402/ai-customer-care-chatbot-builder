import { db } from "@/db";
import { scalekit } from "@/lib/scalekit";
import { NextRequest, NextResponse } from "next/server";
import { user as User } from "@/db/schema";
import { eq } from "drizzle-orm";

export async function GET(req: NextRequest) {
  const { searchParams } = req.nextUrl;
  const code = searchParams.get("code");
  const error = searchParams.get("error");
  const error_description = searchParams.get("error_description");

  if (error) {
    console.log("Authentication error:", error, error_description);
    return new Response("Authentication failed", { status: 401 });
  }

  if (!code) {
    console.log("Authorization code not found in callback");
    return new Response("Authorization code not found", { status: 400 });
  }

  try {
    const redirectUrl = process.env.SCALEKIT_REDIRECT_URI!;

    const authResult = await scalekit.authenticateWithCode(code, redirectUrl);

    const { user, idToken } = authResult;

    const claims = await scalekit.validateToken(idToken);

    const organizationId =
      (claims as any).organization_id ||
      (claims as any).org_id ||
      (claims as any).oid ||
      null;

    if (!organizationId) {
      return NextResponse.json(
        { error: "Organization ID not found in token claims" },
        { status: 500 },
      );
    }

    const existing = await db
      .select()
      .from(User)
      .where(eq(User.email, user.email));

    if (existing.length === 0) {
        await db.insert(User).values({
            name: user.name || "anonymous",
            email: user.email,
            organizatin_id: organizationId,
        });        
    }

    const response = NextResponse.redirect(new URL("/", req.url))
    const userSession = {
      email: user.email,
      organization_id: organizationId,
    }

    response.cookies.set("user_session", JSON.stringify(userSession), {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax", 
      maxAge: 60 * 60 * 24 * 7, // 7 days
    });

    return response;
  } catch (error) {
    console.error("Error during authentication callback:", error);
    return NextResponse.json(
      { error: "Failed to process authentication callback" },
      { status: 500 },
    );
  }
}
