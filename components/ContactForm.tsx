import React from 'react';
import { Phone, Mail, MapPin, Clock, Map, Facebook, ArrowRight } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export const ContactForm: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="contact" className="py-20 bg-white relative overflow-hidden scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-30">
        <div className="bg-white rounded-3xl overflow-hidden shadow-2xl border border-slate-200 flex flex-col lg:flex-row">
          
          {/* Info Panel */}
          <div className="lg:w-5/12 p-10 lg:p-16 text-white flex flex-col justify-between bg-slate-900 relative z-20">
            <div className="relative z-10">
              <h2 className="text-3xl font-bold mb-2">{t.contact.title}</h2>
              <p className="text-slate-400 mb-8">
                {t.contact.subtitle}
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-white/10 p-3 rounded-lg text-blue-400">
                    <Phone size={24} />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 uppercase tracking-wider">{t.contact.phone}</p>
                    <a href="tel:+48660321872" className="font-semibold text-lg hover:text-blue-400 transition-colors pointer-events-auto">+48 660 321 872</a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-white/10 p-3 rounded-lg text-blue-400">
                    <Mail size={24} />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 uppercase tracking-wider">{t.contact.email}</p>
                    <a href="mailto:vitwent@gmail.com" className="font-semibold text-lg hover:text-blue-400 transition-colors pointer-events-auto">vitwent@gmail.com</a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-white/10 p-3 rounded-lg text-blue-400">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 uppercase tracking-wider">{t.contact.address}</p>
                    <p className="font-semibold">Gen. Tadeusza Pełczyńskiego 9</p>
                    <p className="font-semibold">01-471 Warszawa</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-white/10 p-3 rounded-lg text-blue-400">
                    <Clock size={24} />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 uppercase tracking-wider">{t.contact.hours}</p>
                    <p className="font-semibold">{t.contact.hours_wk}</p>
                    <p className="font-semibold">{t.contact.hours_sat}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-white/10 p-3 rounded-lg text-blue-400">
                    <Map size={24} />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 uppercase tracking-wider">{t.contact.company_data}</p>
                    <p className="font-semibold">NIP: 5223313135</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-white/10 p-3 rounded-lg text-blue-400">
                    <Facebook size={24} />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 uppercase tracking-wider">{t.contact.facebook}</p>
                    <a href="https://www.facebook.com/vit.went/?locale=pl_PL" target="_blank" rel="noopener noreferrer" className="font-semibold text-lg hover:text-blue-400 transition-colors pointer-events-auto">
                      Vit-Went
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Direct Contact Buttons & Map */}
          <div className="lg:w-7/12 bg-slate-50 relative z-20 flex flex-col">
            <div className="p-10 lg:p-16 flex-1 flex flex-col justify-center items-center text-center relative z-30 bg-white">
              <div className="max-w-md w-full">
                <h3 className="text-3xl font-bold text-slate-900 mb-4">{t.contact.direct_title}</h3>
                <p className="text-slate-600 mb-10 text-lg">
                  {t.contact.direct_desc}
                </p>

                <div className="space-y-4 w-full">
                  <a 
                    href="tel:+48660321872"
                    className="flex items-center justify-center gap-3 w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-5 rounded-xl shadow-lg shadow-blue-600/20 transition-all hover:scale-[1.02] active:scale-[0.98] text-xl cursor-pointer pointer-events-auto z-50"
                  >
                    <Phone size={24} />
                    {t.contact.btn_call}
                  </a>
                  
                  <a 
                    href="mailto:vitwent@gmail.com"
                    className="flex items-center justify-center gap-3 w-full bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold py-5 rounded-xl border border-slate-200 transition-all hover:scale-[1.02] active:scale-[0.98] text-lg cursor-pointer pointer-events-auto z-50"
                  >
                    <Mail size={24} />
                    {t.contact.btn_email}
                  </a>
                </div>
              </div>
            </div>
            
            <div className="h-64 w-full border-t border-slate-200 relative z-10">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2441.9595148467674!2d20.9116739!3d52.2629781!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471ecb08d062b54f%3A0x3e69608000000000!2sGen.%20Tadeusza%20Pe%C5%82czy%C5%84skiego%209%2C%2001-471%20Warszawa!5e0!3m2!1spl!2spl!4v1708440000000!5m2!1spl!2spl" 
                width="100%" 
                height="100%" 
                style={{border:0, pointerEvents: 'auto'}} 
                allowFullScreen={true} 
                loading="lazy"
                title="Mapa Vit-Went"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};