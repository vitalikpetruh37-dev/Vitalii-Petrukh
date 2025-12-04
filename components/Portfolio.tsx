import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ZoomIn } from 'lucide-react';

export const Portfolio: React.FC = () => {
  const { t } = useLanguage();
  const [selectedId, setSelectedId] = useState<number | null>(null);

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const offset = 100; 
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  /* 
     HOW TO ADD YOUR OWN PHOTOS:
     1. Create a folder named 'gallery' in your public/root folder.
     2. Name your images '1.jpg', '2.jpg', '3.jpg', etc.
     3. The code below looks for 'gallery/X.jpg'. If not found, it shows the Unsplash fallback.
  */

  const projects = [
    { 
      id: 1, 
      title: t.portfolio.p1_title, 
      desc: t.portfolio.p1_desc, 
      img: 'gallery/1.jpg',
      fallback: 'https://images.unsplash.com/photo-1513828583688-601bf7506915?q=80&w=1200&auto=format&fit=crop' 
    },
    { 
      id: 2, 
      title: t.portfolio.p2_title, 
      desc: t.portfolio.p2_desc, 
      img: 'gallery/2.jpg',
      fallback: 'https://images.unsplash.com/photo-1558435186-d32d797a8c95?q=80&w=1200&auto=format&fit=crop' 
    },
    { 
      id: 3, 
      title: t.portfolio.p3_title, 
      desc: t.portfolio.p3_desc, 
      img: 'gallery/3.jpg',
      fallback: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=1200&auto=format&fit=crop' 
    },
    { 
      id: 4, 
      title: t.portfolio.p4_title, 
      desc: t.portfolio.p4_desc, 
      img: 'gallery/4.jpg',
      fallback: 'https://images.unsplash.com/photo-1581094794329-cd280db69a68?q=80&w=1200&auto=format&fit=crop' 
    },
    { 
      id: 5, 
      title: t.portfolio.p5_title, 
      desc: t.portfolio.p5_desc, 
      img: 'gallery/5.jpg',
      fallback: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=1200&auto=format&fit=crop' 
    },
    { 
      id: 6, 
      title: t.portfolio.p6_title, 
      desc: t.portfolio.p6_desc, 
      img: 'gallery/6.jpg',
      fallback: 'https://images.unsplash.com/photo-1581092335397-9583eb92d232?q=80&w=1200&auto=format&fit=crop' 
    },
    { 
      id: 7, 
      title: t.portfolio.p7_title, 
      desc: t.portfolio.p7_desc, 
      img: 'gallery/7.jpg',
      fallback: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1200&auto=format&fit=crop'
    },
  ];

  const selectedProject = projects.find(p => p.id === selectedId);

  return (
    <section id="portfolio" className="py-20 bg-slate-50 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div>
            <h2 className="text-3xl font-bold text-slate-900 mb-2">{t.portfolio.title}</h2>
            <p className="text-slate-600">{t.portfolio.subtitle}</p>
          </div>
          <a 
            href="#contact" 
            onClick={(e) => handleScrollTo(e, 'contact')}
            className="hidden md:block text-blue-600 font-medium hover:text-blue-700 transition-colors mt-4 md:mt-0 cursor-pointer"
          >
            {t.portfolio.cta}
          </a>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p) => (
            <motion.div 
              key={p.id}
              layoutId={`card-${p.id}`}
              onClick={() => setSelectedId(p.id)}
              className="group relative h-72 rounded-2xl overflow-hidden cursor-zoom-in shadow-md hover:shadow-xl transition-shadow"
              whileHover={{ y: -4 }}
            >
              <img 
                src={p.img} 
                onError={(e) => {
                    // If local file (gallery/1.jpg) fails, load fallback URL
                    if (e.currentTarget.src !== p.fallback) {
                        e.currentTarget.src = p.fallback;
                    }
                }}
                alt={p.title} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                 <div className="bg-white/20 backdrop-blur-sm p-3 rounded-full text-white">
                    <ZoomIn size={32} />
                 </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                 <h3 className="text-white font-bold text-lg translate-y-4 group-hover:translate-y-0 transition-transform duration-300">{p.title}</h3>
                 <p className="text-slate-300 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-75">{p.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-8 md:hidden text-center">
           <a 
             href="#contact" 
             onClick={(e) => handleScrollTo(e, 'contact')}
             className="inline-block text-blue-600 font-medium hover:text-blue-700 transition-colors cursor-pointer"
           >
            {t.portfolio.cta}
          </a>
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedId && selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[10000] flex items-center justify-center bg-black/90 backdrop-blur-md p-4"
            onClick={() => setSelectedId(null)}
          >
            <motion.div
              layoutId={`card-${selectedId}`}
              className="relative max-w-5xl w-full max-h-[90vh] rounded-xl overflow-hidden shadow-2xl bg-black"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedId(null)}
                className="absolute top-4 right-4 z-50 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full backdrop-blur-sm transition-colors cursor-pointer"
              >
                <X size={24} />
              </button>
              
              <img 
                src={selectedProject.img} 
                onError={(e) => {
                    if (e.currentTarget.src !== selectedProject.fallback) {
                        e.currentTarget.src = selectedProject.fallback;
                    }
                }}
                alt={selectedProject.title} 
                className="w-full h-full max-h-[85vh] object-contain"
              />
              
              <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black via-black/80 to-transparent">
                <h3 className="text-2xl font-bold text-white mb-2">{selectedProject.title}</h3>
                <p className="text-slate-300 text-lg">{selectedProject.desc}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};