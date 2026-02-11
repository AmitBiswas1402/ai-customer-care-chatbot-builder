"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed top-0 inset-x-0 z-50 backdrop-blur-lg bg-black/40 border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">

        {/* LOGO */}
        <Link href="/" className="flex items-center gap-2">
          <Image src="/logo.svg" width={28} height={28} alt="logo" />
          <span className="text-xl sm:text-2xl font-semibold text-white/90">
            AI Support
          </span>
        </Link>

        {/* DESKTOP NAV */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-400">
          <Link href="#features" className="hover:text-white transition">
            Features
          </Link>
          <Link href="#how-it-works" className="hover:text-white transition">
            Integration
          </Link>
          <Link href="#pricing" className="hover:text-white transition">
            Pricing
          </Link>
        </div>

        {/* RIGHT BUTTONS */}
        <div className="hidden md:flex items-center gap-4">
          <Link
            href="/api/login"
            className="text-sm text-zinc-400 hover:text-white border border-zinc-700 px-4 py-2 rounded-md"
          >
            Sign In
          </Link>
          <Link
            href="/api/register"
            className="px-4 py-2 rounded-md bg-linear-to-r from-blue-500 to-green-500 text-white text-sm"
          >
            Get Started
          </Link>
        </div>

        {/* MOBILE MENU BTN */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-white"
        >
          <Menu size={22} />
        </button>
      </div>

      {/* MOBILE DROPDOWN */}
      {open && (
        <div className="md:hidden bg-black border-t border-white/10">
          <div className="flex flex-col px-6 py-4 gap-4 text-zinc-300">
            <Link href="#features">Features</Link>
            <Link href="#how-it-works">Integration</Link>
            <Link href="#pricing">Pricing</Link>

            <div className="flex gap-3 pt-3 border-t border-white/10">
              <Link href="/api/login" className="flex-1 text-center border border-zinc-700 py-2 rounded-md">
                Sign In
              </Link>
              <Link href="/api/register" className="flex-1 text-center bg-linear-to-r from-blue-500 to-green-500 py-2 rounded-md">
                Start
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
