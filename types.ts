import React from 'react';

export interface TeamMember {
  name: string;
  role: string;
  bio: string[];
  imageUrl?: string;
}

export interface Transaction {
  client: string;
  industry?: string; // e.g., "Real Estate", "Steel"
  description: string;
  dealType: string;
  amount: string;
}

export interface Service {
  title: string;
  description: string;
  details: string[];
  icon: React.ReactNode;
}

export interface CaseStudy {
  id: string;
  title: string;
  clientProfile: string;
  challenge: string;
  strategy: string;
  execution: string;
  result: string;
  category: string;
}

export interface MethodologyStep {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface Sector {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface InsightPost {
  title: string;
  date: string;
  category: string;
}

export enum Page {
  HOME = 'HOME',
  ABOUT = 'ABOUT',
  SERVICES = 'SERVICES',
  TRANSACTIONS = 'TRANSACTIONS',
  CASE_STUDIES = 'CASE_STUDIES',
  CONTACT = 'CONTACT',
}