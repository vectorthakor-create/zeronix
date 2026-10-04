import { useState, useEffect } from 'react';
import { ArrowUpRight, Menu, X } from 'lucide-react';

interface NavbarProps {
  onOpenCampaignModal: (serviceId?: string) => void;
}

export default function Navbar({ onOpenCampaignModal }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { label: 'Capabilities', href: '#services' },
    { label: 'System', href: '#how-it-works' },
    { label: 'Results', href: '#case-studies' },
    { label: 'FAQ', href: '#faq' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled
            ? 'bg-[#070709]/85 backdrop-blur-md border-b border-white/[0.06] py-3.5'
            : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Zone 1: Pure Minimal Wordmark */}
          <a
            href="/"
            className="flex items-center gap-2 group text-white tracking-widest transition-opacity hover:opacity-80"
            aria-label="Zeronix Home"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 group-hover:scale-125 transition-transform" />
            <span className="font-display text-sm tracking-[0.2em] uppercase font-bold text-white">
              ZERONIX
            </span>
          </a>

          {/* Zone 2: Curated 4-Link Minimal Typography */}
          <nav className="hidden md:flex items-center gap-8" aria-label="Main Navigation">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-[13px] tracking-wide text-neutral-400 hover:text-white transition-colors duration-150"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Zone 3: Minimal Single Action */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => onOpenCampaignModal()}
              className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-mono uppercase tracking-wider text-neutral-200 hover:text-white border border-white/15 hover:border-white/40 rounded transition-all duration-150 cursor-pointer active:scale-95 whitespace-nowrap"
            >
              <span>Start Campaign</span>
              <ArrowUpRight className="w-3 h-3 text-cyan-400" />
            </button>

            {/* Minimal Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-1.5 text-neutral-400 hover:text-white transition-colors focus:outline-none"
              aria-label="Toggle mobile menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Minimalist Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 z-30 bg-[#070709]/98 backdrop-blur-2xl md:hidden pt-28 px-8 flex flex-col justify-between pb-10 animate-fadeIn"
          role="dialog"
          aria-modal="true"
        >
          <div className="space-y-6">
            <div className="text-[11px] uppercase tracking-widest text-neutral-500 font-mono">
              Index
            </div>
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block text-2xl font-display font-medium text-neutral-300 hover:text-white transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="pt-8 border-t border-white/10 space-y-4">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenCampaignModal();
              }}
              className="w-full py-3 px-4 text-xs font-mono uppercase tracking-wider text-black bg-cyan-400 hover:bg-cyan-300 rounded font-semibold transition-all flex items-center justify-center gap-2"
            >
              <span>Start Campaign</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
            <div className="text-[11px] font-mono text-neutral-500 text-center">
              zeronix.space · Global Media Architecture
            </div>
          </div>
        </div>
      )}
    </>
  );
}
