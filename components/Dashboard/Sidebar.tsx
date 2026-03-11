import Image from "next/image";
import Link from "next/link";

const Sidebar = () => {
  return (
    <div className="w-64 border-r border-white/5 bg-black flex-col h-screen fixed left-0 top-0 z-40 hidden md:flex">
      <div className="h-16 flex items-center px-6 border-b border-white/5">
        <div className="flex items-center gap-2">
          <div className="w-5 h-5 bg-white rounded-sm flex items-center justify-center">
            <div className="w-2.5 h-2.5 bg-black rounded-sm"></div>
          </div>
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
    </div>
  );
};
export default Sidebar;
