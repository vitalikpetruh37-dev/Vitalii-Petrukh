import React from 'react';
import { Fan, Facebook } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export const Footer: React.FC = () => {
  const { t } = useLanguage();
  const year = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 pt-16 pb-8 border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2">
             <div className="flex items-center gap-2 mb-6">
                <div className="bg-gradient-to-br from-blue-600 to-cyan-500 p-2 rounded-lg shadow-lg shadow-blue-900/20">
                  <Fan size={24} className="text-white" />
                </div>
                <span className="font-bold text-2xl text-white tracking-tight">Vit-Went</span>
              </div>
            <p className="text-slate-400 text-sm leading-relaxed max-w-sm mb-6">
              {t.footer.desc}
            </p>
            <div className="flex flex-col gap-2">
              <div className="text-slate-500 text-sm font-mono">
                NIP: 5223313135
              </div>
              <a 
                href="https://www.facebook.com/vit.went/?locale=pl_PL" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-slate-400 hover:text-blue-500 transition-colors mt-2"
              >
                <Facebook size={20} />
                <span className="text-sm">Facebook</span>
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-6 tracking-wide">{t.footer.offer}</h4>
            <ul className="space-y-3 text-sm text-slate-400">
              <li><a href="#services" className="hover:text-cyan-400 transition-colors">{t.services.items.ac.title}</a></li>
              <li><a href="#services" className="hover:text-cyan-400 transition-colors">{t.services.items.recuperation.title}</a></li>
              <li><a href="#services" className="hover:text-cyan-400 transition-colors">{t.services.items.sewage.title}</a></li>
              <li><a href="#services" className="hover:text-cyan-400 transition-colors">{t.services.items.demolition.title}</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 tracking-wide">{t.footer.company}</h4>
            <ul className="space-y-3 text-sm text-slate-400">
              <li><a href="#about" className="hover:text-cyan-400 transition-colors">{t.nav.about}</a></li>
              <li><a href="#portfolio" className="hover:text-cyan-400 transition-colors">{t.nav.portfolio}</a></li>
              <li><a href="#contact" className="hover:text-cyan-400 transition-colors">{t.nav.contact}</a></li>
            </ul>
          </div>
        </div>
        <div className="pt-8 border-t border-white/5 text-center text-xs text-slate-600">
          &copy; {year} Vit-Went. {t.footer.rights}
        </div>
      </div>
    </footer>
  );
};