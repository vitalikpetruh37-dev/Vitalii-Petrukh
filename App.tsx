import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { Portfolio } from './components/Portfolio';
import { ContactForm } from './components/ContactForm';
import { Footer } from './components/Footer';
import { ChatBot } from './components/ChatBot';
import { LanguageProvider } from './contexts/LanguageContext';

function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-slate-950 text-slate-50 selection:bg-cyan-500/30 selection:text-cyan-200 relative overflow-x-hidden font-inter">
        {/* Global Background Effects */}
        <div className="fixed inset-0 z-0 pointer-events-none">
          <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[120px]" />
          <div className="absolute bottom-[10%] left-[-10%] w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[120px]" />
          <div className="absolute top-[40%] left-[20%] w-[300px] h-[300px] bg-purple-500/10 rounded-full blur-[100px]" />
        </div>

        <Navbar />
        <main className="relative z-10">
          <Hero />
          <Services />
          <Portfolio />
          <ContactForm />
        </main>
        <Footer />
        <ChatBot />
      </div>
    </LanguageProvider>
  );
}

export default App;