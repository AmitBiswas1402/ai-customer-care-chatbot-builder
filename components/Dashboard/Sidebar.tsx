"use client";

import { SIDEBAR_ITEMS } from "@/constants/lib";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useUser } from "@/hooks/useUser";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const Sidebar = ({ metadata }: { metadata: any }) => {
  const pathname = usePathname();
  const { email, loading } = useUser();

  // Get initials from business name
  const getInitials = (name: string) => {
    return name
      .split(" ")
      .map((word) => word[0])
      .join("")
      .toUpperCase()
      .slice(0, 2);
  };

  const initials = metadata?.business_name ? getInitials(metadata.business_name) : "BN";
  const businessName = metadata?.business_name || "Business";

  return (
    <div className="w-64 border-r border-white/5 bg-black h-screen fixed left-0 top-0 z-40 hidden md:flex flex-col">
      <div className="h-16 flex items-center px-6 border-b border-white/5">
        <div className="flex items-center gap-2">
          <span className="text-sm font-medium tracking-tight text-white/90">
            <Link href="/" className="flex items-center gap-2">
              <Image src="/logo.svg" width={28} height={28} alt="logo" />
              <span className="text-xl sm:text-2xl font-semibold text-white/90">
                AI Support
              </span>
            </Link>
          </span>
        </div>
      </div>

      <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
        {SIDEBAR_ITEMS.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              href={item.href}
              key={item.href}
              className={cn(
                "flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium transition-colors",
                isActive ? "bg-white/10 text-white" : "text-white/90 hover:bg-white/5"
              )}
            >
              <item.icon className="w-5 h-5" />
              <span>{item.label}</span>
            </Link>
          );
        })}
      </nav>

      {/* User Profile Section */}
      <div className="px-4 py-4 m-4 bg-zinc-900 rounded-lg border border-white/5">
        <div className="flex items-center gap-3">
          <Avatar className="h-10 w-10 bg-indigo-500">
            <AvatarFallback className="bg-indigo-500 text-white font-semibold text-sm">
              {initials}
            </AvatarFallback>
          </Avatar>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-white truncate">
              {businessName}'s workspace
            </p>
            <p className="text-xs text-zinc-500 truncate">{email || "Loading..."}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Sidebar;
