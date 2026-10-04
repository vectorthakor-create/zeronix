import { ServiceItem, CaseStudy, ClientArchetype, FAQItem } from '../types';

export const AGENCY_METRICS = [
  { value: '480M+', label: 'Organic Monthly Impressions', change: '+240% YoY' },
  { value: '14,000+', label: 'Clips Produced & Distributed', change: 'Across 120+ Channels' },
  { value: '85+', label: 'Active Creator & Influencer Nodes', change: 'US · EU · APAC' },
  { value: '4.2x', label: 'Average Performance ROAS', change: 'Audited Ad Accounts' },
];

export const CLIENT_LOGOS = [
  { name: 'Vanguard Media Group', category: 'Global Publishing' },
  { name: 'Aether Labs', category: 'AI Infrastructure' },
  { name: 'KINETIC Athletics', category: 'High-Growth DTC' },
  { name: 'Lumina FinTech', category: 'Neobank & Payments' },
  { name: 'Pulse Audio', category: 'Consumer Hardware' },
  { name: 'Sovereign Capital', category: 'Venture Studio' },
];

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'social-media',
    number: '01',
    title: 'Social Media Marketing',
    tagline: 'Algorithmic positioning and narrative dominance',
    description: 'We engineer brand relevance by turning corporate feeds into high-retention cultural channels. Every post is architected around platform-specific algorithmic distribution patterns, driving real attention rather than quiet vanity likes.',
    deliverables: [
      'Comprehensive brand narrative & tone guide',
      'Daily native content creation (X, LinkedIn, TikTok, IG)',
      'Community momentum & conversational management',
      'Real-time cultural trend capitalization protocols',
      'Unified cross-channel executive positioning'
    ],
    metrics: [
      { label: 'Avg. Organic Engagement', value: '4.8x' },
      { label: 'Follower Velocity', value: '+340%' }
    ],
    platforms: ['TikTok', 'Instagram', 'X (Twitter)', 'YouTube', 'LinkedIn']
  },
  {
    id: 'influencer-marketing',
    number: '02',
    title: 'Influencer Marketing',
    tagline: 'Tier-1 alliances and performance-bound creator swarms',
    description: 'Move beyond unmeasurable flat-fee product seeding. We build performance-structured partnerships with high-resonance creators, integrating your brand into organic narratives with dedicated tracking, whitelisted ad permissions, and contracted conversion quotas.',
    deliverables: [
      'Vetted creator roster identification and outreach',
      'Contract negotiation with whitelisting rights',
      'Narrative briefing & visual creative direction',
      'Affiliate & attribution link infrastructure',
      'Paid dark-post amplification of top-performing creator assets'
    ],
    metrics: [
      { label: 'Creator Network Size', value: '850+' },
      { label: 'Contracted ROAS Floor', value: '3.0x' }
    ],
    platforms: ['TikTok', 'YouTube', 'Instagram Reels', 'Podcasts']
  },
  {
    id: 'short-form-content',
    number: '03',
    title: 'Short-Form Content',
    tagline: 'Precision 9:16 video designed for algorithmic retention',
    description: 'In modern feeds, the first 1.8 seconds dictate whether your brand gets seen or skipped. Our video directors, editors, and motion designers build vertical video assets engineered with psychological retention hooks, dynamic pace pacing, and cinema-grade sound design.',
    deliverables: [
      'High-impact vertical video production (40–120 assets/mo)',
      'Sub-2 second cognitive retention hooks',
      'Bespoke motion graphics, kinetic captions, & sound engineering',
      'Multi-format visual testing & split A/B variants',
      'High-definition master exports optimized for each platform'
    ],
    metrics: [
      { label: 'Avg. Hook Retention', value: '72%' },
      { label: 'Video Completion Rate', value: '38%' }
    ],
    platforms: ['TikTok', 'Instagram Reels', 'YouTube Shorts']
  },
  {
    id: 'content-clipping',
    number: '04',
    title: 'Content Clipping & Distribution',
    tagline: 'Turn 1 source asset into hundreds of viral touchpoints',
    description: 'Our proprietary distribution infrastructure clips your keynotes, podcasts, product launches, or founder streams into hundreds of micro-assets, subsequently syndicating them across an international matrix of branded accounts and affiliate channels for omnipresent reach.',
    deliverables: [
      'Deep forensic analysis of long-form video archives',
      'Extraction of high-resonance 15–45 second micro-moments',
      'Syndication across 50+ network-managed distribution handles',
      'Algorithmic SEO tagging and native sound optimization',
      'Zero-IP-risk compliance and brand safety moderation'
    ],
    metrics: [
      { label: 'Clips Produced / Month', value: '250+' },
      { label: 'Syndication Reach', value: '60M+' }
    ],
    platforms: ['Shorts', 'Reels', 'TikTok', 'X Video', 'Reddit']
  },
  {
    id: 'digital-marketing',
    number: '05',
    title: 'Digital Marketing',
    tagline: 'Omnichannel growth funnels engineered for conversion',
    description: 'Attention without capture is lost revenue. We connect your organic media presence directly to high-converting landing pages, high-intent search visibility, lifecycle retention workflows, and automated email/SMS conversion systems that systematically monetize audience traffic.',
    deliverables: [
      'High-velocity conversion landing page design & CRO',
      'Lifecycle email and SMS automated customer funnels',
      'Organic search & programmatic SEO content engines',
      'Customer lifetime value (LTV) expansion pathways',
      'Real-time analytics dashboard with revenue attribution'
    ],
    metrics: [
      { label: 'Avg. Opt-In Lift', value: '+58%' },
      { label: 'LTV Expansion', value: '+35%' }
    ],
    platforms: ['Search', 'Websites', 'Klaviyo', 'HubSpot', 'Custom CMS']
  },
  {
    id: 'performance-marketing',
    number: '06',
    title: 'Performance Marketing',
    tagline: 'Data-driven paid social with relentless CAC compression',
    description: 'We do not run generic stock ads. We take the top 1% of organic viral clips, creator endorsements, and social hooks, and deploy them into hyper-targeted paid advertising funnels across Meta, Google, TikTok, and YouTube with surgical attribution.',
    deliverables: [
      'Paid social campaign architecture (Meta, TikTok, Google, YouTube)',
      'Continuous creative iteration with 20+ ad variants weekly',
      'Whitelisted creator ads and branded content integration',
      'Server-side CAPI tracking & post-purchase attribution modeling',
      'Relentless Customer Acquisition Cost (CAC) optimization'
    ],
    metrics: [
      { label: 'Blended ROAS', value: '4.2x' },
      { label: 'CAC Reduction', value: '-38%' }
    ],
    platforms: ['Meta Ads', 'TikTok Ads', 'Google Search/PMax', 'YouTube Ads']
  }
];

export const PROCESS_STEPS = [
  {
    step: '01',
    title: 'Deconstruction & Narrative Engineering',
    timeline: 'Days 1–7',
    summary: 'We audit your existing assets, analyze audience psychology, and identify algorithmic whitespace that your competitors are ignoring.',
    details: [
      'Forensic media audit of past organic & paid campaigns',
      'Category whitespace analysis and narrative hook formulation',
      'Brand safety boundary definition and compliance blueprint',
      'Initial content architecture and distribution target mapping'
    ]
  },
  {
    step: '02',
    title: 'Content Foundry & Hook Matrix',
    timeline: 'Days 8–14',
    summary: 'We build your creative pipeline: recording studio sessions, extracting long-form source footage, and editing the first 30+ short-form vectors.',
    details: [
      'High-production source capture (podcast, founder interviews, studio drops)',
      'Extraction of sub-2 second psychological hooks and retention loops',
      'Cinema-grade color grading, kinetic typography, and audio mastering',
      'Client approval portal with 24-hour turnaround SLA'
    ]
  },
  {
    step: '03',
    title: 'Algorithmic Syndication & Network Seeding',
    timeline: 'Days 15–25',
    summary: 'Content hits the digital ecosystem. Assets are scheduled across brand channels and syndicated into our private network of distribution nodes.',
    details: [
      'High-frequency scheduled deployment across 5 core platforms',
      'Syndication through curated creator and clipping accounts',
      'Real-time engagement moderation and community conversation ignition',
      'Algorithmic momentum tracking across initial impression waves'
    ]
  },
  {
    step: '04',
    title: 'Performance Amplification & Compounding',
    timeline: 'Day 26 Onward',
    summary: 'Winning organic hooks are whitelisted and pushed into paid performance funnels, transforming cultural reach into repeatable commercial revenue.',
    details: [
      'Identification of outlier organic clips (top 5% by retention & shares)',
      'Conversion of organic winners into high-ROAS paid ad variations',
      'Whitelisted creator ad deployment with server-side attribution',
      'Weekly strategy reviews and iterative creative scaling'
    ]
  }
];

export const CLIENT_ARCHETYPES: ClientArchetype[] = [
  {
    id: 'dtc-ecommerce',
    title: 'Category-Defining Consumer Brands',
    subtitle: 'High-growth direct-to-consumer and retail brands ($5M–$100M)',
    fitDescription: 'Brands with exceptional physical or digital products seeking to overcome rising Meta ad costs through omnipresent organic culture and whitelisted creator scaling.',
    typicalBottleneck: 'Ad creative fatigue, escalating customer acquisition costs, and reliance on generic studio imagery that gets ignored on social feeds.',
    zeronixSolution: 'We build an unstoppable short-form engine combining 60+ UGC clips per month with creator whitelisting and performance ad testing, scaling blended ROAS to 4.5x+.',
    keyOutputs: ['60+ Bespoke Short-Form Clips/mo', '15+ Creator Whitelisting Deals', 'Performance Paid Ads Funnel', 'High-Converting CRO Landing Pages'],
    benchmarkResult: '+210% New Customer Acquisition in 120 Days'
  },
  {
    id: 'founders-tech',
    title: 'Venture-Backed Tech & SaaS',
    subtitle: 'Series A to IPO software companies, AI products, and B2B platforms',
    fitDescription: 'Founders and product companies that need to dominate industry discourse, turn developer or business buyer attention into qualified pipeline, and outshine legacy incumbents.',
    typicalBottleneck: 'Stiff corporate marketing, boring product demos, low engagement on social channels, and high CAC on LinkedIn and Google Search.',
    zeronixSolution: 'We transform founder insights and product capabilities into punchy, high-retention short videos, executive thought leadership, and developer-centric distribution swarms.',
    keyOutputs: ['Executive Personal Brand Synergies', 'Product Teardown Short-Form Video', 'Tech Influencer & Podcaster Integrations', 'Attribution-Tied Free Trial Funnels'],
    benchmarkResult: '14.2M B2B Impressions & 42,000+ Qualified Signups'
  },
  {
    id: 'creators-media',
    title: 'Global Creators & Media Studios',
    subtitle: 'High-profile podcasters, media networks, and global public figures',
    fitDescription: 'Top-tier creators producing hours of long-form audio/video who want an enterprise-grade distribution team to saturate TikTok, Reels, Shorts, and X.',
    typicalBottleneck: 'Exhausting post-production, missed viral moments, inability to scale beyond 2-3 platforms, and untapped global audience segments.',
    zeronixSolution: 'Our distribution infrastructure ingests full episodes and outputs 30–60 perfectly paced, subtitled, and hook-optimized clips weekly across 50+ network handles.',
    keyOutputs: ['Full-Episode Forensic Archiving', 'Rapid 24h Turnaround Post-Release', 'Multi-Language Auto-Localization', 'Algorithmic Network Syndication'],
    benchmarkResult: '68M+ Organic Impressions Delivered Across 90 Days'
  }
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'lumina-fintech',
    client: 'Lumina FinTech',
    industry: 'Consumer Banking & Digital Payments',
    timeline: '90-Day Initial Sprints',
    headline: 'From Zero to 68M Organic Views and 340% App Install Lift',
    summary: 'How Zeronix engineered a high-retention financial literacy content engine that captured Gen-Z and Millennial market share without spending millions on celebrity endorsements.',
    challenge: 'Lumina was burning cash on traditional performance marketing with an unsustainable $48 blended CAC. Organic social channels were dormant, and young consumers saw the brand as another sterile finance app.',
    strategy: 'Zeronix designed an aggressive short-form clipping strategy centered on "money psychology" and relatable financial transparency. We partnered with 40 micro-influencers and launched a 30-account distribution matrix.',
    execution: 'Over 90 days, we produced 280 high-retention 9:16 clips, hosted 3 viral financial breakdowns, and whitelisted the top 8 creator videos as paid Spark Ads on TikTok and Reels.',
    results: [
      { label: 'Organic Impressions', value: '68.4M', growth: '+520%' },
      { label: 'App Install Growth', value: '+340%', growth: 'QoQ Lift' },
      { label: 'Blended CAC', value: '$0.18', growth: '-74% Reduction' },
      { label: 'Creator Placements', value: '120+', growth: 'Active Nodes' }
    ],
    accentColor: '#00f2fe',
    testimonial: {
      quote: 'Zeronix gave us cultural distribution at a speed no traditional agency could match. Our organic impressions skyrocketed, and our blended acquisition cost dropped by over 70% in three months.',
      author: 'Julian Vance',
      role: 'Chief Growth Officer',
      company: 'Lumina FinTech'
    }
  },
  {
    id: 'kinetic-athletics',
    client: 'KINETIC Athletics',
    industry: 'Technical Performance Apparel (DTC)',
    timeline: '6 Months Performance Cycle',
    headline: 'Scaling TikTok & Reels Clipping to $3.2M Added GMV',
    summary: 'A complete transformation of a high-end streetwear and athletic brand into an algorithmic phenomenon, pairing athlete short-form clips with high-velocity paid conversion funnels.',
    challenge: 'KINETIC was dependent on high-cost Facebook catalog ads with diminishing returns (sub-1.8x ROAS). Their product quality was world-class, but nobody was talking about it organically on TikTok or Reels.',
    strategy: 'Zeronix built an "Athlete Creative Foundry", capturing raw training footage and technical fabric durability tests, then turning those moments into 120+ monthly short videos distributed across fitness and lifestyle creators.',
    execution: 'We deployed our proprietary clipping engine across 45 fitness creators, whitelisted winning organic posts into Meta and TikTok ad accounts, and rebuilt the product landing pages with interactive video modules.',
    results: [
      { label: 'Attributed Added GMV', value: '$3.24M', growth: 'Direct Tracking' },
      { label: 'Blended ROAS', value: '4.8x', growth: 'From 1.8x Baseline' },
      { label: 'Organic User Clips', value: '1,420+', growth: 'Community UGC' },
      { label: 'New Customer Lift', value: '+210%', growth: 'Audited' }
    ],
    accentColor: '#3b82f6',
    testimonial: {
      quote: 'The level of creative velocity and algorithmic mastery Zeronix brought to KINETIC was game-changing. They generated more high-intent demand in one quarter than our previous agency managed all year.',
      author: 'Elena Rostova',
      role: 'VP of Brand & Growth',
      company: 'KINETIC Athletics'
    }
  },
  {
    id: 'horizon-ai-labs',
    client: 'Horizon AI Labs',
    industry: 'Developer Tools & Generative AI Infrastructure',
    timeline: '4 Months Launch Blitz',
    headline: 'Building Developer Mindshare and 42,000+ Waitlist Signups',
    summary: 'Transforming complex developer documentation and API capabilities into magnetic video demonstrations that swept X, YouTube Shorts, and developer tech communities.',
    challenge: 'Horizon built an industry-leading inference API, but their marketing was dry technical documentation. They struggled to get noticed amidst the overwhelming noise in the AI tooling landscape.',
    strategy: 'Zeronix created an engineering-focused video demonstration pipeline: showing real-time code executions, benchmark battles against incumbents, and concise 30-second feature teardowns.',
    execution: 'Partnered with 18 prominent AI engineers and tech podcasters, engineered viral live-coding shorts, and syndicated micro-tutorials across X and tech community hubs with custom UTM tracking.',
    results: [
      { label: 'Developer Impressions', value: '14.2M', growth: 'Targeted Tech B2B' },
      { label: 'Beta Waitlist Signups', value: '42,600+', growth: 'Qualified Leads' },
      { label: 'Top-Tier Tech Alliances', value: '18', growth: 'Key Opinion Leaders' },
      { label: 'Enterprise Inbound Deals', value: '$1.8M', growth: 'Pipeline Value' }
    ],
    accentColor: '#10b981',
    testimonial: {
      quote: 'Developers usually smell marketing from a mile away. Zeronix understood our product deeply and created short-form demonstrations that our community genuinely loved and shared.',
      author: 'Marcus Chen',
      role: 'Co-Founder & CEO',
      company: 'Horizon AI Labs'
    }
  }
];

export const FAQ_ITEMS: FAQItem[] = [
  {
    category: 'System & Distribution',
    question: 'How does your content clipping and distribution network work?',
    answer: 'We analyze your long-form video archives, podcast recordings, or product demonstrations, extract high-retention 15–45 second micro-hooks, and optimize them with cinematic editing and captions. We then distribute these assets simultaneously through your primary brand handles and our curated network of 80+ partner handles and creator accounts, creating organic saturation across TikTok, Reels, Shorts, and X.'
  },
  {
    category: 'Brand Safety & Compliance',
    question: 'How do you protect our brand safety and IP during widespread distribution?',
    answer: 'Brand integrity is strictly guarded. Prior to launch, we co-author a comprehensive Brand Safety & Narrative Charter defining exact tone, forbidden topics, regulatory constraints, and visual guidelines. Every clip produced must pass internal editorial review before distribution, and all network handles operate under strict contractual compliance.'
  },
  {
    category: 'Ramp-Up & Timeline',
    question: 'What is the typical ramp-up period to see measurable growth and revenue impact?',
    answer: 'Our onboarding sprint takes 7 to 10 days, during which we audit past assets and set up distribution infrastructure. Initial content begins syndicating by Day 12. Most clients observe significant organic impression velocity by Day 21 and measurable attribution lift (app installs, pipeline, or DTC purchases) within the first 30 to 45 days.'
  },
  {
    category: 'International Reach',
    question: 'Do you work with international clients across multiple timezones and languages?',
    answer: 'Yes. Zeronix is an international growth company. Our core team operates across New York, London, Singapore, and Dubai. We manage campaigns across North America, Europe, the Middle East, and Asia-Pacific, offering multi-region localization, localized subtitles, and timezone-optimized scheduling.'
  },
  {
    category: 'Commercial Structure',
    question: 'How are your engagements structured (monthly retainer vs performance)?',
    answer: 'We offer hybrid partnerships structured for aligned incentives: a baseline monthly operational retainer (covering content production, distribution infrastructure, and daily management) paired with performance milestones or revenue-share incentives tied to audited impressions, pipeline, or ROAS targets.'
  },
  {
    category: 'Onboarding & Asset Requirements',
    question: 'What assets or time commitment do you need from our internal team?',
    answer: 'We minimize founder and executive overhead. For clients with existing media (podcasts, webinars, recordings), we need access to raw files. For new production, we host one structured 90-minute monthly recording session with your team, which our foundry turns into 40–100 distinct distribution-ready assets.'
  }
];
