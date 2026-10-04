export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  tagline: string;
  description: string;
  deliverables: string[];
  metrics: {
    label: string;
    value: string;
  }[];
  platforms: string[];
}

export interface CaseStudy {
  id: string;
  client: string;
  industry: string;
  timeline: string;
  headline: string;
  summary: string;
  challenge: string;
  strategy: string;
  execution: string;
  results: {
    label: string;
    value: string;
    growth: string;
  }[];
  accentColor: string;
  testimonial?: {
    quote: string;
    author: string;
    role: string;
    company: string;
  };
}

export interface ClientArchetype {
  id: string;
  title: string;
  subtitle: string;
  fitDescription: string;
  typicalBottleneck: string;
  zeronixSolution: string;
  keyOutputs: string[];
  benchmarkResult: string;
}

export interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

export interface LeadFormData {
  brandName: string;
  contactName: string;
  email: string;
  website: string;
  budgetTier: string;
  selectedServices: string[];
  timeline: string;
  objectives: string;
}
