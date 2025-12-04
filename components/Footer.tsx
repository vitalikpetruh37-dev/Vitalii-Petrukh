import React from 'react';
import { Fan, Facebook } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export const Footer: React.FC = () => {
  const { t } = useLanguage();

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const navbarHeight = 100;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - navbarHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <footer className="bg-slate-950 text-slate-400 py-16 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-10">
          <div className="col-span-1 md:col-span-2">
             <div className="flex items-center gap-5 mb-8">
                {/* 
                   Same logic as Navbar: Looks for logo.png on the server.
                */}
                <img 
                  src="logo.png" 
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    e.currentTarget.nextElementSibling?.classList.remove('hidden');
                  }}
                  alt="Logo Vit-Went" 
                  className="h-20 w-20 object-contain bg-white rounded-full p-2 border border-slate-800"
                />
                
                {/* Fallback Icon */}
                <div className="hidden bg-blue-600 p-4 rounded-full text-white">
                    <Fan size={40} />
                </div>

                <div className="flex flex-col">
                   <span className="font-extrabold text-4xl text-white tracking-tight block leading-none font-sans">Vit-Went</span>
                   <span className="text-xs text-slate-500 font-bold uppercase tracking-widest mt-1">{t.nav.subtitle}</span>
                </div>
              </div>

            <p className="text-slate-500 text-base leading-relaxed max-w-sm mb-6">
              {t.footer.desc}
            </p>
            <div className="flex items-center gap-4">
                <a 
                  href="https://www.facebook.com/vit.went/?locale=pl_PL" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-slate-900 p-3 rounded-full text-blue-500 hover:text-white hover:bg-blue-600 transition-all duration-300"
                >
                  <Facebook size={28} />
                </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-6 text-xl">{t.footer.services}</h4>
            <ul className="space-y-4 text-base">
              <li>
                <a href="#services" onClick={(e) => handleScrollTo(e, 'services')} className="hover:text-blue-400 transition-colors flex items-center gap-2 cursor-pointer">
                  <span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span>{t.services.s1_title}
                </a>
              </li>
              <li>
                <a href="#services" onClick={(e) => handleScrollTo(e, 'services')} className="hover:text-blue-400 transition-colors flex items-center gap-2 cursor-pointer">
                  <span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span>{t.services.s2_title}
                </a>
              </li>
              <li>
                <a href="#services" onClick={(e) => handleScrollTo(e, 'services')} className="hover:text-blue-400 transition-colors flex items-center gap-2 cursor-pointer">
                  <span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span>{t.services.s3_title}
                </a>
              </li>
              <li>
                <a href="#services" onClick={(e) => handleScrollTo(e, 'services')} className="hover:text-blue-400 transition-colors flex items-center gap-2 cursor-pointer">
                  <span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span>{t.services.s4_title}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 text-xl">{t.footer.contact}</h4>
            <ul className="space-y-4 text-base text-slate-500">
              <li className="flex flex-col">
                <span className="text-xs uppercase font-bold text-slate-600 mb-1">Adres</span>
                <span className="text-slate-300">Gen. Tadeusza Pełczyńskiego 9</span>
                <span className="text-slate-300">01-471 Warszawa</span>
              </li>
              <li className="flex flex-col pt-2">
                 <span className="text-xs uppercase font-bold text-slate-600 mb-1">Telefon</span>
                 <a href="tel:+48660321872" className="hover:text-blue-400 font-bold text-white text-lg">+48 660 321 872</a>
              </li>
              <li className="flex flex-col">
                 <span className="text-xs uppercase font-bold text-slate-600 mb-1">Email</span>
                 <a href="mailto:vitwent@gmail.com" className="hover:text-blue-400 text-slate-300">vitwent@gmail.com</a>
              </li>
              <li className="pt-2 text-sm opacity-50">NIP: 5223313135</li>
            </ul>
          </div>
        </div>
        <div className="mt-16 pt-8 border-t border-slate-900 text-center text-sm text-slate-600">
          &copy; {new Date().getFullYear()} Vit-Went. {t.footer.rights}
        </div>
      </div>
    </footer>
  );
};