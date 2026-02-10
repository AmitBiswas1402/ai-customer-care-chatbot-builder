import { ArrowRight } from "lucide-react";
import { Button } from "../ui/button";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-6 overflow-hidden">
      <div className="max-w-4xl mx-auto text-center relative z-20">
        {/* Version tag */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-8 animate-float">
          <span className="w-1.5 h-1.5 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34, 197, 94, 0.4)]"></span>
          <span className="text-sm text-zinc-300 tracking-wide font-light">
            Version 1.0.0 - Launched!
          </span>
        </div>

        {/* Hero title */}
        <h1 className="text-5xl md:text-7xl font-medium tracking-tight mb-6 leading-[1.1]">
          Human Support,
          <br />
          <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-green-400">
            AI Powered
          </span>
        </h1>

        {/* Hero description */}
        <p className="text-lg md:text-xl text-zinc-500 font-sans mb-10 max-w-2xl mx-auto leading-relaxed">
          Instantly resolve customer questions with assistance that reads docs
          and speaks with empathy and keep patience.
        </p>

        {/* Hero Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20">
          <Button
            size={"lg"}
            className="px-9 py-3 rounded-4xl bg-linear-to-r from-blue-500 to-green-500 text-white text-base font-medium hover:from-blue-600 hover:to-green-600 transition-colors inline-flex items-center gap-2"
          >
            Start for Free
            <ArrowRight className="w-4 h-4" />
          </Button>
          <Button
            size={"lg"}
            className="text-base font-medium text-zinc-400 hover:text-white transition-colors border border-zinc-700 px-9 py-4 rounded-4xl"
            variant={"outline"}
          >
            View Demo
          </Button>
        </div>
      </div>

      {/* Floating chat interface Visualization */}
      <div className="max-w-3xl mx-auto relative z-10">
        <div className="absolute inset-0 bg-indigo-500/10 blur-[100px] rounded-full pointer-events-none"></div>
        <div className="rounded-2xl p-1 md:p-2 relative overflow-hidden ring-1 ring-white/10 bg-black shadow-2xl">
          <div className="flex flex-col h-125 md:h-150 w-full bg-black rounded-xl overflow-hidden">
            <div className="h-14 border-b border-white/5 flex items-center justify-between px-6 bg-black shrink-0">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-sm font-medium text-zinc-300">
                  AI Support Chat Bot
                </span>
              </div>
            </div>

            <div className="flex-1 p-6 overflow-y-auto bg-zinc-950/30">
              <div className="flex w-full flex-col items-start">
                <div className="flex max-w-[85%] gap-3 flex-row">
                  <div className="w-8 h-8 rounded-full flex items-center justify-center overflow-hidden">
                    <Image
                      src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      height={40}
                      width={40}
                      alt="AI Support Chat Bot"
                      className="w-full h-full object-cover rounded-full"
                    />
                  </div>

                  <div className="space-y-2">
                    <div className="p-4 rounded-2xl text-sm leading-relaxed shadow-sm bg-white text-zinc-900">
                      Hi there, how can I help you today?
                    </div>

                    <div className="flex flex-wrap gap-2 mt-1 ml-1">
                      <span className="px-3 py-1.5 rounded-full border border-zinc-700 bg-zinc-800/50 text-zinc-300 text-xs font-medium cursor-default">
                        FAQ
                      </span>
                      <span className="px-3 py-1.5 rounded-full border border-zinc-700 bg-zinc-800/50 text-zinc-300 text-xs font-medium cursor-default">
                        Pricing 
                      </span>
                      <span className="px-3 py-1.5 rounded-full border border-zinc-700 bg-zinc-800/50 text-zinc-300 text-xs font-medium cursor-default">
                        Support
                      </span>
                    </div>
                  </div>
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
