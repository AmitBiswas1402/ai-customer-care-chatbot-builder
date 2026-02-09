import { ArrowRight } from "lucide-react";
import { Button } from "../ui/button";

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
          
        </div>
      </div>
    </section>
  );
};
export default Hero;
