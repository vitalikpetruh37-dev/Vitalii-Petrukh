import React from 'react';
import { Thermometer, Fan, RefreshCcw, Pickaxe, Droplets } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export const Services: React.FC = () => {
  const { t } = useLanguage();

  const services = [
    {
      icon: <RefreshCcw className="w-8 h-8" />,
      title: t.services.items.recuperation.title,
      desc: t.services.items.recuperation.desc,
      color: "text-cyan-400"
    },
    {
      icon: <Thermometer className="w-8 h-8" />,
      title: t.services.items.ac.title,
      desc: t.services.items.ac.desc,
      color: "text-blue-400"
    },
    {
      icon: <Droplets className="w-8 h-8" />,
      title: t.services.items.sewage.title,
      desc: t.services.items.sewage.desc,
      color: "text-teal-400"
    },
    {
      icon: <Pickaxe className="w-8 h-8" />,
      title: t.services.items.demolition.title,
      desc: t.services.items.demolition.desc,
      color: "text-orange-400"
    },
  ];

  return (
    <section id="services" className="py-24 relative scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6">{t.services.title}</h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            {t.services.desc}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div key={index} className="group p-10 bg-white/5 rounded-3xl border border-white/5 hover:border-white/20 hover:bg-white/10 transition-all duration-300 backdrop-blur-md relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-white/5 to-transparent rounded-bl-full -mr-10 -mt-10 transition-transform group-hover:scale-150 duration-500"></div>
              
              <div className={`mb-8 bg-slate-900/50 w-20 h-20 rounded-2xl flex items-center justify-center shadow-inner border border-white/5 ${service.color} group-hover:scale-110 transition-transform`}>
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
              <p className="text-slate-400 leading-relaxed text-lg">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};