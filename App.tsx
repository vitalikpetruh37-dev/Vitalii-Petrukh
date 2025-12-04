import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { Portfolio } from './components/Portfolio';
import { WhyUs } from './components/WhyUs';
import { Testimonials } from './components/Testimonials';
import { ContactForm } from './components/ContactForm';
import { Footer } from './components/Footer';
import { ChatBot } from './components/ChatBot';
import { LanguageProvider } from './contexts/LanguageContext';

function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-slate-50 text-slate-900 selection:bg-slate-300 selection:text-slate-900">
        <Navbar />
        <main>
          <Hero />
          <Services />
          <Portfolio />
          <WhyUs />
          <Testimonials />
          <ContactForm />
        </main>
        <Footer />
        <ChatBot />
      </div>
    </LanguageProvider>
  );
}

export default App;