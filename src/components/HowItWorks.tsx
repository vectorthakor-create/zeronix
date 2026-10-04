import { useState } from 'react';
import { PROCESS_STEPS } from '../data/agencyData';
import { ArrowRight, CheckCircle, Clock } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

interface HowItWorksProps {
  onOpenCampaignModal: () => void;
}

export default function HowItWorks({ onOpenCampaignModal }: HowItWorksProps) {
  const [activeStepIndex, setActiveStepIndex] = useState(0);

  return (
    <section id="how-it-works" className="py-20 md:py-32 bg-[#090a0f] border-b border-white/5 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <ScrollReveal direction="up" distance={20}>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 md:mb-16 pb-8 border-b border-white/10">
            <div>
              <div className="text-xs uppercase tracking-widest text-cyan-400 font-mono mb-2 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                <span>Execution Architecture</span>
              </div>
              <h2 className="text-3xl sm:text-5xl md:text-6xl font-display font-extrabold text-white tracking-tight uppercase">
                HOW IT WORKS.
              </h2>
            </div>
            <div className="text-neutral-400 text-xs sm:text-sm max-w-md font-sans">
              A battle-tested 4-stage sprint cycle designed to take brands from zero social momentum to saturated algorithmic dominance in under 30 days.
            </div>
          </div>
        </ScrollReveal>

        {/* Process Flow Interactive Tabs */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2.5 sm:gap-3 mb-8 md:mb-10">
          {PROCESS_STEPS.map((step, idx) => (
            <button
              key={step.step}
              onClick={() => setActiveStepIndex(idx)}
              className={`p-3.5 sm:p-4 rounded-xl border text-left transition-all cursor-pointer min-h-[44px] ${
                activeStepIndex === idx
                  ? 'bg-[#12141e] border-cyan-400/80 shadow-[0_0_20px_rgba(6,182,212,0.15)]'
                  : 'bg-[#0a0b10] border-white/10 hover:border-white/20'
              }`}
            >
              <div className="flex items-center justify-between text-xs font-mono mb-1.5">
                <span className={activeStepIndex === idx ? 'text-cyan-400 font-bold' : 'text-neutral-500'}>
                  STAGE {step.step}
                </span>
                <span className="text-neutral-500 text-[10px] sm:text-[11px]">{step.timeline}</span>
              </div>
              <div className="font-display font-semibold text-xs sm:text-sm text-white line-clamp-1">
                {step.title.split('&')[0]}
              </div>
            </button>
          ))}
        </div>

        {/* Active Stage Detailed Spotlight */}
        <ScrollReveal direction="up" distance={20}>
          <div className="bg-[#0c0d14] border border-white/10 rounded-2xl p-5 sm:p-10 relative overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              <div className="lg:col-span-7">
                <div className="flex items-center gap-3 text-xs font-mono uppercase tracking-wider text-cyan-400 mb-3">
                  <Clock className="w-4 h-4" />
                  <span>{PROCESS_STEPS[activeStepIndex].timeline}</span>
                  <span aria-hidden="true">·</span>
                  <span>Sprint Milestone</span>
                </div>

                <h3 className="text-xl sm:text-3xl font-display font-bold text-white mb-3">
                  {PROCESS_STEPS[activeStepIndex].title}
                </h3>

                <p className="text-xs sm:text-base text-neutral-300 mb-6 sm:mb-8 leading-relaxed font-sans">
                  {PROCESS_STEPS[activeStepIndex].summary}
                </p>

                <div className="space-y-2.5">
                  <div className="text-[11px] font-mono uppercase tracking-wider text-neutral-400">
                    Sprint Actions & Deliverables
                  </div>
                  {PROCESS_STEPS[activeStepIndex].details.map((item, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-neutral-200">
                      <CheckCircle className="w-4 h-4 text-cyan-400 mt-0.5 shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-8 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                  <button
                    onClick={onOpenCampaignModal}
                    className="px-6 py-3 text-xs font-semibold uppercase tracking-wider text-black bg-cyan-400 hover:bg-cyan-300 rounded transition-all cursor-pointer font-mono text-center"
                  >
                    Initiate Stage 01 Audit
                  </button>
                  <button
                    onClick={() => setActiveStepIndex((prev) => (prev + 1) % PROCESS_STEPS.length)}
                    className="inline-flex items-center justify-center gap-1.5 text-xs font-mono text-neutral-400 hover:text-white transition-colors cursor-pointer py-2"
                  >
                    <span>Next Stage</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              {/* Progress Visualizer */}
              <div className="lg:col-span-5 p-5 sm:p-6 bg-neutral-950/80 border border-white/10 rounded-xl space-y-4">
                <div className="text-xs font-mono uppercase tracking-wider text-neutral-400 flex items-center justify-between pb-3 border-b border-white/5">
                  <span>30-Day Growth Sprint Velocity</span>
                  <span className="text-cyan-400 font-bold tabular-nums">
                    {activeStepIndex === 0 ? '25%' : activeStepIndex === 1 ? '50%' : activeStepIndex === 2 ? '75%' : '100%'}
                  </span>
                </div>

                <div className="w-full bg-neutral-900 h-2 rounded-full overflow-hidden">
                  <div
                    className="bg-cyan-400 h-full transition-all duration-500 ease-out"
                    style={{
                      width:
                        activeStepIndex === 0 ? '25%' : activeStepIndex === 1 ? '50%' : activeStepIndex === 2 ? '75%' : '100%',
                    }}
                  />
                </div>

                <div className="space-y-2 pt-1">
                  {PROCESS_STEPS.map((step, idx) => (
                    <div
                      key={step.step}
                      onClick={() => setActiveStepIndex(idx)}
                      className={`p-2.5 sm:p-3 rounded-lg border text-xs font-mono flex items-center justify-between cursor-pointer transition-colors ${
                        activeStepIndex === idx
                          ? 'bg-neutral-900 border-cyan-400/50 text-white'
                          : idx < activeStepIndex
                          ? 'bg-neutral-950 border-white/5 text-neutral-400 line-through'
                          : 'bg-neutral-950 border-white/5 text-neutral-500'
                      }`}
                    >
                      <span className="truncate pr-2">
                        {step.step}. {step.title.split('&')[0]}
                      </span>
                      <span className="text-[10px] text-neutral-400 shrink-0">{step.timeline}</span>
                    </div>
                  ))}
                </div>

                <div className="p-3 bg-neutral-900/50 rounded border border-white/5 text-[11px] font-mono text-neutral-400">
                  Guaranteed: Direct collaboration with seasoned creative directors and distribution engineers. Zero junior account layers.
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
