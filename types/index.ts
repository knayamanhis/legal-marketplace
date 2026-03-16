export interface Lawyer {
  id: string;
  name: string;
  specialization: string[];
  city: string;
  experience: number;
  socialScore: number;
  phone: string;
  linkedin: string;
  fee: string;
  verified: boolean;
}

export interface CaseType {
  id: string;
  title: string;
  icon: string;
  description: string;
  commonDocuments: string[];
  relevantActs: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  city: string;
  caseType: string;
  rating: number;
  text: string;
  date: string;
  initials: string;
}

export interface NewsItem {
  id: string;
  headline: string;
  summary: string;
  date: string;
  category: string;
  source: string;
}

export interface User {
  email: string;
  name: string;
}

export interface LegalResponse {
  summary: string;
  keyPoints: string[];
  relevantActs: string[];
  disclaimer: string;
}
