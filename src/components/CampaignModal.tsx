import { useState, useEffect } from 'react';
import { X, ArrowRight, CheckCircle2, ShieldCheck, Sparkles, Building2, Mail, Globe, DollarSign } from 'lucide-react';
import { SERVICES_DATA } from '../data/agencyData';

interface CampaignModalProps {
  isOpen: boolean;
  onClose: () => void;
  presetData?: {
    serviceId?: string;
    budgetTier?: string;
    clientType?: string;
  };
}

export default function CampaignModal({ isOpen, onClose, presetData }: CampaignModalProps) {
  const [formData, setFormData] = useState({
    brandName: '',
    contactName: '',
    email: '',
    website: '',
    budgetTier: '$25,000–$50,000/mo',
    selectedServices: ['content-clipping', 'short-form-content'],
    timeline: 'Within 14 Days',
    objectives: '',
  });

  const [step, setStep] = useState<'form' | 'submitted'>('form');
  const [submitting, setSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  useEffect(() => {
    if (presetData?.serviceId) {
      setFormData((prev) => ({
        ...prev,
        selectedServices: Array.from(new Set([...prev.selectedServices, presetData.serviceId!])),
      }));
    }
    if (presetData?.budgetTier) {
      setFormData((prev) => ({
        ...prev,
        budgetTier: presetData.budgetTier!,
      }));
    }
  }, [presetData]);

  if (!isOpen) return null;

  const toggleService = (id: string) => {
    setFormData((prev) => {
      const exists = prev.selectedServices.includes(id);
      if (exists) {
        return { ...prev, selectedServices: prev.selectedServices.filter((s) => s !== id) };
      } else {
        return { ...prev, selectedServices: [...prev.selectedServices, id] };
      }
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.brandName || !formData.email || !formData.contactName) {
      setErrorMsg('Please complete all required fields.');
      return;
    }
    setErrorMsg('');
    setSubmitting(true);

    setTimeout(() => {
      setSubmitting(false);
      setStep('submitted');
    }, 600);
  };

  const budgetTiers = [
    '$5,000–$15,000/mo',
    '$15,000–$35,000/mo',
    '$35,000–$75,000/mo',
    '$75,000+/mo Enterprise',
  ];

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fadeIn"
      role="dialog"
      aria-modal="true"
    >
      <div className="bg-[#0c0d14] border border-white/20 rounded-2xl max-w-2xl w-full p-6 sm:p-8 relative shadow-2xl max-h-[92vh] overflow-y-auto">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 text-neutral-400 hover:text-white rounded-lg hover:bg-neutral-800 transition-colors"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        {step === 'form' ? (
          <div>
            {/* Header */}
            <div className="mb-6">
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-cyan-400 mb-1">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Campaign Blueprint Initiation</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-display font-bold text-white">
                Start a Growth Campaign
              </h3>
              <p className="text-xs sm:text-sm text-neutral-400 mt-1 font-sans">
                Tell us about your brand. Our growth architects will analyze your category whitespace and deliver an initial media distribution blueprint in 48 hours.
              </p>
            </div>

            {errorMsg && (
              <div className="mb-4 p-3 bg-rose-950/40 border border-rose-500/40 rounded text-xs font-mono text-rose-300">
                {errorMsg}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Brand & Contact Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-neutral-300 mb-1.5">
                    Brand / Company Name *
                  </label>
                  <div className="relative">
                    <Building2 className="w-4 h-4 text-neutral-500 absolute left-3 top-3" />
                    <input
                      type="text"
                      required
                      placeholder="e.g. Acme Corp"
                      value={formData.brandName}
                      onChange={(e) => setFormData({ ...formData, brandName: e.target.value })}
                      className="w-full bg-[#12141e] border border-white/10 rounded-lg pl-9 pr-3 py-2.5 text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-cyan-400 font-mono"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-neutral-300 mb-1.5">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Sarah Jenkins"
                    value={formData.contactName}
                    onChange={(e) => setFormData({ ...formData, contactName: e.target.value })}
                    className="w-full bg-[#12141e] border border-white/10 rounded-lg px-3 py-2.5 text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-cyan-400 font-mono"
                  />
                </div>
              </div>

              {/* Email & Website Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-neutral-300 mb-1.5">
                    Work Email *
                  </label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-neutral-500 absolute left-3 top-3" />
                    <input
                      type="email"
                      required
                      placeholder="sarah@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-[#12141e] border border-white/10 rounded-lg pl-9 pr-3 py-2.5 text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-cyan-400 font-mono"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase tracking-wider text-neutral-300 mb-1.5">
                    Website or Social Handle
                  </label>
                  <div className="relative">
                    <Globe className="w-4 h-4 text-neutral-500 absolute left-3 top-3" />
                    <input
                      type="text"
                      placeholder="e.g. company.com or @handle"
                      value={formData.website}
                      onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                      className="w-full bg-[#12141e] border border-white/10 rounded-lg pl-9 pr-3 py-2.5 text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-cyan-400 font-mono"
                    />
                  </div>
                </div>
              </div>

              {/* Service Selection */}
              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-neutral-300 mb-2">
                  Select Target Growth Verticals
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {SERVICES_DATA.map((srv) => {
                    const isSelected = formData.selectedServices.includes(srv.id);
                    return (
                      <button
                        type="button"
                        key={srv.id}
                        onClick={() => toggleService(srv.id)}
                        className={`p-2.5 rounded-lg border text-left transition-all cursor-pointer text-xs font-mono flex items-center justify-between ${
                          isSelected
                            ? 'bg-neutral-800 border-cyan-400 text-white shadow-sm'
                            : 'bg-[#101118] border-white/5 text-neutral-400 hover:border-white/15'
                        }`}
                      >
                        <span className="truncate">{srv.title}</span>
                        {isSelected && <span className="text-cyan-400 ml-1">✓</span>}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Budget Tier */}
              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-neutral-300 mb-2">
                  Target Monthly Budget
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {budgetTiers.map((tier) => (
                    <button
                      type="button"
                      key={tier}
                      onClick={() => setFormData({ ...formData, budgetTier: tier })}
                      className={`p-2 rounded border text-center transition-all cursor-pointer text-[11px] font-mono ${
                        formData.budgetTier === tier
                          ? 'bg-neutral-800 border-cyan-400 text-white font-medium'
                          : 'bg-[#101118] border-white/5 text-neutral-400 hover:border-white/15'
                      }`}
                    >
                      {tier}
                    </button>
                  ))}
                </div>
              </div>

              {/* Objectives Note */}
              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-neutral-300 mb-1.5">
                  Primary Goals & Growth Objectives
                </label>
                <textarea
                  rows={2}
                  placeholder="e.g. Scaling organic reach past 10M views/mo, whitelisting creator ads to lower CAC, or launching a new product line..."
                  value={formData.objectives}
                  onChange={(e) => setFormData({ ...formData, objectives: e.target.value })}
                  className="w-full bg-[#12141e] border border-white/10 rounded-lg p-3 text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-cyan-400 font-mono"
                />
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full py-3.5 px-6 text-xs font-semibold uppercase tracking-wider text-black bg-cyan-400 hover:bg-cyan-300 rounded transition-all duration-200 shadow-[0_0_25px_rgba(6,182,212,0.3)] cursor-pointer flex items-center justify-center gap-2 font-mono"
                >
                  {submitting ? (
                    <span>Processing Blueprint...</span>
                  ) : (
                    <>
                      <span>Transmit Campaign Brief</span>
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>
              </div>

              <div className="flex items-center justify-between text-[11px] font-mono text-neutral-500 pt-1">
                <div className="flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Encrypted & NDA Protected</span>
                </div>
                <span>zeronix.space/growth</span>
              </div>
            </form>
          </div>
        ) : (
          /* Confirmation Screen */
          <div className="text-center py-8 animate-fadeIn">
            <div className="w-14 h-14 bg-emerald-500/10 border border-emerald-500/40 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle2 className="w-8 h-8 text-emerald-400" />
            </div>

            <div className="text-xs font-mono uppercase tracking-wider text-cyan-400 mb-2">
              Transmission Confirmed · Reference #ZX-{Math.floor(100000 + Math.random() * 900000)}
            </div>

            <h3 className="text-2xl sm:text-3xl font-display font-bold text-white mb-3">
              Brief Received, {formData.contactName}.
            </h3>

            <p className="text-sm text-neutral-300 max-w-md mx-auto mb-6 font-sans">
              Our growth architecture team has begun the algorithmic whitespace audit for{' '}
              <span className="text-white font-semibold">{formData.brandName}</span>. A tailored distribution strategy and rate card will be transmitted to{' '}
              <span className="text-cyan-400 font-mono">{formData.email}</span> within 24 hours.
            </p>

            <div className="p-4 bg-neutral-900 border border-white/5 rounded-xl max-w-sm mx-auto text-left text-xs font-mono space-y-1.5 mb-8">
              <div className="text-neutral-400">Budget Tier: <span className="text-white">{formData.budgetTier}</span></div>
              <div className="text-neutral-400">Target Verticals: <span className="text-cyan-400">{formData.selectedServices.length} Selected</span></div>
              <div className="text-neutral-400">SLA: <span className="text-emerald-400">Direct Founder/Director Review</span></div>
            </div>

            <button
              onClick={onClose}
              className="px-6 py-2.5 text-xs font-mono uppercase tracking-wider text-neutral-200 hover:text-white bg-neutral-900 hover:bg-neutral-800 border border-white/10 rounded transition-colors"
            >
              Return to Website
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
