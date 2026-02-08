const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-6 overflow-hidden">
        <div className="max-w-4xl mx-auto text-center relative z-20">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-8 animate-float">
            <span className="w-1.5 h-1.5 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34, 197, 94, 0.4)]"></span>
            <span className="text-sm text-zinc-300 tracking-wide font-light">
                Version 1.0.0 - Launched!
            </span>
            </div>
        </div>

    </section>
  )
}
export default Hero