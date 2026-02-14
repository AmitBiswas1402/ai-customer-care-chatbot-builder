import { BookOpen } from "lucide-react";

const Features = () => {
  return (
    <section id="features" className="py-32 px-6 max-w-6xl mx-auto">
      <div className="mb-20">
        <h2 className="text-3xl md:text-5xl font-medium tracking-tight mb-6">
          Designed for trust.
        </h2>
        <p className="text-xl text-zinc-500 font-light max-w-xl leading-relaxed">
          We prioritize your privacy and security. Our chatbot builder is
          designed to keep your data safe and confidential, so you can focus on
          providing exceptional customer support without any worries.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="group p-8 rounded-3xl border border-white/5 bg-linear-to-b from-white/3 to-transparent hover:border-white/10 transition-colors">
          <div className="w-12 h-12 rounded-2xl bg-black border border-white/10 flex items-center justify-center mb-6 group-hover:scale-105 transition-transform">
            <BookOpen className="w-6 h-6 text-zinc-300" />
          </div>
          <h3 className="text-lg font-medium text-zinc-300 mb-3">
            Knowledge Graphs
          </h3>
          <p className="text-sm text-zinc-400 font-light leading-relaxed">
            We crawl your site and docs to build a knowledge graph, ensuring
            your chatbot has access to the most up-to-date information to
            provide accurate and relevant responses to your customers.
          </p>
        </div>

        <div className="group p-8 rounded-3xl border border-white/5 bg-linear-to-b from-white/3 to-transparent hover:border-white/10 transition-colors">
          <div className="w-12 h-12 rounded-2xl bg-black border border-white/10 flex items-center justify-center mb-6 group-hover:scale-105 transition-transform">
            <BookOpen className="w-6 h-6 text-zinc-300" />
          </div>
          <h3 className="text-lg font-medium text-zinc-300 mb-3">
            Multi-Language Support
          </h3>
          <p className="text-sm text-zinc-400 font-light leading-relaxed">
            Support customers in their preferred language with our built-in
            multi-language capabilities, enabling you to expand your reach
            globally and provide seamless support across different regions.
          </p>
        </div>

        <div className="group p-8 rounded-3xl border border-white/5 bg-linear-to-b from-white/3 to-transparent hover:border-white/10 transition-colors">
          <div className="w-12 h-12 rounded-2xl bg-black border border-white/10 flex items-center justify-center mb-6 group-hover:scale-105 transition-transform">
            <BookOpen className="w-6 h-6 text-zinc-300" />
          </div>
          <h3 className="text-lg font-medium text-zinc-300 mb-3">
            Analytics & Insights
          </h3>
          <p className="text-sm text-zinc-400 font-light leading-relaxed">
            Track chatbot performance with detailed analytics and gain actionable
            insights into customer interactions, helping you continuously improve
            your support strategy and customer satisfaction.
          </p>
        </div>
      </div>
    </section>
  );
};
export default Features;
