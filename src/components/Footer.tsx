import { useState, useEffect } from 'react';
import { ArrowUpRight } from 'lucide-react';

interface FooterProps {
  onOpenCampaignModal: () => void;
}

export default function Footer({ onOpenCampaignModal }: FooterProps) {
  const [timeUtc, setTimeUtc] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTimeUtc(now.toUTCString().slice(17, 25) + ' UTC');
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <footer className="bg-[#050507] border-t border-white/10 pt-16 pb-12 text-neutral-400 text-xs font-mono">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Tier: Brand, Domain & Global Presence */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-16 border-b border-white/5">
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 bg-cyan-400 rounded-sm inline-block" />
              <span className="font-display font-bold text-white text-lg tracking-wider uppercase">
                ZERONIX
              </span>
            </div>

            <p className="text-neutral-400 font-sans text-sm max-w-sm leading-relaxed">
              Zeronix is an international digital growth company specializing in social media marketing, influencer networks, short-form content clipping, and algorithmic performance distribution.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-3 text-neutral-400">
              <span className="text-cyan-400">zeronix.space</span>
              <span aria-hidden="true" className="text-neutral-600">·</span>
              <span>Global Growth System</span>
              <span aria-hidden="true" className="text-neutral-600">·</span>
              <span className="text-neutral-300 font-mono tabular-nums">{timeUtc}</span>
            </div>
          </div>

          {/* Hubs Column */}
          <div className="md:col-span-3 space-y-3">
            <div className="text-neutral-200 font-semibold uppercase tracking-wider">
              International Hubs
            </div>
            <ul className="space-y-2 text-neutral-400 font-sans text-xs">
              <li className="flex items-center justify-between">
                <span>New York Studio</span>
                <span className="font-mono text-neutral-500">EST</span>
              </li>
              <li className="flex items-center justify-between">
                <span>London Operations</span>
                <span className="font-mono text-neutral-500">GMT</span>
              </li>
              <li className="flex items-center justify-between">
                <span>Singapore Foundry</span>
                <span className="font-mono text-neutral-500">SGT</span>
              </li>
              <li className="flex items-center justify-between">
                <span>Dubai Client Suite</span>
                <span className="font-mono text-neutral-500">GST</span>
              </li>
            </ul>
          </div>

          {/* Navigation Links Column */}
          <div className="md:col-span-2 space-y-3">
            <div className="text-neutral-200 font-semibold uppercase tracking-wider">
              Navigation
            </div>
            <ul className="space-y-2 font-sans text-xs">
              <li>
                <a href="#services" className="hover:text-white transition-colors">Services</a>
              </li>
              <li>
                <a href="#how-it-works" className="hover:text-white transition-colors">How It Works</a>
              </li>
              <li>
                <a href="#engine" className="hover:text-white transition-colors">Clipping Engine</a>
              </li>
              <li>
                <a href="#clients" className="hover:text-white transition-colors">Target Clients</a>
              </li>
              <li>
                <a href="#case-studies" className="hover:text-white transition-colors">Case Studies</a>
              </li>
              <li>
                <a href="#faq" className="hover:text-white transition-colors">FAQ</a>
              </li>
            </ul>
          </div>

          {/* Action Column */}
          <div className="md:col-span-2 space-y-3">
            <div className="text-neutral-200 font-semibold uppercase tracking-wider">
              Direct Contact
            </div>
            <p className="text-[11px] text-neutral-500 font-sans">
              Accepting enterprise briefs & creator syndication alliances.
            </p>
            <button
              onClick={onOpenCampaignModal}
              className="inline-flex items-center gap-1.5 text-cyan-400 hover:text-cyan-300 font-semibold uppercase tracking-wider cursor-pointer"
            >
              <span>Initiate Brief</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
            <div className="text-[11px] text-neutral-500 pt-2">
              contact@zeronix.space
            </div>
          </div>
        </div>

        {/* Bottom Tier: Legal & Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-neutral-500 text-[11px]">
          <div>
            © {new Date().getFullYear()} Zeronix Space Global Holdings Ltd. All rights reserved.
          </div>
          <div className="flex items-center gap-4">
            <span className="hover:text-neutral-400 cursor-pointer">Privacy Charter</span>
            <span>·</span>
            <span className="hover:text-neutral-400 cursor-pointer">Terms of Service</span>
            <span>·</span>
            <span className="hover:text-neutral-400 cursor-pointer">Attribution Disclosure</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
