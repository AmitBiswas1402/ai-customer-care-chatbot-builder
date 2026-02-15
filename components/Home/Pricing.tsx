"use client";

import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const Pricing = () => {
  return (
    <section className="relative py-36 px-6 overflow-hidden">
      {/* === SAME BACKGROUND SYSTEM AS INTEGRATION === */}
      <div className="absolute inset-0 pointer-events-none">
        {/* subtle grid */}
        <div
          className="absolute inset-0 opacity-[0.04] 
          [background-image:linear-gradient(to_right,white_1px,transparent_1px),
          linear-gradient(to_bottom,white_1px,transparent_1px)]
          bg-size-[60px_60px]"
        />
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        {/* TITLE */}
        <div className="text-center mb-24">
          <h2 className="text-5xl font-medium text-white tracking-tight">
            Fair, usage-based pricing.
          </h2>
          <p className="text-zinc-500 mt-4 text-lg">
            Start free, upgrade as you grow.
          </p>
        </div>

        {/* CARDS */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* STARTER */}
          <div className="flex flex-col justify-between rounded-2xl border border-white/5 bg-linear-to-b from-white/3 to-transparent shadow-2xl min-h-115 p-5">
            <div>
              <p className="text-zinc-400 mb-4">Starter</p>

              <div className="flex items-end gap-2 mb-8">
                <span className="text-5xl font-semibold text-white">$0</span>
                <span className="text-zinc-500 mb-1">/mo</span>
              </div>

              <ul className="space-y-4 mb-10">
                <li className="flex gap-3 text-zinc-400">
                  <Check className="w-4 h-4 text-emerald-400 mt-1" />
                  100 conversations/mo
                </li>
                <li className="flex gap-3 text-zinc-400">
                  <Check className="w-4 h-4 text-emerald-400 mt-1" />1 Knowledge
                  Source
                </li>
                <li className="flex gap-3 text-zinc-400">
                  <Check className="w-4 h-4 text-emerald-400 mt-1" />
                  Community Support
                </li>
              </ul>
            </div>

            {/* BUTTON */}
            <Button className="w-full bg-zinc-800/70 border border-white/10 text-white hover:bg-zinc-700 rounded-xl">
              Start Free
            </Button>
          </div>

          {/* PRO */}
          <div className="flex flex-col justify-between relative rounded-2xl border border-white/5 bg-linear-to-b from-white/3 to-transparent shadow-2xl min-h-115 p-5">
            <div>
              <div className="absolute top-5 right-5 text-xs px-3 py-1 rounded-full bg-zinc-800 border border-white/10 text-zinc-300">
                POPULAR
              </div>

              <p className="text-blue-400 mb-4">Pro</p>

              <div className="flex items-end gap-2 mb-8">
                <span className="text-5xl font-semibold text-white">$49</span>
                <span className="text-zinc-500 mb-1">/mo</span>
              </div>

              <ul className="space-y-4 mb-10">
                <li className="flex gap-3 text-zinc-400">
                  <Check className="w-4 h-4 text-blue-400 mt-1" />
                  unlimited conversations
                </li>
                <li className="flex gap-3 text-zinc-400">
                  <Check className="w-4 h-4 text-blue-400 mt-1" />
                  unlimited Knowledge Sources
                </li>
                <li className="flex gap-3 text-zinc-400">
                  <Check className="w-4 h-4 text-blue-400 mt-1" />
                  Community Support
                </li>
                <li className="flex gap-3 text-zinc-400">
                  <Check className="w-4 h-4 text-blue-400 mt-1" />
                  Custom Branding
                </li>
              </ul>
            </div>

            {/* BUTTON */}
            <Button className="w-full bg-white text-black hover:bg-zinc-200 rounded-xl">
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
