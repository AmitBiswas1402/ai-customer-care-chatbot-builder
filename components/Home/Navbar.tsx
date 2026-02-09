import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="fixed top-0 inset-x-0 z-50 transition-all duration-300">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href={"/"} className="flex items-center gap-2">
          <Image src="/logo.svg" width={30} height={30} alt="logo" />
          <span className="text-2xl font-semibold tracking-tight text-white/90">
            AI Support
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-400">
          <Link
            href="#features"
            className="hover:text-white/90 transition-colors"
          >
            Features
          </Link>
          <Link
            href="#how-it-works"
            className="hover:text-white/90 transition-colors"
          >
            Integration
          </Link>
          <Link
            href="#princing"
            className="hover:text-white/90 transition-colors"
          >
            Pricing
          </Link>
        </div>
        <div className="flex items-center gap-4">
          <Link
            href="/api/login"
            className="text-sm font-medium text-zinc-400 hover:text-white transition-colors border border-zinc-700 px-4 py-2 rounded-md"
          >
            Sign In
          </Link>
          <Link
            href="/api/register"
            className="px-4 py-2 rounded-md bg-linear-to-r from-blue-500 to-green-500 text-white text-sm font-medium hover:from-blue-600 hover:to-green-600 transition-colors"
          >
            Get Started
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
