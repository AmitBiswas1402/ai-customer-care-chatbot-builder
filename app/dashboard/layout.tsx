import Sidebar from "@/components/Dashboard/Sidebar";
import { cookies } from "next/headers";
import Header from "../../components/Dashboard/Header";

export const metadata = {
  title: "Dashboard",
};

export default async function DashboardLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const cookieStore = await cookies();
  const metadataCookie = cookieStore.get("metadata");
  
  let metadata = null;
  if (metadataCookie?.value) {
    try {
      metadata = JSON.parse(metadataCookie.value);
    } catch (error) {
      console.error("Error parsing metadata cookie:", error);
    }
  }

  return (
    <div className="bg-black min-h-screen font-sans antialiased text-zinc-100 selection:bg-zinc-800 flex">
      {metadataCookie?.value ? (<>
        <Sidebar metadata={metadata} />
        <div className="flex-1 flex flex-col md:ml-64 relative min-h-screen transition-all duration-300">
          <main className="flex-1">{children}</main>
        </div>
      </>) : (children)}
    </div>
  );
}
