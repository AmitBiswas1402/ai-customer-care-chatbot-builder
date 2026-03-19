"use client";

import { usePathname } from "next/navigation";

const Header = ({ metadata }: { metadata: any }) => {
  const pathname = usePathname();

  // Get the page title from the pathname
  const getPageTitle = (path: string) => {
    const segments = path.split("/").filter(Boolean);
    if (segments.length <= 1) return null; // Don't show header on /dashboard
    
    const lastSegment = segments[segments.length - 1];
    return lastSegment.charAt(0).toUpperCase() + lastSegment.slice(1);
  };

  const pageTitle = getPageTitle(pathname);

  // Only render header if we have a page title (i.e., we're not on /dashboard alone)
  if (!pageTitle) return null;

  return (
    <div className="h-16 border-b border-white/5 bg-black/50 backdrop-blur-sm flex items-center px-6">
      <h1 className="text-lg font-semibold text-white">{pageTitle}</h1>
    </div>
  )
}
export default Header