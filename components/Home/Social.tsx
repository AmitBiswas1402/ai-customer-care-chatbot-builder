import { Cpu, Cloud, Shield, Zap, Database, Bot } from "lucide-react";

const companies = [
  { name: "NovaAI", icon: Bot, gradient: "from-blue-500 to-cyan-400" },
  { name: "Cloudly", icon: Cloud, gradient: "from-indigo-500 to-purple-500" },
  { name: "Vector", icon: Cpu, gradient: "from-emerald-500 to-teal-400" },
  { name: "Helix", icon: Zap, gradient: "from-yellow-500 to-orange-500" },
  { name: "Zenith", icon: Shield, gradient: "from-pink-500 to-rose-500" },
  { name: "Orbit", icon: Database, gradient: "from-sky-500 to-blue-600" },
];

const SocialProof = () => {
  return (
    <section className="py-16 border-y border-white/5 bg-black/30 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 text-center">

        {/* title */}
        <p className="text-xs font-medium text-zinc-500 uppercase tracking-[0.3em] mb-12">
          Trusted by modern product teams worldwide
        </p>

        {/* logos grid */}
        <div className="
          grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6
          gap-6 md:gap-8
          items-center justify-items-center
        ">
          {companies.map((company) => {
            const Icon = company.icon;

            return (
              <div
                key={company.name}
                className="
                  group
                  relative
                  w-full
                  max-w-37.5
                  h-16
                  rounded-xl
                  bg-zinc-900/60
                  border border-white/5
                  flex items-center justify-center
                  gap-2
                  transition-all duration-300
                  hover:border-white/20
                  hover:-translate-y-1
                  hover:shadow-[0_0_30px_rgba(255,255,255,0.05)]
                "
              >
                {/* gradient glow */}
                <div className={`
                  absolute inset-0 rounded-xl opacity-0
                  bg-linear-to-r ${company.gradient}
                  blur-xl transition-opacity duration-300
                  group-hover:opacity-20
                `} />

                {/* icon */}
                <Icon className="w-5 h-5 text-zinc-300 group-hover:text-white transition" />

                {/* name */}
                <span className="text-sm font-medium text-zinc-400 group-hover:text-white transition">
                  {company.name}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
