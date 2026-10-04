import { useState } from 'react';
import { FAQ_ITEMS } from '../data/agencyData';
import { ChevronDown, MessageSquare } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

interface FAQProps {
  onOpenCampaignModal: () => void;
}

export default function FAQ({ onOpenCampaignModal }: FAQProps) {
  const [openIndexes, setOpenIndexes] = useState<number[]>([0]);

  const toggleIndex = (index: number) => {
    setOpenIndexes((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  return (
    <section id="faq" className="py-20 md:py-32 bg-[#070709] border-b border-white/5 relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <ScrollReveal direction="up" distance={20}>
          <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
            <div className="text-xs uppercase tracking-widest text-cyan-400 font-mono mb-2 flex items-center justify-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
              <span>Frequently Asked Questions</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-white tracking-tight uppercase">
              CLEAR ANSWERS.
            </h2>
            <p className="mt-3 sm:mt-4 text-xs sm:text-sm text-neutral-400 font-sans">
              Everything you need to know about our international content clipping networks, production sprints, brand compliance, and contract models.
            </p>
          </div>
        </ScrollReveal>

        {/* Accordion List with Scroll Animation */}
        <div className="space-y-3 sm:space-y-4">
          {FAQ_ITEMS.map((item, idx) => {
            const isOpen = openIndexes.includes(idx);
            return (
              <ScrollReveal key={idx} delay={idx * 40} direction="up" distance={16}>
                <div className="bg-[#0c0d14] border border-white/10 rounded-xl overflow-hidden transition-colors hover:border-white/20">
                  <button
                    onClick={() => toggleIndex(idx)}
                    className="w-full p-4 sm:p-6 text-left flex items-start justify-between gap-4 cursor-pointer focus:outline-none focus-visible:ring-1 focus-visible:ring-cyan-400 min-h-[52px]"
                    aria-expanded={isOpen}
                  >
                    <div>
                      <span className="text-[10px] sm:text-[11px] font-mono text-cyan-400 uppercase tracking-wider block mb-1">
                        {item.category}
                      </span>
                      <span className="font-display font-bold text-sm sm:text-lg text-white">
                        {item.question}
                      </span>
                    </div>
                    <div
                      className={`p-1.5 rounded-md bg-neutral-900 border border-white/5 text-neutral-400 transition-transform duration-200 shrink-0 ${
                        isOpen ? 'rotate-180 text-cyan-400' : ''
                      }`}
                    >
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </button>

                  {isOpen && (
                    <div className="px-4 pb-5 sm:px-6 sm:pb-6 pt-2 text-xs sm:text-sm text-neutral-300 leading-relaxed font-sans border-t border-white/5 animate-fadeIn">
                      {item.answer}
                    </div>
                  )}
                </div>
              </ScrollReveal>
            );
          })}
        </div>

        {/* Direct Contact Prompt */}
        <ScrollReveal delay={150} direction="up" distance={20}>
          <div className="mt-10 sm:mt-12 p-5 sm:p-6 bg-neutral-950 border border-white/5 rounded-xl flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
            <div className="flex items-center gap-3">
              <MessageSquare className="w-5 h-5 text-cyan-400 shrink-0" />
              <div className="text-xs sm:text-sm text-neutral-300 font-sans">
                Have a custom enterprise RFP or multi-market distribution requirement?
              </div>
            </div>
            <button
              onClick={onOpenCampaignModal}
              className="text-xs font-mono text-cyan-400 hover:text-cyan-300 font-semibold uppercase tracking-wider underline cursor-pointer whitespace-nowrap py-1"
            >
              Speak with an Architect →
            </button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
