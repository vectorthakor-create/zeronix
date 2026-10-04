import { useState } from 'react';
import { Film, Scissors, Share2, TrendingUp, Sliders, Play, Check } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

interface DistributionEngineProps {
  onOpenCampaignModal: () => void;
}

export default function DistributionEngine({ onOpenCampaignModal }: DistributionEngineProps) {
  const [sourceType, setSourceType] = useState<'podcast' | 'keynote' | 'studio'>('podcast');
  const [clipsPerSource, setClipsPerSource] = useState<number>(45);

  const sources = [
    {
      id: 'podcast',
      name: 'Long-Form Podcast / Interview',
      duration: '45–60 Mins',
      extractableMoments: '30–50 Hooks',
      format: '4K Multi-Cam Audio/Video',
    },
    {
      id: 'keynote',
      name: 'Product Keynote / Founder Stream',
      duration: '30–45 Mins',
      extractableMoments: '25–40 Hooks',
      format: 'Cinema Presentation & Screen',
    },
    {
      id: 'studio',
      name: 'Bespoke Brand Studio Session',
      duration: '90 Mins Batch',
      extractableMoments: '50–80 Hooks',
      format: 'High-Retention Scripted 9:16',
    },
  ];

  // Dynamic calculations based on clipsPerSource
  const projectedMonthlyReach = (clipsPerSource * 145000).toLocaleString();
  const estimatedCreatorNodes = Math.round(clipsPerSource * 0.45);
  const projectedPaidAdVariants = Math.round(clipsPerSource * 0.2);

  return (
    <section id="engine" className="py-20 md:py-32 bg-[#090a0f] border-b border-white/5 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <ScrollReveal direction="up" distance={20}>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 md:mb-16 pb-8 border-b border-white/10">
            <div>
              <div className="text-xs uppercase tracking-widest text-cyan-400 font-mono mb-2 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                <span>Interactive Content Matrix Simulator</span>
              </div>
              <h2 className="text-3xl sm:text-5xl md:text-6xl font-display font-extrabold text-white tracking-tight uppercase">
                THE CLIPPING ENGINE.
              </h2>
            </div>
            <div className="text-neutral-400 text-xs sm:text-sm max-w-md font-sans">
              Explore how Zeronix transforms a single media recording into an international multi-channel organic distribution matrix.
            </div>
          </div>
        </ScrollReveal>

        {/* Simulator Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Controls & Configuration */}
          <div className="lg:col-span-5 space-y-6">
            <ScrollReveal direction="left" distance={20}>
              <div className="p-5 sm:p-6 bg-[#0c0d14] border border-white/10 rounded-2xl">
                <div className="text-xs font-mono uppercase tracking-wider text-neutral-400 mb-4 flex items-center justify-between">
                  <span>1. Select Raw Source Input</span>
                  <Film className="w-4 h-4 text-cyan-400" />
                </div>

                <div className="space-y-2.5">
                  {sources.map((s) => (
                    <button
                      key={s.id}
                      onClick={() => setSourceType(s.id as any)}
                      className={`w-full p-3.5 sm:p-4 rounded-xl border text-left transition-all cursor-pointer min-h-[48px] active:scale-[0.99] ${
                        sourceType === s.id
                          ? 'bg-[#151722] border-cyan-400/80 shadow-[0_0_15px_rgba(6,182,212,0.15)]'
                          : 'bg-[#0a0b10] border-white/5 hover:border-white/15'
                      }`}
                    >
                      <div className="flex items-center justify-between text-xs font-mono mb-1">
                        <span className={sourceType === s.id ? 'text-cyan-400 font-semibold' : 'text-neutral-400'}>
                          {s.format}
                        </span>
                        <span className="text-neutral-500 text-[11px]">{s.duration}</span>
                      </div>
                      <div className="font-display font-bold text-xs sm:text-sm text-white">
                        {s.name}
                      </div>
                    </button>
                  ))}
                </div>

                <div className="mt-6 pt-6 border-t border-white/5">
                  <div className="flex items-center justify-between text-xs font-mono mb-3">
                    <span className="text-neutral-300">Monthly Clip Production Output</span>
                    <span className="text-cyan-400 font-bold tabular-nums text-sm">
                      {clipsPerSource} Clips / Mo
                    </span>
                  </div>
                  <input
                    type="range"
                    min="20"
                    max="120"
                    step="5"
                    value={clipsPerSource}
                    onChange={(e) => setClipsPerSource(Number(e.target.value))}
                    className="w-full h-2.5 bg-neutral-800 rounded-lg appearance-none cursor-pointer accent-cyan-400 py-2"
                    aria-label="Clips per source"
                  />
                  <div className="flex justify-between text-[11px] font-mono text-neutral-500 mt-2">
                    <span>20 (Pilot)</span>
                    <span>60 (Growth Engine)</span>
                    <span>120 (Max Velocity)</span>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={100} direction="left" distance={20}>
              <div className="p-4 sm:p-5 bg-neutral-950 border border-white/5 rounded-xl text-xs font-mono text-neutral-400 space-y-2">
                <div className="text-neutral-200 font-medium">Algorithmic Safeguard Protocol:</div>
                <div>· Every video receives bespoke dynamic kinetic subtitles</div>
                <div>· Audio normalized to -14 LUFS standard</div>
                <div>· Zero duplicate hash flags across partner handles</div>
              </div>
            </ScrollReveal>
          </div>

          {/* Interactive Distribution Matrix Visualization */}
          <div className="lg:col-span-7">
            <ScrollReveal direction="right" distance={20}>
              <div className="bg-[#0b0c12] border border-white/10 rounded-2xl p-5 sm:p-8 space-y-6">
                <div className="flex items-center justify-between pb-4 border-b border-white/10">
                  <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-cyan-400">
                    <Scissors className="w-4 h-4" />
                    <span>Simulated Output Matrix</span>
                  </div>
                  <span className="text-xs font-mono text-emerald-400 flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                    Live Model
                  </span>
                </div>

                {/* Output Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
                  <div className="p-4 bg-neutral-900/80 border border-white/5 rounded-xl">
                    <div className="text-[11px] font-mono text-neutral-400 mb-1">Projected Reach</div>
                    <div className="text-xl sm:text-2xl font-mono font-bold text-white tabular-nums">
                      {projectedMonthlyReach}
                    </div>
                    <div className="text-[11px] font-mono text-cyan-400 mt-1">Monthly Video Views</div>
                  </div>

                  <div className="p-4 bg-neutral-900/80 border border-white/5 rounded-xl">
                    <div className="text-[11px] font-mono text-neutral-400 mb-1">Creator Nodes</div>
                    <div className="text-xl sm:text-2xl font-mono font-bold text-white tabular-nums">
                      {estimatedCreatorNodes}
                    </div>
                    <div className="text-[11px] font-mono text-purple-400 mt-1">Syndicated Handles</div>
                  </div>

                  <div className="p-4 bg-neutral-900/80 border border-white/5 rounded-xl">
                    <div className="text-[11px] font-mono text-neutral-400 mb-1">High-ROAS Variants</div>
                    <div className="text-xl sm:text-2xl font-mono font-bold text-white tabular-nums">
                      {projectedPaidAdVariants}
                    </div>
                    <div className="text-[11px] font-mono text-emerald-400 mt-1">Whitelisted Ads</div>
                  </div>
                </div>

                {/* Platform Distribution Flow */}
                <div className="space-y-2.5 pt-2">
                  <div className="text-[11px] font-mono uppercase tracking-wider text-neutral-400 mb-2">
                    Multi-Channel Algorithmic Infiltration
                  </div>

                  <div className="p-3 bg-neutral-950 border border-white/5 rounded-lg flex flex-col sm:flex-row sm:items-center justify-between gap-1 text-xs font-mono">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-cyan-400 shrink-0" />
                      <span className="text-neutral-200">TikTok FYP Algorithm</span>
                    </div>
                    <span className="text-neutral-400 text-[11px]">40% Volume · High Retention Hooks</span>
                  </div>

                  <div className="p-3 bg-neutral-950 border border-white/5 rounded-lg flex flex-col sm:flex-row sm:items-center justify-between gap-1 text-xs font-mono">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-pink-500 shrink-0" />
                      <span className="text-neutral-200">Instagram Reels Discovery</span>
                    </div>
                    <span className="text-neutral-400 text-[11px]">30% Volume · High Shareability</span>
                  </div>

                  <div className="p-3 bg-neutral-950 border border-white/5 rounded-lg flex flex-col sm:flex-row sm:items-center justify-between gap-1 text-xs font-mono">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-red-500 shrink-0" />
                      <span className="text-neutral-200">YouTube Shorts & Search</span>
                    </div>
                    <span className="text-neutral-400 text-[11px]">20% Volume · Long-Tail Shelf Life</span>
                  </div>

                  <div className="p-3 bg-neutral-950 border border-white/5 rounded-lg flex flex-col sm:flex-row sm:items-center justify-between gap-1 text-xs font-mono">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-blue-400 shrink-0" />
                      <span className="text-neutral-200">X (Twitter) & LinkedIn Video</span>
                    </div>
                    <span className="text-neutral-400 text-[11px]">10% Volume · High-Net-Worth B2B</span>
                  </div>
                </div>

                <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
                  <div className="text-[11px] font-mono text-neutral-400">
                    Ready to plug your raw media into the Zeronix engine?
                  </div>
                  <button
                    onClick={onOpenCampaignModal}
                    className="w-full sm:w-auto px-6 py-3 text-xs font-semibold uppercase tracking-wider text-black bg-cyan-400 hover:bg-cyan-300 rounded transition-all cursor-pointer whitespace-nowrap font-mono text-center"
                  >
                    Launch Distribution Pilot
                  </button>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
