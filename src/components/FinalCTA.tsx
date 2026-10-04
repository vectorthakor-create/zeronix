import { useState } from 'react';
import { ArrowUpRight, CheckCircle2, ShieldCheck, Zap } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

interface FinalCTAProps {
  onOpenCampaignModal: () => void;
}

export default function FinalCTA({ onOpenCampaignModal }: FinalCTAProps) {
  const [quickEmail, setQuickEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (quickEmail && quickEmail.includes('@')) {
      setSubmitted(true);
    }
  };

  return (
    <section className="py-20 md:py-36 bg-[#08080c] relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-gradient-to-r from-cyan-950/20 via-blue-950/20 to-transparent blur-[140px] pointer-events-none" />
      <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />

      {/* Subtle futuristic laser line sweep */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent pointer-events-none" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <ScrollReveal direction="up" distance={24}>
          {/* Unboxed Status Kicker */}
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-cyan-400 mb-5 sm:mb-6">
            <Zap className="w-3.5 h-3.5" />
            <span>Accepting Q3 / Q4 Strategic Partners</span>
          </div>

          {/* Oversized Headline */}
          <h2 className="text-3xl sm:text-6xl md:text-7xl font-display font-extrabold text-white tracking-tight leading-[1.02] uppercase text-balance">
            MAKE YOUR BRAND <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-white to-neutral-400">
              IMPOSSIBLE TO IGNORE.
            </span>
          </h2>

          <p className="mt-5 sm:mt-6 text-sm sm:text-xl text-neutral-300 max-w-2xl mx-auto font-sans leading-relaxed">
            Stop burning budget on slow production cycles and invisible social channels. Plug into our international clipping and performance distribution network.
          </p>
        </ScrollReveal>

        {/* Main Action Block */}
        <ScrollReveal delay={100} direction="up" distance={20}>
          <div className="mt-8 sm:mt-10 max-w-md mx-auto">
            {!submitted ? (
              <div className="space-y-4">
                <button
                  onClick={onOpenCampaignModal}
                  className="w-full py-4 px-8 text-xs sm:text-sm font-semibold uppercase tracking-wider text-black bg-cyan-400 hover:bg-cyan-300 rounded transition-all duration-200 shadow-[0_0_35px_rgba(6,182,212,0.35)] hover:shadow-[0_0_45px_rgba(6,182,212,0.55)] cursor-pointer active:scale-95 flex items-center justify-center gap-3 font-mono min-h-[48px]"
                >
                  <span>START A CAMPAIGN</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>

                <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2">
                  <input
                    type="email"
                    required
                    placeholder="Enter your work email"
                    value={quickEmail}
                    onChange={(e) => setQuickEmail(e.target.value)}
                    className="flex-1 bg-[#10121a] border border-white/10 rounded px-4 py-3 text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-cyan-400 font-mono min-h-[44px]"
                  />
                  <button
                    type="submit"
                    className="px-5 py-3 bg-neutral-900 hover:bg-neutral-800 border border-white/10 text-xs font-mono text-cyan-400 uppercase tracking-wider rounded font-medium cursor-pointer min-h-[44px] whitespace-nowrap"
                  >
                    Send Brief
                  </button>
                </form>
              </div>
            ) : (
              <div className="p-6 bg-neutral-900 border border-emerald-500/40 rounded-xl text-center animate-fadeIn">
                <CheckCircle2 className="w-8 h-8 text-emerald-400 mx-auto mb-2" />
                <div className="font-display font-bold text-base sm:text-lg text-white">
                  Brief Access Requested
                </div>
                <p className="text-xs text-neutral-400 mt-1 font-mono">
                  We've routed our onboarding deck to {quickEmail}. A growth director will contact you within 24 hours.
                </p>
              </div>
            )}
          </div>
        </ScrollReveal>

        {/* Reassurance Signals */}
        <ScrollReveal delay={150} direction="up" distance={16}>
          <div className="mt-10 sm:mt-12 pt-8 border-t border-white/10 flex flex-wrap items-center justify-center gap-4 sm:gap-10 text-[11px] sm:text-xs font-mono text-neutral-400">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-cyan-400 shrink-0" />
              <span>Mutual NDA Protection</span>
            </div>
            <div className="flex items-center gap-2">
              <Zap className="w-4 h-4 text-cyan-400 shrink-0" />
              <span>48-Hour Strategic Audit SLA</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 shrink-0" />
              <span>Direct Leadership Review</span>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
