import { scalekit } from "@/lib/scalekit";
import crypto from "crypto";
import { cookies } from "next/headers";

export async function GET() {
  try {
    const state = crypto.randomBytes(16).toString("hex");
    (await cookies()).set("sk_state", state, {
      httpOnly: true,
      sameSite: "lax",
      path: "/",
    });

    const redirectUrl = process.env.SCALEKIT_REDIRECT_URI!;

    const options = {
      scopes: ["openid", "profile", "email", "offline_access"],
      state,
    };

    const authorizationUrl = scalekit.getAuthorizationUrl(redirectUrl, options);

    return Response.redirect(authorizationUrl, 302);
  } catch (error) {
    console.error("Error generating authorization URL:", error);
    return new Response("Internal Server Error", { status: 500 });
  }
}
