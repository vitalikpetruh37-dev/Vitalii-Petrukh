import React, { useState } from 'react';
import { Phone, Mail, MapPin, Send, Clock, FileText } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export const ContactForm: React.FC = () => {
  const { t } = useLanguage();
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section id="contact" className="py-24 relative scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-slate-900/50 backdrop-blur-xl rounded-3xl overflow-hidden border border-white/10 shadow-2xl flex flex-col lg:flex-row">
          
          {/* Info Panel */}
          <div className="lg:w-5/12 p-10 lg:p-16 bg-slate-900/80 border-r border-white/5 flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/10 rounded-full blur-[80px] -mr-16 -mt-16 pointer-events-none"></div>
            
            <div className="relative z-10">
              <h2 className="text-3xl font-bold text-white mb-6">{t.contact.title}</h2>
              <p className="text-slate-400 mb-10 leading-relaxed">
                {t.contact.desc}
              </p>
              
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="bg-blue-500/10 p-3 rounded-xl text-blue-400 border border-blue-500/20">
                    <Phone size={24} />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 uppercase tracking-wider font-bold mb-1">{t.contact.call}</p>
                    <p className="font-semibold text-white text-lg">+48 660 321 872</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="bg-cyan-500/10 p-3 rounded-xl text-cyan-400 border border-cyan-500/20">
                    <Mail size={24} />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 uppercase tracking-wider font-bold mb-1">{t.contact.email}</p>
                    <p className="font-semibold text-white">vitwent@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-emerald-500/10 p-3 rounded-xl text-emerald-400 border border-emerald-500/20">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 uppercase tracking-wider font-bold mb-1">{t.contact.address}</p>
                    <p className="font-semibold text-white">Gen. Tadeusza Pełczyńskiego 9</p>
                    <p className="font-semibold text-white">01-471 Warszawa</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-purple-500/10 p-3 rounded-xl text-purple-400 border border-purple-500/20">
                    <FileText size={24} />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 uppercase tracking-wider font-bold mb-1">{t.contact.nip}</p>
                    <p className="font-semibold text-white">5223313135</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-orange-500/10 p-3 rounded-xl text-orange-400 border border-orange-500/20">
                    <Clock size={24} />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 uppercase tracking-wider font-bold mb-1">{t.contact.hours}</p>
                    <p className="font-medium text-slate-300">Pn - Pt: 8:00 - 18:00</p>
                    <p className="font-medium text-slate-300">Sob: 9:00 - 14:00</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Form & Map */}
          <div className="lg:w-7/12 flex flex-col">
             {/* Google Map Embed - Pointing to Warsaw */}
             <div className="h-64 w-full filter grayscale contrast-125 brightness-75 border-b border-white/10 relative group">
                <div className="absolute inset-0 bg-blue-900/10 z-10 pointer-events-none"></div>
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2443.123456789!2d20.910!3d52.240!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471ecb6a12345678%3A0x1234567890abcdef!2sGen.+Tadeusza+Pe%C5%82czy%C5%84skiego+9%2C+01-471+Warszawa!5e0!3m2!1spl!2spl!4v1709555555555!5m2!1spl!2spl" 
                  width="100%" 
                  height="100%" 
                  style={{border:0}} 
                  allowFullScreen={true} 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  className="opacity-80 group-hover:opacity-100 transition-opacity"
                ></iframe>
             </div>

             <div className="p-10 lg:p-12 bg-slate-900/30 flex-1">
                {submitted ? (
                  <div className="h-full flex flex-col items-center justify-center text-center py-12">
                     <div className="w-20 h-20 bg-green-500/10 text-green-400 rounded-full flex items-center justify-center mb-6 border border-green-500/20">
                       <Send size={32} />
                     </div>
                     <h3 className="text-2xl font-bold text-white mb-2">{t.contact.form.success}</h3>
                     <p className="text-slate-400">{t.contact.form.successDesc}</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">{t.contact.form.name}</label>
                        <input required type="text" className="w-full px-4 py-3 rounded-lg bg-slate-950/50 border border-white/10 text-white focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all placeholder-slate-600" />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">{t.contact.form.phone}</label>
                        <input required type="tel" className="w-full px-4 py-3 rounded-lg bg-slate-950/50 border border-white/10 text-white focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all placeholder-slate-600" />
                      </div>
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">{t.contact.form.message}</label>
                      <textarea required rows={3} className="w-full px-4 py-3 rounded-lg bg-slate-950/50 border border-white/10 text-white focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all placeholder-slate-600"></textarea>
                    </div>
                    <button type="submit" className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-bold py-4 rounded-lg hover:shadow-lg hover:shadow-cyan-500/20 transition-all uppercase tracking-wider text-sm">
                      {t.contact.form.send}
                    </button>
                  </form>
                )}
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};