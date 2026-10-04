import { useState } from 'react';
import { SERVICES_DATA } from '../data/agencyData';
import { ServiceItem } from '../types';
import { ArrowUpRight, CheckCircle2, ChevronRight, X } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

interface ServicesProps {
  onOpenCampaignModal: (serviceId?: string) => void;
}

export default function Services({ onOpenCampaignModal }: ServicesProps) {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  return (
    <section id="services" className="py-20 md:py-32 bg-[#070709] border-b border-white/5 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <ScrollReveal direction="up" distance={20}>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 md:mb-16 pb-8 border-b border-white/10">
            <div>
              <div className="text-xs uppercase tracking-widest text-cyan-400 font-mono mb-2 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                <span>Capabilities & Growth Verticals</span>
              </div>
              <h2 className="text-3xl sm:text-5xl md:text-6xl font-display font-extrabold text-white tracking-tight uppercase">
                WHAT WE DO.
              </h2>
            </div>
            <div className="text-neutral-400 text-xs sm:text-sm max-w-lg font-sans">
              Six interconnected growth verticals synchronized into a single conversion engine. No fragmented agencies, no siloed reporting.
            </div>
          </div>
        </ScrollReveal>

        {/* Asymmetric Editorial Grid with Staggered Scroll Animation */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-8">
          {SERVICES_DATA.map((service, idx) => (
            <ScrollReveal key={service.id} delay={idx * 60} direction="up" distance={20}>
              <div
                className="bg-[#0b0c10] border border-white/10 rounded-xl p-5 sm:p-8 flex flex-col justify-between hover:border-cyan-500/50 hover:bg-[#0e0f16] transition-all duration-300 group relative h-full"
              >
                <div>
                  {/* Header with Human Editorial Number */}
                  <div className="flex items-center justify-between pb-4 mb-4 border-b border-white/5">
                    <span className="font-mono text-xs font-semibold text-cyan-400 tracking-wider">
                      {service.number} // VERTICAL
                    </span>
                    <div className="flex items-center gap-1.5 text-xs text-neutral-400 font-mono">
                      {service.metrics[0] && (
                        <span className="text-neutral-300 text-[11px] sm:text-xs">
                          {service.metrics[0].label}: <strong className="text-cyan-400 tabular-nums">{service.metrics[0].value}</strong>
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Service Title & Tagline */}
                  <h3 className="text-xl sm:text-2xl font-display font-bold text-white group-hover:text-cyan-300 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-xs uppercase tracking-wider text-neutral-400 font-mono mt-1 mb-4">
                    {service.tagline}
                  </p>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed mb-6 font-sans">
                    {service.description}
                  </p>

                  {/* Deliverables snippet */}
                  <div className="space-y-2 mb-6 pt-4 border-t border-white/5">
                    <div className="text-[11px] font-mono uppercase tracking-wider text-neutral-500 mb-2">
                      Core Deliverables
                    </div>
                    {service.deliverables.slice(0, 3).map((item, dIdx) => (
                      <div key={dIdx} className="flex items-start gap-2 text-xs text-neutral-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 mt-0.5 shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Platform Text & Action */}
                <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                  <div className="text-[11px] font-mono text-neutral-400 truncate max-w-[65%]">
                    {service.platforms.slice(0, 3).join(' · ')}
                  </div>

                  <button
                    onClick={() => setSelectedService(service)}
                    className="inline-flex items-center gap-1 text-xs font-mono text-cyan-400 hover:text-cyan-300 font-semibold uppercase tracking-wider group-hover:translate-x-0.5 transition-transform cursor-pointer py-1 px-2 rounded hover:bg-cyan-950/30"
                  >
                    <span>Deep Dive</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Banner CTA */}
        <ScrollReveal delay={150} direction="up" distance={20}>
          <div className="mt-10 sm:mt-12 p-6 sm:p-8 bg-gradient-to-r from-[#0d0f17] to-[#0a0a0f] border border-white/10 rounded-xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div>
              <h4 className="text-base sm:text-lg font-display font-bold text-white">
                Need a bespoke cross-channel deployment?
              </h4>
              <p className="text-xs sm:text-sm text-neutral-400 mt-1 font-sans">
                We bundle clipping, creator alliances, and paid performance into an integrated 90-day growth engine.
              </p>
            </div>
            <button
              onClick={() => onOpenCampaignModal()}
              className="w-full sm:w-auto px-6 py-3 text-xs font-semibold uppercase tracking-wider text-black bg-cyan-400 hover:bg-cyan-300 rounded transition-all cursor-pointer whitespace-nowrap text-center font-mono"
            >
              Request Engine Scope
            </button>
          </div>
        </ScrollReveal>
      </div>

      {/* Service Detail Modal */}
      {selectedService && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fadeIn"
          role="dialog"
          aria-modal="true"
        >
          <div className="bg-[#0e0f14] border border-white/20 rounded-2xl max-w-2xl w-full p-5 sm:p-8 relative shadow-2xl max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setSelectedService(null)}
              className="absolute top-4 right-4 sm:top-6 sm:right-6 p-2 text-neutral-400 hover:text-white rounded-lg hover:bg-neutral-800 transition-colors"
              aria-label="Close dialog"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-cyan-400 mb-2">
              <span>{selectedService.number}</span>
              <span aria-hidden="true">·</span>
              <span>Growth Architecture Specification</span>
            </div>

            <h3 className="text-xl sm:text-3xl font-display font-bold text-white">
              {selectedService.title}
            </h3>
            <p className="text-xs sm:text-sm font-mono text-neutral-400 mt-1 mb-5">
              {selectedService.tagline}
            </p>

            <div className="p-4 bg-neutral-900/60 rounded-xl border border-white/5 mb-5 text-xs sm:text-sm text-neutral-300 leading-relaxed font-sans">
              {selectedService.description}
            </div>

            <div className="mb-5">
              <div className="text-xs font-mono uppercase tracking-wider text-neutral-400 mb-3">
                Full Deliverables & Protocols Included
              </div>
              <ul className="space-y-2">
                {selectedService.deliverables.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-neutral-200">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 mt-0.5 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="grid grid-cols-2 gap-3 mb-6">
              {selectedService.metrics.map((metric, idx) => (
                <div key={idx} className="p-3 bg-neutral-900 border border-white/5 rounded-lg">
                  <div className="text-[11px] text-neutral-400 font-mono">{metric.label}</div>
                  <div className="text-lg sm:text-xl font-bold font-mono text-cyan-400 mt-1 tabular-nums">
                    {metric.value}
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-5 border-t border-white/10 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
              <div className="text-[11px] font-mono text-neutral-400">
                Platforms: {selectedService.platforms.join(' · ')}
              </div>
              <button
                onClick={() => {
                  const sId = selectedService.id;
                  setSelectedService(null);
                  onOpenCampaignModal(sId);
                }}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 text-xs font-semibold uppercase tracking-wider text-black bg-cyan-400 hover:bg-cyan-300 rounded transition-all cursor-pointer whitespace-nowrap font-mono"
              >
                <span>Deploy This Vertical</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
