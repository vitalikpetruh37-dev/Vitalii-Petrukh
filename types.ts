import React from 'react';

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  content: string;
  rating: number;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  isError?: boolean;
}

export type Language = 'pl' | 'en' | 'ua';

export interface Translations {
  nav: {
    offer: string;
    about: string;
    portfolio: string;
    contact: string;
    quote: string;
  };
  hero: {
    badge: string;
    title: string;
    titleAccent: string;
    desc: string;
    ctaPrimary: string;
    ctaSecondary: string;
    features: {
      warranty: string;
      energy: string;
      quiet: string;
    }
  };
  services: {
    title: string;
    desc: string;
    items: {
      ac: { title: string; desc: string; };
      recuperation: { title: string; desc: string; };
      sewage: { title: string; desc: string; };
      demolition: { title: string; desc: string; };
    }
  };
  portfolio: {
    title: string;
    subtitle: string;
    more: string;
  };
  contact: {
    title: string;
    desc: string;
    call: string;
    email: string;
    address: string;
    nip: string;
    hours: string;
    form: {
      name: string;
      phone: string;
      subject: string;
      message: string;
      send: string;
      success: string;
      successDesc: string;
    }
  };
  footer: {
    desc: string;
    offer: string;
    company: string;
    rights: string;
  };
}