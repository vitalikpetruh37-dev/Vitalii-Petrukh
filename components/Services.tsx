import React from 'react';
import { Thermometer, Hammer, Droplets, Fan } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { motion } from 'framer-motion';

export const Services: React.FC = () => {
  const { t } = useLanguage();

  const services = [
    {
      icon: <Fan className="w-8 h-8 text-blue-600 group-hover:text-white transition-colors duration-300" />,
      title: t.services.s1_title,
      desc: t.services.s1_desc,
    },
    {
      icon: <Thermometer className="w-8 h-8 text-blue-600 group-hover:text-white transition-colors duration-300" />,
      title: t.services.s2_title,
      desc: t.services.s2_desc,
    },
    {
      icon: <Droplets className="w-8 h-8 text-blue-600 group-hover:text-white transition-colors duration-300" />,
      title: t.services.s3_title,
      desc: t.services.s3_desc,
    },
    {
      icon: <Hammer className="w-8 h-8 text-blue-600 group-hover:text-white transition-colors duration-300" />,
      title: t.services.s4_title,
      desc: t.services.s4_desc,
    },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 50 },
    show: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        type: "spring", 
        stiffness: 50,
        damping: 20
      } 
    }
  };

  return (
    <section id="services" className="py-24 bg-white scroll-mt-24 relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-slate-50 -skew-x-12 translate-x-1/4 -z-0 pointer-events-none opacity-70" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-black mb-4">{t.services.title}</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            {t.services.subtitle}
          </p>
        </motion.div>

        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {services.map((service, index) => (
            <motion.div 
              key={index} 
              variants={item}
              whileHover={{ 
                scale: 1.03, 
                y: -5,
                transition: { duration: 0.2 }
              }}
              className="group p-8 bg-white rounded-2xl border border-slate-200 shadow-lg relative overflow-hidden hover:shadow-2xl transition-shadow duration-300"
            >
              {/* Top gradient line animation */}
              <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-blue-600 to-cyan-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left ease-out" />
              
              <div className="mb-6 bg-blue-50 w-16 h-16 rounded-xl flex items-center justify-center group-hover:bg-blue-600 transition-colors duration-300 shadow-sm group-hover:shadow-blue-500/30">
                 {service.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-700 transition-colors">{service.title}</h3>
              <p className="text-slate-600 leading-relaxed group-hover:text-slate-800">{service.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};