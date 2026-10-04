import { useState } from 'react';
import { CLIENT_ARCHETYPES } from '../data/agencyData';
import { ArrowUpRight, Target, AlertTriangle, Lightbulb, Trophy } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

interface WhoWeWorkWithProps {
  onOpenCampaignModal: (clientTypeId?: string) => void;
}

export default function WhoWeWorkWith({ onOpenCampaignModal }: WhoWeWorkWithProps) {
  const [selectedId, setSelectedId] = useState(CLIENT_ARCHETYPES[0].id);
  const activeArchetype = CLIENT_ARCHETYPES.find((c) => c.id === selectedId) || CLIENT_ARCHETYPES[0];

  return (
    <section id="clients" className="py-20 md:py-32 bg-[#070709] border-b border-white/5 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <ScrollReveal direction="up" distance={20}>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 md:mb-16 pb-8 border-b border-white/10">
            <div>
              <div className="text-xs uppercase tracking-widest text-cyan-400 font-mono mb-2 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                <span>Strategic Partnerships</span>
              </div>
              <h2 className="text-3xl sm:text-5xl md:text-6xl font-display font-extrabold text-white tracking-tight uppercase">
                WHO WE WORK WITH.
              </h2>
            </div>
            <div className="text-neutral-400 text-xs sm:text-sm max-w-md font-sans">
              We partner exclusively with companies and leaders ready to invest in aggressive, high-frequency organic cultural distribution.
            </div>
          </div>
        </ScrollReveal>

        {/* Archetype Selector Tabs */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-4 mb-8 sm:mb-10">
          {CLIENT_ARCHETYPES.map((arch, idx) => (
            <ScrollReveal key={arch.id} delay={idx * 60} direction="up" distance={16}>
              <button
                onClick={() => setSelectedId(arch.id)}
                className={`w-full p-4 sm:p-6 rounded-xl border text-left transition-all cursor-pointer min-h-[48px] active:scale-[0.99] ${
                  selectedId === arch.id
                    ? 'bg-[#12131c] border-cyan-400/80 shadow-[0_0_20px_rgba(6,182,212,0.12)]'
                    : 'bg-[#0a0b10] border-white/10 hover:border-white/20'
                }`}
              >
                <div className="text-[11px] font-mono text-cyan-400 uppercase tracking-wider mb-1.5">
                  Partner Profile 0{idx + 1}
                </div>
                <h3 className="font-display font-bold text-base sm:text-lg text-white mb-1.5">
                  {arch.title}
                </h3>
                <p className="text-xs text-neutral-400 line-clamp-2">
                  {arch.subtitle}
                </p>
              </button>
            </ScrollReveal>
          ))}
        </div>

        {/* Selected Profile Detailed Blueprint */}
        <ScrollReveal direction="up" distance={20}>
          <div className="bg-[#0b0c12] border border-white/10 rounded-2xl p-5 sm:p-10 relative">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* Left Column: Context & Bottlenecks */}
              <div className="lg:col-span-6 space-y-5 sm:space-y-6">
                <div>
                  <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-cyan-400 mb-2">
                    <Target className="w-4 h-4" />
                    <span>Ideal Partner Profile</span>
                  </div>
                  <h3 className="text-xl sm:text-3xl font-display font-bold text-white mb-2">
                    {activeArchetype.title}
                  </h3>
                  <p className="text-xs sm:text-sm font-mono text-neutral-400">
                    {activeArchetype.subtitle}
                  </p>
                </div>

                <div className="p-4 bg-neutral-900/60 border border-white/5 rounded-xl">
                  <div className="flex items-center gap-2 text-xs font-mono text-amber-400 uppercase tracking-wider mb-1.5">
                    <AlertTriangle className="w-3.5 h-3.5 shrink-0" />
                    <span>The Core Friction Point</span>
                  </div>
                  <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed font-sans">
                    {activeArchetype.typicalBottleneck}
                  </p>
                </div>

                <div className="p-4 bg-[#10131f] border border-cyan-500/20 rounded-xl">
                  <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 uppercase tracking-wider mb-1.5">
                    <Lightbulb className="w-3.5 h-3.5 shrink-0" />
                    <span>The Zeronix Growth Intervention</span>
                  </div>
                  <p className="text-xs sm:text-sm text-neutral-200 leading-relaxed font-sans">
                    {activeArchetype.zeronixSolution}
                  </p>
                </div>
              </div>

              {/* Right Column: Execution Blueprint & Expected Outcomes */}
              <div className="lg:col-span-6 space-y-5 sm:space-y-6 bg-neutral-950/70 p-5 sm:p-6 rounded-xl border border-white/10">
                <div>
                  <div className="text-[11px] font-mono uppercase tracking-wider text-neutral-400 mb-3">
                    Dedicated Growth Deliverables
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {activeArchetype.keyOutputs.map((output, idx) => (
                      <div
                        key={idx}
                        className="p-3 bg-neutral-900/90 border border-white/5 rounded-lg text-xs font-mono text-neutral-200"
                      >
                        {output}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="p-4 bg-emerald-950/20 border border-emerald-500/30 rounded-lg">
                  <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 uppercase tracking-wider mb-1">
                    <Trophy className="w-3.5 h-3.5 shrink-0" />
                    <span>Audited Benchmark Impact</span>
                  </div>
                  <div className="text-base sm:text-lg font-display font-bold text-white">
                    {activeArchetype.benchmarkResult}
                  </div>
                </div>

                <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
                  <span className="text-[11px] font-mono text-neutral-500">
                    Ready to deploy for this archetype?
                  </span>
                  <button
                    onClick={() => onOpenCampaignModal(activeArchetype.id)}
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 text-xs font-semibold uppercase tracking-wider text-black bg-cyan-400 hover:bg-cyan-300 rounded transition-all cursor-pointer whitespace-nowrap font-mono"
                  >
                    <span>Build This Campaign</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
