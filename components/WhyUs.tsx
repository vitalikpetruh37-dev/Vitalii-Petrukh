import React from 'react';
import { Clock, ShieldCheck, Sparkles } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { motion } from 'framer-motion';

export const WhyUs: React.FC = () => {
  const { t } = useLanguage();

  const features = [
    {
      icon: <Clock size={32} className="text-blue-600" />,
      title: t.why_us.f1_title,
      desc: t.why_us.f1_desc,
    },
    {
      icon: <Sparkles size={32} className="text-yellow-500" />,
      title: t.why_us.f2_title,
      desc: t.why_us.f2_desc,
    },
    {
      icon: <ShieldCheck size={32} className="text-green-600" />,
      title: t.why_us.f4_title,
      desc: t.why_us.f4_desc,
    },
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden border-b border-slate-100">
       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
             <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">{t.why_us.title}</h2>
             <p className="text-slate-600 max-w-2xl mx-auto text-lg">{t.why_us.subtitle}</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-slate-50 p-8 rounded-2xl border border-slate-100 hover:shadow-lg hover:border-blue-100 transition-all duration-300 group text-center"
              >
                <div className="w-16 h-16 mx-auto bg-white rounded-xl shadow-sm flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
                <p className="text-slate-600 leading-relaxed text-sm">
                  {feature.desc}
                </p>
              </motion.div>
            ))}
          </div>
       </div>
    </section>
  );
};