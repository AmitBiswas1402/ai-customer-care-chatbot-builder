"use client";

const Integration = () => {
  return (
    <section className="relative py-28 px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center relative z-10">
        {/* LEFT CONTENT */}
        <div>
          <h2 className="text-4xl md:text-5xl font-medium tracking-tight mb-6">
            Drop-in simplicity.
          </h2>

          <p className="text-zinc-500 text-lg leading-relaxed mb-10 max-w-lg">
            No complex SDKs or user syncing. Just add our script tag and
            you&apos;re live. We inherit your CSS variables automatically.
          </p>

          {/* steps */}
          <div className="relative">
            {/* vertical line */}
            <div className="absolute left-3.25 top-2 bottom-2 w-px bg-white/10" />

            <div className="space-y-8">
              {[
                "Scan your documentation URL",
                "Copy the embed snippet",
                "Auto-resolve tickets",
              ].map((step, i) => (
                <div key={i} className="flex gap-4 items-start relative">
                  {/* number circle */}
                  <div className="relative z-10">
                    <div className="w-7 h-7 rounded-full bg-zinc-900 border border-white/10 flex items-center justify-center text-sm text-zinc-300">
                      {i + 1}
                    </div>
                  </div>

                  {/* text */}
                  <div className="text-zinc-400 text-base pt-0.5">{step}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* RIGHT CODE CARD */}
        <div className="relative">
          <div className="rounded-2xl border border-white/5 bg-linear-to-b from-white/3 to-transparent shadow-2xl overflow-hidden">
            {/* fake window header */}
            <div className="flex items-center justify-between px-4 py-3 border-b border-white/5 bg-zinc-900/60">
              <span className="text-xs text-zinc-400 font-mono">
                index.html
              </span>

              <div className="flex items-center gap-3">
                <div className="w-3 h-3 rounded-sm bg-zinc-500/60" />
                <div className="w-3 h-3 rounded-sm border border-zinc-500/60" />
                <div className="w-3 h-3 rounded-sm bg-red-500/70" />
              </div>
            </div>

            {/* code */}
            <div className="p-6 text-sm font-mono text-zinc-300 leading-relaxed">
              <span className="text-zinc-500">
                &lt;!-- OneMinute Support --&gt;
              </span>
              <br />
              <span className="text-pink-400">&lt;script</span>
              <br />
              <span className="ml-4 text-green-400">
                src=&quot;https://oneminutesupport.com/init.js&quot;
              </span>
              <br />
              <span className="ml-4 text-blue-400">
                data-id=&quot;b7858803-18ca-479b-baf6-cb289e309a5&quot;
              </span>
              <br />
              <span className="ml-4 text-zinc-400">defer</span>
              <br />
              <span className="text-pink-400">&gt;&lt;/script&gt;</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Integration;
