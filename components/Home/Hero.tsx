import { ArrowRight, Send, User } from "lucide-react";
import { Button } from "../ui/button";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="relative pt-28 sm:pt-32 md:pt-40 pb-20 px-4 sm:px-6 overflow-hidden">

      {/* CENTER CONTENT */}
      <div className="max-w-4xl mx-auto text-center relative z-20">

        {/* TAG */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 mb-6">
          <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
          <span className="text-xs sm:text-sm text-zinc-300">
            Version 1.0.0 — Launched!
          </span>
        </div>

        {/* TITLE */}
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-medium tracking-tight mb-6 leading-[1.1]">
          Human Support
          <br />
          <span className="bg-linear-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">
            AI Powered
          </span>
        </h1>

        {/* DESC */}
        <p className="text-base sm:text-lg md:text-xl text-zinc-500 mb-10 max-w-2xl mx-auto">
          Instantly resolve customer questions with assistance that reads docs
          and responds with empathy.
        </p>

        {/* BUTTONS */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <Button className="px-8 py-3 rounded-full bg-linear-to-r from-blue-500 to-green-500">
            Start for Free
            <ArrowRight className="ml-2 w-4 h-4" />
          </Button>

          <Button
            variant="outline"
            className="px-8 py-3 rounded-full border border-zinc-700 text-zinc-300"
          >
            View Demo
          </Button>
        </div>
      </div>

      {/* CHAT PREVIEW */}
      <div className="max-w-3xl mx-auto relative z-10 px-2">
        <div className="rounded-2xl p-1 bg-black shadow-2xl ring-1 ring-white/10">

          <div className="flex flex-col h-105 sm:h-130 md:h-150 bg-black rounded-xl overflow-hidden">

            {/* HEADER */}
            <div className="h-12 border-b border-white/5 flex items-center px-4">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
                <span className="text-sm text-zinc-300">AI Support Bot</span>
              </div>
            </div>

            {/* CHAT BODY */}
            <div className="flex-1 p-4 sm:p-6 overflow-y-auto space-y-6">

              {/* BOT */}
              <div className="flex gap-3 max-w-[90%]">
                <div className="size-9 rounded-full overflow-hidden shrink-0">
                  <Image
                    src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde"
                    width={40}
                    height={40}
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="bg-white text-zinc-900 p-3 sm:p-4 rounded-2xl text-sm">
                  Hi there, how can I help you today?
                </div>
              </div>

              {/* USER */}
              <div className="flex justify-end">
                <div className="flex gap-3 max-w-[90%] flex-row-reverse">
                  <div className="size-9 rounded-full bg-zinc-800 flex items-center justify-center">
                    <User className="w-4 h-4 text-zinc-400" />
                  </div>

                  <div className="bg-zinc-800 text-zinc-200 p-3 sm:p-4 rounded-2xl text-sm">
                    Tell me more about this application.
                  </div>
                </div>
              </div>
            </div>

            {/* INPUT */}
            <div className="p-3 border-t border-white/5">
              <div className="flex items-center bg-zinc-900 rounded-xl px-4 py-3 text-sm text-zinc-500">
                Type your message...
                <div className="ml-auto size-8 rounded-lg bg-zinc-800 flex items-center justify-center">
                  <Send className="w-4 h-4" />
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
