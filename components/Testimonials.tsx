import React from 'react';
import { Star, MapPin } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export const Testimonials: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="py-24 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">{t.testimonials.title}</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            {t.testimonials.subtitle}
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
           <div className="bg-white p-8 lg:p-12 rounded-3xl border border-slate-200 shadow-xl text-center relative overflow-hidden">
             {/* Decorative Google Colors */}
             <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-500 via-red-500 to-yellow-500"></div>

             <div className="flex justify-center gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={32} className="fill-yellow-400 text-yellow-400" />
                ))}
             </div>
             
             <h3 className="text-2xl font-bold text-slate-900 mb-4">{t.testimonials.no_reviews}</h3>
             
             <div className="mt-8 flex justify-center">
               <a 
                 href="https://g.page/r/CSiYZVtUOEZXEAE/review" 
                 target="_blank" 
                 rel="noopener noreferrer"
                 className="inline-flex items-center gap-2 bg-blue-600 text-white px-8 py-4 rounded-full font-bold hover:bg-blue-700 transition-colors shadow-lg shadow-blue-500/30"
               >
                 <MapPin size={20} />
                 {t.testimonials.google_btn}
               </a>
             </div>
           </div>
        </div>
      </div>
    </section>
  );
};