import { useState } from 'react';
import { Check, X as CloseIcon, Calculator, ArrowUpRight, Zap, Shield, Cpu, Flame, MoveHorizontal } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

interface WhyZeronixProps {
  onOpenCampaignModal: (presetData?: any) => void;
}

export default function WhyZeronix({ onOpenCampaignModal }: WhyZeronixProps) {
  const [budgetSlider, setBudgetSlider] = useState<number>(25000);

  // Growth projection calculations based on budget
  const estimatedImpressions = Math.round((budgetSlider / 25000) * 12500000).toLocaleString();
  const estimatedClips = Math.round((budgetSlider / 25000) * 60);
  const estimatedCreators = Math.round((budgetSlider / 25000) * 16);
  const projectedRevenueLow = Math.round(budgetSlider * 3.4).toLocaleString();
  const projectedRevenueHigh = Math.round(budgetSlider * 5.2).toLocaleString();

  const comparisonRows = [
    {
      feature: 'Production Velocity',
      traditional: '4–6 weeks for approval and delivery',
      zeronix: '48-hour turnarounds & continuous weekly sprints',
    },
    {
      feature: 'Content Volume',
      traditional: '4–8 generic static posts/month',
      zeronix: '40–120 high-retention 9:16 video assets/month',
    },
    {
      feature: 'Distribution Network',
      traditional: 'Post to client’s own channels only',
      zeronix: 'Proprietary matrix of 120+ syndicated creator handles',
    },
    {
      feature: 'Measurement Standard',
      traditional: 'Vanity likes and unverified impressions',
      zeronix: 'Audited CAC compression, pipeline & blended ROAS',
    },
    {
      feature: 'Paid & Organic Synergy',
      traditional: 'Siloed media buying and creative teams',
      zeronix: 'Winning organic clips automatically whitelisted into ads',
    },
    {
      feature: 'Talent Model',
      traditional: 'Junior account executives and outsourced interns',
      zeronix: 'Senior video directors, algorithm engineers & media buyers',
    },
  ];

  return (
    <section className="py-20 md:py-32 bg-[#070709] border-b border-white/5 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <ScrollReveal direction="up" distance={20}>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 md:mb-16 pb-8 border-b border-white/10">
            <div>
              <div className="text-xs uppercase tracking-widest text-cyan-400 font-mono mb-2 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                <span>The Structural Advantage</span>
              </div>
              <h2 className="text-3xl sm:text-5xl md:text-6xl font-display font-extrabold text-white tracking-tight uppercase">
                WHY ZERONIX.
              </h2>
            </div>
            <div className="text-neutral-400 text-xs sm:text-sm max-w-md font-sans">
              Traditional agencies charge high retainers for slow, static vanity work. Zeronix is an engineering-driven distribution engine built for modern algorithmic feeds.
            </div>
          </div>
        </ScrollReveal>

        {/* Feature Grid: 4 Core Pillars with Staggered Scroll Animation */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-12 md:mb-16">
          <ScrollReveal delay={0} direction="up" distance={20}>
            <div className="p-5 sm:p-6 bg-[#0b0c12] border border-white/10 rounded-xl hover:border-cyan-500/40 hover:-translate-y-1 transition-all duration-300 h-full">
              <Zap className="w-6 h-6 text-cyan-400 mb-3 sm:mb-4" />
              <h3 className="font-display font-bold text-base sm:text-lg text-white mb-2">Algorithmic Velocity</h3>
              <p className="text-xs text-neutral-400 leading-relaxed font-sans">
                We engineer sub-second hooks and retention patterns based on live platform algorithm shifts, not outdated social media playbooks.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={75} direction="up" distance={20}>
            <div className="p-5 sm:p-6 bg-[#0b0c12] border border-white/10 rounded-xl hover:border-cyan-500/40 hover:-translate-y-1 transition-all duration-300 h-full">
              <Cpu className="w-6 h-6 text-cyan-400 mb-3 sm:mb-4" />
              <h3 className="font-display font-bold text-base sm:text-lg text-white mb-2">Distribution Matrix</h3>
              <p className="text-xs text-neutral-400 leading-relaxed font-sans">
                Our syndication engine deploys your media across dozens of vetted creator handles to guarantee omnipresence on user discovery feeds.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={150} direction="up" distance={20}>
            <div className="p-5 sm:p-6 bg-[#0b0c12] border border-white/10 rounded-xl hover:border-cyan-500/40 hover:-translate-y-1 transition-all duration-300 h-full">
              <Flame className="w-6 h-6 text-cyan-400 mb-3 sm:mb-4" />
              <h3 className="font-display font-bold text-base sm:text-lg text-white mb-2">Whitelisted Ads</h3>
              <p className="text-xs text-neutral-400 leading-relaxed font-sans">
                When an organic clip goes viral, we immediately whitelist it into paid ad accounts, scaling your highest-performing assets at 4x+ ROAS.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={225} direction="up" distance={20}>
            <div className="p-5 sm:p-6 bg-[#0b0c12] border border-white/10 rounded-xl hover:border-cyan-500/40 hover:-translate-y-1 transition-all duration-300 h-full">
              <Shield className="w-6 h-6 text-cyan-400 mb-3 sm:mb-4" />
              <h3 className="font-display font-bold text-base sm:text-lg text-white mb-2">Contracted Accountability</h3>
              <p className="text-xs text-neutral-400 leading-relaxed font-sans">
                Every partnership includes explicit output SLAs, brand safety guardrails, and audited attribution reporting tied to commercial metrics.
              </p>
            </div>
          </ScrollReveal>
        </div>

        {/* Structural Comparison Table with Mobile Scroll Container */}
        <ScrollReveal direction="up" distance={20}>
          <div className="bg-[#0c0d14] border border-white/10 rounded-2xl overflow-hidden mb-16 md:mb-20">
            <div className="p-5 sm:p-8 border-b border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <h3 className="font-display font-bold text-lg sm:text-2xl text-white">
                  Traditional Agency vs. Zeronix Growth System
                </h3>
                <p className="text-xs font-mono text-neutral-400 mt-1">
                  A side-by-side comparison of architecture, velocity, and commercial accountability.
                </p>
              </div>
              <div className="flex items-center gap-2 text-[11px] font-mono text-cyan-400">
                <MoveHorizontal className="w-3.5 h-3.5 md:hidden text-cyan-400 animate-pulse" />
                <span className="md:hidden">Swipe table horizontally</span>
                <span className="hidden md:inline">Contracted Standards</span>
              </div>
            </div>

            {/* Mobile Scroll Wrapper */}
            <div className="overflow-x-auto scrollbar-thin">
              <table className="w-full text-left border-collapse min-w-[600px] md:min-w-full">
                <thead>
                  <tr className="border-b border-white/5 bg-neutral-950/60 text-xs font-mono uppercase text-neutral-400">
                    <th className="p-4 sm:p-6 font-medium">Dimension</th>
                    <th className="p-4 sm:p-6 font-medium text-neutral-500">Legacy Marketing Agencies</th>
                    <th className="p-4 sm:p-6 font-medium text-cyan-400">Zeronix Growth System</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5 text-xs sm:text-sm font-sans">
                  {comparisonRows.map((row, idx) => (
                    <tr key={idx} className="hover:bg-white/[0.02] transition-colors">
                      <td className="p-4 sm:p-6 font-display font-semibold text-white whitespace-nowrap">
                        {row.feature}
                      </td>
                      <td className="p-4 sm:p-6 text-neutral-400">
                        <div className="flex items-center gap-2">
                          <CloseIcon className="w-4 h-4 text-rose-500/70 shrink-0" />
                          <span>{row.traditional}</span>
                        </div>
                      </td>
                      <td className="p-4 sm:p-6 text-neutral-100 font-medium">
                        <div className="flex items-center gap-2">
                          <Check className="w-4 h-4 text-cyan-400 shrink-0" />
                          <span>{row.zeronix}</span>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </ScrollReveal>

        {/* Interactive Growth Projection & ROI Calculator */}
        <ScrollReveal direction="up" distance={20}>
          <div className="bg-[#0b0c12] border border-cyan-500/30 rounded-2xl p-5 sm:p-10 relative overflow-hidden shadow-[0_0_40px_rgba(6,182,212,0.06)]">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 sm:pb-8 border-b border-white/10">
              <div>
                <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-cyan-400 mb-2">
                  <Calculator className="w-4 h-4" />
                  <span>Growth Projection Calculator</span>
                </div>
                <h3 className="text-xl sm:text-3xl font-display font-bold text-white">
                  Estimate Your Campaign Output & Reach
                </h3>
                <p className="text-xs sm:text-sm text-neutral-400 mt-1 max-w-xl font-sans">
                  Adjust your intended monthly growth investment to view projected content velocity, syndication volume, and revenue attribution benchmarks.
                </p>
              </div>

              <div className="p-4 bg-neutral-900/90 border border-white/10 rounded-xl text-left sm:text-right min-w-[200px]">
                <div className="text-[11px] font-mono text-neutral-400">Monthly Growth Budget</div>
                <div className="text-2xl sm:text-3xl font-mono font-bold text-cyan-400 tabular-nums mt-1">
                  ${budgetSlider.toLocaleString()}
                </div>
                <div className="text-[10px] font-mono text-neutral-500 mt-0.5">USD / Month Retainer</div>
              </div>
            </div>

            <div className="my-6 sm:my-8">
              <div className="flex justify-between text-[11px] font-mono text-neutral-400 mb-2">
                <span>$5,000 (Launch)</span>
                <span>$25,000 (Engine)</span>
                <span>$75,000+ (Dominance)</span>
              </div>
              <input
                type="range"
                min="5000"
                max="75000"
                step="5000"
                value={budgetSlider}
                onChange={(e) => setBudgetSlider(Number(e.target.value))}
                className="w-full h-3 bg-neutral-800 rounded-lg appearance-none cursor-pointer accent-cyan-400 py-2"
                aria-label="Monthly budget slider"
              />
            </div>

            {/* Dynamic Calculated Outputs */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-6 sm:mb-8">
              <div className="p-4 bg-neutral-900/70 border border-white/5 rounded-xl">
                <div className="text-[11px] font-mono text-neutral-400 mb-1">Projected Impressions</div>
                <div className="text-xl sm:text-2xl font-mono font-bold text-white tabular-nums">
                  {estimatedImpressions}
                </div>
                <div className="text-[10px] font-mono text-cyan-400 mt-1">Monthly Organic Reach</div>
              </div>

              <div className="p-4 bg-neutral-900/70 border border-white/5 rounded-xl">
                <div className="text-[11px] font-mono text-neutral-400 mb-1">Short-Form Assets</div>
                <div className="text-xl sm:text-2xl font-mono font-bold text-white tabular-nums">
                  {estimatedClips} Clips
                </div>
                <div className="text-[10px] font-mono text-neutral-400 mt-1">Engineered & Edited</div>
              </div>

              <div className="p-4 bg-neutral-900/70 border border-white/5 rounded-xl">
                <div className="text-[11px] font-mono text-neutral-400 mb-1">Creator Nodes Deployed</div>
                <div className="text-xl sm:text-2xl font-mono font-bold text-white tabular-nums">
                  {estimatedCreators} Creators
                </div>
                <div className="text-[10px] font-mono text-purple-400 mt-1">Alliances & Handles</div>
              </div>

              <div className="p-4 bg-neutral-900/70 border border-white/5 rounded-xl">
                <div className="text-[11px] font-mono text-neutral-400 mb-1">Target Revenue Yield</div>
                <div className="text-xl sm:text-2xl font-mono font-bold text-emerald-400 tabular-nums">
                  ${projectedRevenueLow} - ${projectedRevenueHigh}
                </div>
                <div className="text-[10px] font-mono text-emerald-400 mt-1">Based on 3.4x–5.2x ROAS</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 pt-5 border-t border-white/10">
              <div className="text-[11px] font-mono text-neutral-400">
                *Projections modeled on audited historical client campaign performance across 2024–2026.
              </div>
              <button
                onClick={() => onOpenCampaignModal({ budgetTier: `$${budgetSlider.toLocaleString()}/mo` })}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-xs font-semibold uppercase tracking-wider text-black bg-cyan-400 hover:bg-cyan-300 rounded transition-all cursor-pointer whitespace-nowrap shadow-[0_0_20px_rgba(6,182,212,0.25)] font-mono text-center"
              >
                <span>Lock in This Scope</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
