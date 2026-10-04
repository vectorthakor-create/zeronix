import { useState, useEffect } from 'react';
import {
  ArrowUpRight,
  Play,
  Sparkles,
  TrendingUp,
  Volume2,
  VolumeX,
  Sliders,
  Share2,
  Eye,
  Film,
  Activity,
  CheckCircle2,
  X,
  Maximize2
} from 'lucide-react';

interface HeroProps {
  onOpenCampaignModal: () => void;
  onExploreServices: () => void;
}

export default function Hero({ onOpenCampaignModal, onExploreServices }: HeroProps) {
  // Live simulated impression counter
  const [liveImpressionCounter, setLiveImpressionCounter] = useState(4829310);
  const [timecode, setTimecode] = useState('00:14:28:19');
  const [showreelOpen, setShowreelOpen] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [activeClipIndex, setActiveClipIndex] = useState(0);
  const [timelineProgress, setTimelineProgress] = useState(38);

  // Sample viral clips inside the cinematic command console
  const viralClips = [
    {
      id: 'clip-1',
      title: 'The Psychology of Market Monopolies',
      source: 'Founder Keynote (4K Master)',
      duration: '0:34',
      hookText: '"Most brands build products. Monopolies build distribution."',
      hookRetention: '84.2%',
      views: '4.8M',
      platform: 'TikTok FYP + Reels',
      multiplier: '12.4x Viral Index',
      tags: ['Founder Thought Leadership', 'B2B Pipeline', 'Fintech'],
    },
    {
      id: 'clip-2',
      title: 'Fabric Stress Test: 10,000 Cycles',
      source: 'Studio Durability Drop',
      duration: '0:22',
      hookText: '"We threw our $300 technical jacket off a 400ft crane..."',
      hookRetention: '91.8%',
      views: '11.2M',
      platform: 'Reels + TikTok Spark Ads',
      multiplier: '4.8x Paid ROAS',
      tags: ['High-Growth DTC', 'Performance Video', 'UGC Swarm'],
    },
    {
      id: 'clip-3',
      title: 'Sub-Millisecond Inference Benchmark',
      source: 'Developer Teardown Stream',
      duration: '0:29',
      hookText: '"Stop paying 40x markup on cloud GPUs. Here is the raw data."',
      hookRetention: '79.5%',
      views: '3.1M',
      platform: 'YouTube Shorts + X Video',
      multiplier: '42K Waitlist Signups',
      tags: ['AI Infrastructure', 'Developer Mindshare', 'SaaS'],
    },
  ];

  // Auto-increment live impression telemetry and timecode
  useEffect(() => {
    const interval = setInterval(() => {
      setLiveImpressionCounter((prev) => prev + Math.floor(Math.random() * 64) + 18);
      const frames = Math.floor(Math.random() * 24).toString().padStart(2, '0');
      const seconds = Math.floor(Math.random() * 60).toString().padStart(2, '0');
      setTimecode(`00:14:${seconds}:${frames}`);
    }, 1200);
    return () => clearInterval(interval);
  }, []);

  // Cycle timeline progress
  useEffect(() => {
    const progressInterval = setInterval(() => {
      setTimelineProgress((prev) => (prev >= 100 ? 5 : prev + 3));
    }, 600);
    return () => clearInterval(progressInterval);
  }, []);

  const currentClip = viralClips[activeClipIndex];

  return (
    <section className="relative pt-32 pb-24 md:pt-40 md:pb-36 overflow-hidden bg-[#070709] border-b border-white/10">
      {/* Cinematic Anamorphic Background Lighting & Scrim */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[640px] bg-gradient-to-b from-cyan-950/25 via-blue-950/15 to-transparent blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 left-0 w-[500px] h-[500px] bg-cyan-900/10 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute top-1/4 right-0 w-[550px] h-[550px] bg-indigo-950/15 rounded-full blur-[170px] pointer-events-none" />

      {/* Cinematic Horizontal Anamorphic Optical Flare Accent */}
      <div className="absolute top-44 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-cyan-400/25 to-transparent pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Cinematic HUD Metadata Header */}
        <div className="flex flex-wrap items-center justify-between gap-3 text-xs tracking-wider uppercase text-neutral-400 font-mono mb-8 pb-4 border-b border-white/5">
          <div className="flex items-center gap-2.5">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-400" />
            </span>
            <span className="text-white font-semibold tracking-widest">ZERONIX.SPACE</span>
            <span aria-hidden="true" className="text-neutral-600">·</span>
            <span className="text-neutral-300">Global Growth Foundry</span>
          </div>

          <div className="hidden sm:flex items-center gap-4 text-[11px] text-neutral-500 font-mono">
            <span>OPTICS: 2.39:1 ANAMORPHIC</span>
            <span aria-hidden="true">·</span>
            <span>TIMECODE: <strong className="text-neutral-300 font-normal tabular-nums">{timecode}</strong></span>
            <span aria-hidden="true">·</span>
            <span className="text-emerald-400 font-medium">STATUS: SYNDICATING</span>
          </div>
        </div>

        {/* Hero Copy & Statement */}
        <div className="max-w-5xl">
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-display font-extrabold tracking-tight text-white leading-[0.96] uppercase text-balance">
            WE MAKE BRANDS <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-white to-neutral-400 drop-shadow-[0_0_35px_rgba(6,182,212,0.2)]">
              IMPOSSIBLE
            </span>{' '}
            TO IGNORE.
          </h1>

          {/* Exact Brief Supporting Line */}
          <p className="mt-7 md:mt-8 text-lg sm:text-xl md:text-2xl text-neutral-300 font-normal leading-relaxed max-w-3xl">
            Social media. Influencers. Clipping. Distribution. Marketing.{' '}
            <span className="text-white font-medium">One growth system.</span>
          </p>

          {/* Action Decision Block */}
          <div className="mt-9 md:mt-11 flex flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:gap-5">
            <button
              onClick={onOpenCampaignModal}
              className="inline-flex items-center justify-center gap-3 px-8 py-4 text-xs sm:text-sm font-semibold uppercase tracking-wider text-black bg-cyan-400 hover:bg-cyan-300 rounded transition-all duration-200 shadow-[0_0_30px_rgba(6,182,212,0.35)] hover:shadow-[0_0_45px_rgba(6,182,212,0.55)] cursor-pointer active:scale-95 whitespace-nowrap font-mono"
            >
              <span>START A CAMPAIGN</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>

            <button
              onClick={() => setShowreelOpen(true)}
              className="inline-flex items-center justify-center gap-2.5 px-7 py-4 text-xs sm:text-sm font-semibold uppercase tracking-wider text-neutral-200 hover:text-white bg-[#0e1017] hover:bg-[#151722] border border-white/10 hover:border-cyan-400/40 rounded transition-all duration-200 cursor-pointer whitespace-nowrap font-mono group"
            >
              <div className="w-5 h-5 rounded-full bg-cyan-400/10 flex items-center justify-center group-hover:bg-cyan-400/20 transition-colors">
                <Play className="w-2.5 h-2.5 fill-current text-cyan-400 ml-0.5" />
              </div>
              <span>SEE WHAT WE DO</span>
            </button>
          </div>
        </div>

        {/* Cinematic Media Command Center / Foundry Preview */}
        <div className="mt-14 md:mt-20 pt-8 border-t border-white/10">
          <div className="bg-[#0a0b10] border border-white/15 rounded-2xl overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.8)] relative">
            {/* Top Broadcast Bar */}
            <div className="px-5 py-3.5 bg-[#0f1118] border-b border-white/10 flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-rose-950/60 border border-rose-500/40 text-[11px] font-mono text-rose-400">
                  <span className="w-1.5 h-1.5 rounded-full bg-rose-500 animate-pulse" />
                  <span>BROADCAST STREAM</span>
                </div>
                <span className="text-xs font-mono font-medium text-neutral-300">
                  Foundry Monitor · Node Rack 04
                </span>
              </div>

              {/* Clip Switcher Segmented Control */}
              <div className="flex items-center gap-1 bg-[#171924] p-1 rounded-lg text-xs font-mono">
                {viralClips.map((clip, idx) => (
                  <button
                    key={clip.id}
                    onClick={() => setActiveClipIndex(idx)}
                    className={`px-3 py-1 rounded transition-all cursor-pointer ${
                      activeClipIndex === idx
                        ? 'bg-cyan-400 text-black font-semibold shadow-sm'
                        : 'text-neutral-400 hover:text-white'
                    }`}
                  >
                    Vector 0{idx + 1}
                  </button>
                ))}
              </div>
            </div>

            {/* Main Command Stage Layout */}
            <div className="p-5 sm:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Left Column: 9:16 Vertical Video Monitor Simulation */}
              <div className="lg:col-span-4 flex flex-col items-center">
                <div className="w-full max-w-[280px] aspect-[9/16] bg-[#050608] rounded-2xl border-2 border-white/20 p-4 relative overflow-hidden shadow-2xl flex flex-col justify-between group">
                  {/* Subtle Scanline Texture & Dark Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-black/90 pointer-events-none z-10" />
                  <div className="absolute inset-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:16px_16px] opacity-25 pointer-events-none" />

                  {/* Top HUD inside 9:16 phone */}
                  <div className="relative z-20 flex items-center justify-between text-[10px] font-mono text-neutral-400">
                    <span className="text-cyan-400 font-semibold">{currentClip.platform}</span>
                    <span className="px-1.5 py-0.5 rounded bg-white/10 text-white tabular-nums">
                      {currentClip.views} VIEWS
                    </span>
                  </div>

                  {/* Center Content: Animated Waveform + Hook Callout */}
                  <div className="relative z-20 text-center my-auto py-4">
                    <div className="w-12 h-12 rounded-full bg-cyan-400/10 border border-cyan-400/30 flex items-center justify-center mx-auto mb-3">
                      <Sparkles className="w-5 h-5 text-cyan-400" />
                    </div>

                    <div className="text-[11px] font-mono uppercase tracking-widest text-cyan-400 mb-1">
                      Sub-2s Algorithmic Hook
                    </div>
                    <div className="font-display font-bold text-white text-sm sm:text-base leading-snug px-2">
                      {currentClip.hookText}
                    </div>

                    {/* Animated Audio Equalizer Bars */}
                    <div className="flex items-end justify-center gap-1 h-8 mt-5">
                      {[18, 28, 14, 32, 22, 10, 26, 30, 16, 24, 20].map((h, i) => (
                        <div
                          key={i}
                          className="w-1 bg-cyan-400/80 rounded-full transition-all duration-300"
                          style={{
                            height: `${Math.min(32, Math.max(6, (h * (timelineProgress % 10 + 2)) / 5))}px`,
                          }}
                        />
                      ))}
                    </div>
                  </div>

                  {/* Bottom Controls in 9:16 Phone */}
                  <div className="relative z-20 space-y-2">
                    <div className="flex items-center justify-between text-[10px] font-mono text-neutral-400">
                      <span className="text-emerald-400 font-bold">{currentClip.hookRetention} Retention</span>
                      <span className="tabular-nums">{currentClip.duration}</span>
                    </div>

                    {/* Scrubber Bar */}
                    <div className="w-full bg-white/10 h-1.5 rounded-full overflow-hidden">
                      <div
                        className="bg-cyan-400 h-full transition-all duration-300"
                        style={{ width: `${timelineProgress}%` }}
                      />
                    </div>

                    <div className="text-[10px] font-mono text-neutral-400 truncate pt-1">
                      {currentClip.title}
                    </div>
                  </div>
                </div>

                <div className="text-[11px] font-mono text-neutral-500 mt-3 text-center">
                  Previewing Vector 0{activeClipIndex + 1} of 120+ Monthly Syllabi
                </div>
              </div>

              {/* Right Column: High-Tech Telemetry & Pipeline Nodes */}
              <div className="lg:col-span-8 space-y-6">
                {/* Active Clip Overview */}
                <div className="p-5 sm:p-6 bg-[#0f1017] border border-white/10 rounded-xl relative">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-semibold">
                        ACTIVE VECTOR ARCHITECTURE
                      </span>
                      <span aria-hidden="true" className="text-neutral-600">·</span>
                      <span className="text-xs font-mono text-neutral-400">{currentClip.source}</span>
                    </div>
                    <div className="text-xs font-mono text-emerald-400 bg-emerald-950/40 border border-emerald-500/30 px-2.5 py-0.5 rounded">
                      {currentClip.multiplier}
                    </div>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-display font-bold text-white mb-2">
                    {currentClip.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed font-sans mb-4">
                    Extracted via psychological retention scoring: audio hooks isolated at 0.4s, kinetic motion cues aligned to downbeats, and syndicated directly to 45 creator nodes.
                  </p>

                  <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-white/5 text-[11px] font-mono text-neutral-400">
                    <span className="text-neutral-500">Categories:</span>
                    {currentClip.tags.map((t, idx) => (
                      <span key={idx} className="text-neutral-300">
                        {t}{idx < currentClip.tags.length - 1 ? ' ·' : ''}
                      </span>
                    ))}
                  </div>
                </div>

                {/* 3 Telemetry Metrics */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="p-4 bg-[#0d0e15] border border-white/10 rounded-xl">
                    <div className="text-xs font-mono text-neutral-400 mb-1 flex items-center justify-between">
                      <span>Live 24h Impressions</span>
                      <Activity className="w-3.5 h-3.5 text-cyan-400" />
                    </div>
                    <div className="text-2xl font-mono font-bold text-white tabular-nums tracking-tight">
                      {liveImpressionCounter.toLocaleString()}
                    </div>
                    <div className="text-[11px] font-mono text-emerald-400 mt-1">
                      +14.8% velocity today
                    </div>
                  </div>

                  <div className="p-4 bg-[#0d0e15] border border-white/10 rounded-xl">
                    <div className="text-xs font-mono text-neutral-400 mb-1 flex items-center justify-between">
                      <span>Retention Floor</span>
                      <TrendingUp className="w-3.5 h-3.5 text-cyan-400" />
                    </div>
                    <div className="text-2xl font-mono font-bold text-cyan-400 tabular-nums tracking-tight">
                      {currentClip.hookRetention}
                    </div>
                    <div className="text-[11px] font-mono text-neutral-400 mt-1">
                      Target: 70%+ benchmark
                    </div>
                  </div>

                  <div className="p-4 bg-[#0d0e15] border border-white/10 rounded-xl">
                    <div className="text-xs font-mono text-neutral-400 mb-1 flex items-center justify-between">
                      <span>Syndication Latency</span>
                      <Share2 className="w-3.5 h-3.5 text-cyan-400" />
                    </div>
                    <div className="text-2xl font-mono font-bold text-white tabular-nums tracking-tight">
                      48 Hours
                    </div>
                    <div className="text-[11px] font-mono text-cyan-400 mt-1">
                      Ingest to Live Distribution
                    </div>
                  </div>
                </div>

                {/* Bottom Bar: Action & Proof Point */}
                <div className="p-4 bg-neutral-950 border border-white/5 rounded-xl flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="text-xs font-mono text-neutral-400 flex items-center gap-2">
                    <Eye className="w-4 h-4 text-cyan-400 shrink-0" />
                    <span>Cross-platform algorithmic syndication active across 120+ client channels</span>
                  </div>

                  <button
                    onClick={onOpenCampaignModal}
                    className="w-full sm:w-auto px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-black bg-cyan-400 hover:bg-cyan-300 rounded transition-all cursor-pointer font-mono whitespace-nowrap"
                  >
                    Deploy This System
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Cinematic Showreel & System Walkthrough Modal */}
      {showreelOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-xl animate-fadeIn"
          role="dialog"
          aria-modal="true"
        >
          <div className="bg-[#0b0c12] border border-white/20 rounded-2xl max-w-4xl w-full p-6 sm:p-10 relative shadow-2xl max-h-[92vh] overflow-y-auto">
            <button
              onClick={() => setShowreelOpen(false)}
              className="absolute top-6 right-6 p-2 text-neutral-400 hover:text-white rounded-lg hover:bg-neutral-800 transition-colors"
              aria-label="Close dialog"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3 text-xs font-mono uppercase tracking-wider text-cyan-400 mb-2">
              <Film className="w-4 h-4" />
              <span>Zeronix 2026 Engine Showcase · 4K Master Breakdown</span>
            </div>

            <h3 className="text-2xl sm:text-4xl font-display font-extrabold text-white mb-4">
              How the Omnipresence Machine Works
            </h3>

            <p className="text-sm text-neutral-300 leading-relaxed font-sans mb-8">
              A 4-part architectural breakdown of how Zeronix turns single-source media into hundreds of high-retention viral assets, distributing them across an international network of creator handles to generate audited commercial revenue.
            </p>

            {/* 4 Cinematic Chapters */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              <div className="p-5 bg-neutral-900/80 border border-white/10 rounded-xl space-y-2">
                <div className="text-xs font-mono text-cyan-400">CHAPTER 01</div>
                <div className="font-display font-bold text-white text-base">The Ingestion Protocol</div>
                <p className="text-xs text-neutral-400 leading-relaxed">
                  We ingest raw 4K video from your founder keynotes, podcasts, or studio sessions. Our editors tag micro-moments using psychological retention markers.
                </p>
              </div>

              <div className="p-5 bg-neutral-900/80 border border-white/10 rounded-xl space-y-2">
                <div className="text-xs font-mono text-cyan-400">CHAPTER 02</div>
                <div className="font-display font-bold text-white text-base">Sub-Second Hook Engineering</div>
                <p className="text-xs text-neutral-400 leading-relaxed">
                  Every asset is restructured for modern feeds. The first 1.8s is tested against 6 cognitive hook variations to guarantee a 70%+ retention rate.
                </p>
              </div>

              <div className="p-5 bg-neutral-900/80 border border-white/10 rounded-xl space-y-2">
                <div className="text-xs font-mono text-cyan-400">CHAPTER 03</div>
                <div className="font-display font-bold text-white text-base">Algorithmic Syndication</div>
                <p className="text-xs text-neutral-400 leading-relaxed">
                  Assets are syndicated across your brand handles and 80+ partner handles simultaneously, saturating TikTok, Reels, Shorts, and X feeds.
                </p>
              </div>

              <div className="p-5 bg-neutral-900/80 border border-white/10 rounded-xl space-y-2">
                <div className="text-xs font-mono text-cyan-400">CHAPTER 04</div>
                <div className="font-display font-bold text-white text-base">Whitelisted Performance Paid</div>
                <p className="text-xs text-neutral-400 leading-relaxed">
                  Top 5% viral organic outliers are immediately converted into whitelisted creator ad campaigns on Meta and TikTok, driving 4.2x average ROAS.
                </p>
              </div>
            </div>

            {/* Video Player Mockup inside modal */}
            <div className="p-6 bg-neutral-950 border border-cyan-500/30 rounded-xl flex flex-col sm:flex-row items-center justify-between gap-6 mb-8">
              <div>
                <div className="text-xs font-mono text-cyan-400 uppercase tracking-wider mb-1">
                  Ready to deploy for your brand?
                </div>
                <div className="text-lg font-display font-bold text-white">
                  Schedule your 48-Hour Growth Audit with our Creative Directors
                </div>
              </div>
              <button
                onClick={() => {
                  setShowreelOpen(false);
                  onOpenCampaignModal();
                }}
                className="px-6 py-3 text-xs font-semibold uppercase tracking-wider text-black bg-cyan-400 hover:bg-cyan-300 rounded transition-all cursor-pointer whitespace-nowrap font-mono"
              >
                Start a Campaign
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
