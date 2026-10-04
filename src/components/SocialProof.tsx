import { AGENCY_METRICS, CLIENT_LOGOS } from '../data/agencyData';
import { ShieldCheck } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

export default function SocialProof() {
  return (
    <section className="py-20 md:py-28 bg-[#090a0e] border-b border-white/5 relative overflow-hidden">
      {/* Subtle futuristic laser line across top on entry */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <ScrollReveal direction="up" distance={20}>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 pb-6 border-b border-white/10">
            <div>
              <div className="text-xs uppercase tracking-widest text-cyan-400 font-mono mb-2 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                <span>Audited Performance Metrics</span>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white tracking-tight uppercase">
                ATTENTION AT SCALE.
              </h2>
            </div>
            <div className="text-neutral-400 text-xs sm:text-sm max-w-md font-sans">
              Independent attribution data aggregated across 140+ active client distribution campaigns and whitelisted ad accounts over the last 12 months.
            </div>
          </div>
        </ScrollReveal>

        {/* 4 Large Quantified Metric Blocks with Staggered Scroll Reveal */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
          {AGENCY_METRICS.map((metric, idx) => (
            <ScrollReveal key={metric.label} delay={idx * 75} direction="up" distance={24}>
              <div className="p-6 md:p-8 bg-[#0d0e14] border border-white/10 rounded-xl relative group hover:border-cyan-500/40 hover:-translate-y-1 transition-all duration-300">
                {/* Subtle top edge scanner line on hover */}
                <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-cyan-400/0 group-hover:via-cyan-400/60 to-transparent transition-all duration-500" />
                
                <div className="text-xs font-mono text-cyan-400 uppercase tracking-wider mb-2 flex items-center justify-between">
                  <span>Verified Metric</span>
                  <span className="text-neutral-500">{metric.change}</span>
                </div>
                <div className="text-4xl sm:text-5xl font-display font-extrabold text-white tracking-tight tabular-nums group-hover:text-cyan-300 transition-colors">
                  {metric.value}
                </div>
                <div className="mt-3 text-xs sm:text-sm text-neutral-300 font-medium">
                  {metric.label}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Client Partner Roster / Marquee */}
        <ScrollReveal delay={200} direction="up" distance={20}>
          <div className="mt-16 md:mt-20 pt-10 border-t border-white/5">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-8">
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-neutral-400">
                <ShieldCheck className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>Trusted by Industry Challengers & Global Enterprises</span>
              </div>
              <div className="text-[11px] font-mono text-neutral-500">
                Contracted Under NDA & Verified Attribution
              </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
              {CLIENT_LOGOS.map((client) => (
                <div
                  key={client.name}
                  className="p-3.5 sm:p-4 bg-[#0a0b10] border border-white/5 rounded-lg flex flex-col justify-center items-center text-center hover:border-white/20 transition-all duration-200"
                >
                  <div className="font-display font-bold text-xs sm:text-sm md:text-base text-neutral-200 tracking-wide uppercase">
                    {client.name}
                  </div>
                  <div className="text-[10px] sm:text-[11px] font-mono text-neutral-500 mt-1">
                    {client.category}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
