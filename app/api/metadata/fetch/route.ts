import { isAuthorized } from "@/lib/isAuthorized";
import { exists } from "drizzle-orm";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function GET() {
    try {
        const user = await isAuthorized();

        if (!user) {
            return NextResponse.json({
                error: "Unauthorized",
            }, {
                status: 401,
            });            
        }

        const cookieStore = await cookies();
        const metadataCookie = cookieStore.get("metadata");

        if (metadataCookie?.value) {
            return NextResponse.json({
                exists: true,
                source: "cookie",
                metadata: JSON.parse(metadataCookie.value),
            }, {
                status: 200,
            })            
        }
    } catch (error) {
        
    }
}