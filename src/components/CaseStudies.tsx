import { useState } from 'react';
import { CASE_STUDIES } from '../data/agencyData';
import { CaseStudy } from '../types';
import { ArrowUpRight, TrendingUp, X, Quote } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

interface CaseStudiesProps {
  onOpenCampaignModal: (caseStudyClient?: string) => void;
}

export default function CaseStudies({ onOpenCampaignModal }: CaseStudiesProps) {
  const [activeStudy, setActiveStudy] = useState<CaseStudy | null>(null);

  return (
    <section id="case-studies" className="py-20 md:py-32 bg-[#090a0f] border-b border-white/5 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <ScrollReveal direction="up" distance={20}>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 md:mb-16 pb-8 border-b border-white/10">
            <div>
              <div className="text-xs uppercase tracking-widest text-cyan-400 font-mono mb-2 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                <span>Audited Case Studies</span>
              </div>
              <h2 className="text-3xl sm:text-5xl md:text-6xl font-display font-extrabold text-white tracking-tight uppercase">
                PROVEN RESULTS.
              </h2>
            </div>
            <div className="text-neutral-400 text-xs sm:text-sm max-w-md font-sans">
              Real campaigns, verified numbers, and transformative commercial growth across fintech, consumer DTC, and software infrastructure.
            </div>
          </div>
        </ScrollReveal>

        {/* 3 Flagship Case Cards with Staggered Scroll Reveal */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          {CASE_STUDIES.map((study, idx) => (
            <ScrollReveal key={study.id} delay={idx * 75} direction="up" distance={20}>
              <div
                className="bg-[#0c0d14] border border-white/10 rounded-2xl overflow-hidden flex flex-col justify-between hover:border-cyan-500/40 hover:-translate-y-1 transition-all duration-300 group h-full"
              >
                <div>
                  {/* Visual Header Canvas */}
                  <div className="h-40 sm:h-48 bg-gradient-to-br from-neutral-900 via-[#10121a] to-[#07080c] p-5 sm:p-6 relative border-b border-white/5 flex flex-col justify-between overflow-hidden">
                    <div className="absolute inset-0 bg-grid-pattern opacity-30" />
                    <div className="relative z-10 flex items-center justify-between">
                      <span className="text-[11px] font-mono text-cyan-400 uppercase tracking-wider">
                        {study.industry}
                      </span>
                      <span className="text-[10px] font-mono text-neutral-400">
                        {study.timeline}
                      </span>
                    </div>

                    <div className="relative z-10">
                      <div className="text-xl sm:text-2xl font-display font-bold text-white tracking-tight">
                        {study.client}
                      </div>
                    </div>
                  </div>

                  {/* Case Body */}
                  <div className="p-5 sm:p-7">
                    <h3 className="text-base sm:text-lg font-display font-bold text-white mb-2 sm:mb-3 group-hover:text-cyan-300 transition-colors">
                      {study.headline}
                    </h3>
                    <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed font-sans mb-5">
                      {study.summary}
                    </p>

                    {/* Primary 2 Metrics */}
                    <div className="grid grid-cols-2 gap-2.5 sm:gap-3 mb-5 pt-4 border-t border-white/5">
                      {study.results.slice(0, 2).map((res, i) => (
                        <div key={i} className="p-3 bg-neutral-950/80 rounded-lg border border-white/5">
                          <div className="text-[10px] sm:text-[11px] font-mono text-neutral-400 truncate">{res.label}</div>
                          <div className="text-lg sm:text-xl font-bold font-mono text-white mt-0.5 tabular-nums">
                            {res.value}
                          </div>
                          <div className="text-[10px] font-mono text-emerald-400 mt-0.5">{res.growth}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Card Footer Button */}
                <div className="p-5 sm:p-6 pt-0">
                  <button
                    onClick={() => setActiveStudy(study)}
                    className="w-full py-3 px-4 bg-neutral-900 hover:bg-neutral-800 border border-white/10 hover:border-white/20 rounded-lg text-xs font-mono font-semibold uppercase tracking-wider text-neutral-200 hover:text-white flex items-center justify-center gap-2 transition-all cursor-pointer min-h-[44px]"
                  >
                    <span>Examine Full Study</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-cyan-400" />
                  </button>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>

      {/* Case Study Deep Dive Modal */}
      {activeStudy && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fadeIn"
          role="dialog"
          aria-modal="true"
        >
          <div className="bg-[#0d0e14] border border-white/20 rounded-2xl max-w-3xl w-full p-5 sm:p-10 relative shadow-2xl max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setActiveStudy(null)}
              className="absolute top-4 right-4 sm:top-6 sm:right-6 p-2 text-neutral-400 hover:text-white rounded-lg hover:bg-neutral-800 transition-colors"
              aria-label="Close dialog"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex flex-wrap items-center gap-2 text-[11px] sm:text-xs font-mono uppercase tracking-wider text-cyan-400 mb-2">
              <span>{activeStudy.client}</span>
              <span aria-hidden="true">·</span>
              <span>{activeStudy.industry}</span>
              <span aria-hidden="true">·</span>
              <span>{activeStudy.timeline}</span>
            </div>

            <h3 className="text-xl sm:text-4xl font-display font-extrabold text-white mb-6">
              {activeStudy.headline}
            </h3>

            {/* 4 Quantitative Result Tiles */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3 mb-6 sm:mb-8">
              {activeStudy.results.map((res, i) => (
                <div key={i} className="p-3 sm:p-4 bg-neutral-900 border border-white/10 rounded-xl">
                  <div className="text-[10px] sm:text-xs font-mono text-neutral-400 truncate">{res.label}</div>
                  <div className="text-xl sm:text-2xl font-bold font-mono text-white mt-1 tabular-nums">
                    {res.value}
                  </div>
                  <div className="text-[10px] sm:text-xs font-mono text-emerald-400 mt-0.5">{res.growth}</div>
                </div>
              ))}
            </div>

            {/* Structured Challenge - Strategy - Execution */}
            <div className="space-y-4 sm:space-y-6 text-xs sm:text-sm text-neutral-300 font-sans mb-6 sm:mb-8">
              <div className="p-4 bg-neutral-950 rounded-xl border border-white/5">
                <div className="text-[11px] font-mono uppercase tracking-wider text-rose-400 font-semibold mb-1.5">
                  The Challenge
                </div>
                <p className="leading-relaxed">{activeStudy.challenge}</p>
              </div>

              <div className="p-4 bg-neutral-950 rounded-xl border border-white/5">
                <div className="text-[11px] font-mono uppercase tracking-wider text-cyan-400 font-semibold mb-1.5">
                  The Strategy
                </div>
                <p className="leading-relaxed">{activeStudy.strategy}</p>
              </div>

              <div className="p-4 bg-neutral-950 rounded-xl border border-white/5">
                <div className="text-[11px] font-mono uppercase tracking-wider text-emerald-400 font-semibold mb-1.5">
                  Execution & Rollout
                </div>
                <p className="leading-relaxed">{activeStudy.execution}</p>
              </div>
            </div>

            {/* Attributable Testimonial */}
            {activeStudy.testimonial && (
              <div className="p-4 sm:p-5 bg-neutral-900/80 rounded-xl border border-white/10 mb-6 sm:mb-8 relative">
                <Quote className="w-5 h-5 sm:w-6 sm:h-6 text-cyan-400/40 mb-2" />
                <p className="text-xs sm:text-sm italic text-neutral-200 mb-3 font-sans">
                  "{activeStudy.testimonial.quote}"
                </p>
                <div className="text-[11px] font-mono text-neutral-400">
                  <span className="text-white font-medium">{activeStudy.testimonial.author}</span> · {activeStudy.testimonial.role}, {activeStudy.testimonial.company}
                </div>
              </div>
            )}

            <div className="pt-5 border-t border-white/10 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
              <span className="text-[11px] font-mono text-neutral-400">
                Want to reproduce these growth mechanics for your brand?
              </span>
              <button
                onClick={() => {
                  const clientName = activeStudy.client;
                  setActiveStudy(null);
                  onOpenCampaignModal(clientName);
                }}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-xs font-semibold uppercase tracking-wider text-black bg-cyan-400 hover:bg-cyan-300 rounded transition-all cursor-pointer whitespace-nowrap font-mono"
              >
                <span>Replicate This Framework</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
