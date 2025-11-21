import React, { createContext, useContext, useState, ReactNode } from 'react';
import { Language, Translations } from '../types';

const translations: Record<Language, Translations> = {
  pl: {
    nav: {
      offer: 'Oferta',
      about: 'O nas',
      portfolio: 'Realizacje',
      contact: 'Kontakt',
      quote: 'Darmowa Wycena',
    },
    hero: {
      badge: 'Dostępne terminy na 2024',
      title: 'Oddychaj',
      titleAccent: 'Zdrowym Powietrzem',
      desc: 'Specjalizujemy się wyłącznie w profesjonalnym montażu systemów wentylacji, rekuperacji, klimatyzacji oraz instalacji kanalizacyjnych. Wykonujemy również prace rozbiórkowe.',
      ctaPrimary: 'Darmowa Konsultacja',
      ctaSecondary: 'Zobacz Ofertę',
      features: {
        warranty: 'Gwarancja na Montaż',
        energy: 'Energooszczędność',
        quiet: 'Cichy System',
      }
    },
    services: {
      title: 'Nasze Specjalizacje',
      desc: 'Oferujemy kompleksowe usługi montażowe i instalacyjne najwyższej jakości.',
      items: {
        recuperation: {
          title: 'Wentylacja i Rekuperacja',
          desc: 'Nowoczesne systemy wymiany powietrza z odzyskiem ciepła dla domu i biura.',
        },
        ac: {
          title: 'Klimatyzacja i Chłodnictwo',
          desc: 'Montaż wydajnych systemów chłodzących. Komfort termiczny przez cały rok.',
        },
        sewage: {
          title: 'Instalacje Kanalizacyjne',
          desc: 'Profesjonalne wykonawstwo instalacji wodno-kanalizacyjnych.',
        },
        demolition: {
          title: 'Rozbiórki i Demontaż',
          desc: 'Bezpieczne prace rozbiórkowe i demontaż starych instalacji.',
        },
      }
    },
    portfolio: {
      title: 'Wybrane Realizacje',
      subtitle: 'Zobacz efekty naszej pracy',
      more: 'Zobacz więcej',
    },
    contact: {
      title: 'Skontaktuj się z nami',
      desc: 'Masz pytania? Potrzebujesz wyceny? Jesteśmy do dyspozycji.',
      call: 'Zadzwoń',
      email: 'Email',
      address: 'Siedziba',
      nip: 'NIP',
      hours: 'Godziny Otwarcia',
      form: {
        name: 'Imię i Nazwisko',
        phone: 'Telefon',
        subject: 'Temat',
        message: 'Wiadomość',
        send: 'Wyślij Wiadomość',
        success: 'Wiadomość wysłana!',
        successDesc: 'Skontaktujemy się wkrótce.',
      }
    },
    footer: {
      desc: 'Lider instalacji HVAC, sanitarnych i prac demontażowych.',
      offer: 'Oferta',
      company: 'Firma',
      rights: 'Wszelkie prawa zastrzeżone.',
    }
  },
  en: {
    nav: {
      offer: 'Services',
      about: 'About Us',
      portfolio: 'Portfolio',
      contact: 'Contact',
      quote: 'Get Quote',
    },
    hero: {
      badge: 'Available dates for 2024',
      title: 'Breathe',
      titleAccent: 'Healthy Air',
      desc: 'We specialize exclusively in professional installation of ventilation, recuperation, air conditioning, and sewage systems. We also perform demolition works.',
      ctaPrimary: 'Free Consultation',
      ctaSecondary: 'View Services',
      features: {
        warranty: 'Installation Warranty',
        energy: 'Energy Saving',
        quiet: 'Quiet System',
      }
    },
    services: {
      title: 'Our Specializations',
      desc: 'We offer comprehensive assembly and installation services of the highest quality.',
      items: {
        recuperation: {
          title: 'Ventilation & Recuperation',
          desc: 'Modern air exchange systems with heat recovery for home and office.',
        },
        ac: {
          title: 'AC & Refrigeration',
          desc: 'Installation of efficient cooling systems. Thermal comfort all year round.',
        },
        sewage: {
          title: 'Sewage Installations',
          desc: 'Professional execution of water and sewage installations.',
        },
        demolition: {
          title: 'Demolition & Dismantling',
          desc: 'Safe demolition works and dismantling of old installations.',
        },
      }
    },
    portfolio: {
      title: 'Selected Projects',
      subtitle: 'See the results of our work',
      more: 'See more',
    },
    contact: {
      title: 'Contact Us',
      desc: 'Have questions? Need a quote? We are at your disposal.',
      call: 'Call Now',
      email: 'Email',
      address: 'Location',
      nip: 'Tax ID',
      hours: 'Opening Hours',
      form: {
        name: 'Full Name',
        phone: 'Phone',
        subject: 'Subject',
        message: 'Message',
        send: 'Send Message',
        success: 'Message Sent!',
        successDesc: 'We will contact you soon.',
      }
    },
    footer: {
      desc: 'Leader in HVAC, sanitary installations, and demolition works.',
      offer: 'Offer',
      company: 'Company',
      rights: 'All rights reserved.',
    }
  },
  ua: {
    nav: {
      offer: 'Послуги',
      about: 'Про нас',
      portfolio: 'Проекти',
      contact: 'Контакт',
      quote: 'Оцінка',
    },
    hero: {
      badge: 'Вільні терміни на 2024',
      title: 'Дихайте',
      titleAccent: 'Здоровим Повітрям',
      desc: 'Ми спеціалізуємося виключно на професійному монтажі систем вентиляції, рекуперації, кондиціонування та каналізації. Також виконуємо демонтажні роботи.',
      ctaPrimary: 'Безкоштовна Консультація',
      ctaSecondary: 'Дивитись Пропозицію',
      features: {
        warranty: 'Гарантія на Монтаж',
        energy: 'Енергозбереження',
        quiet: 'Тиха Система',
      }
    },
    services: {
      title: 'Наші Спеціалізації',
      desc: 'Пропонуємо комплексні послуги з монтажу та встановлення найвищої якості.',
      items: {
        recuperation: {
          title: 'Вентиляція та Рекуперація',
          desc: 'Сучасні системи повітрообміну з рекуперацією тепла для дому та офісу.',
        },
        ac: {
          title: 'Кондиціонування та Холод',
          desc: 'Монтаж ефективних систем охолодження. Тепловий комфорт цілий рік.',
        },
        sewage: {
          title: 'Каналізаційні Системи',
          desc: 'Професійне виконання водопровідних та каналізаційних установок.',
        },
        demolition: {
          title: 'Розбірка та Демонтаж',
          desc: 'Безпечні демонтажні роботи та демонтаж старих установок.',
        },
      }
    },
    portfolio: {
      title: 'Обрані Проекти',
      subtitle: 'Подивіться результати нашої роботи',
      more: 'Дивитись більше',
    },
    contact: {
      title: 'Зв\'яжіться з нами',
      desc: 'Є питання? Потрібна оцінка? Ми до ваших послуг.',
      call: 'Зателефонувати',
      email: 'Email',
      address: 'Адреса',
      nip: 'ІПН',
      hours: 'Години роботи',
      form: {
        name: 'Ім\'я та Прізвище',
        phone: 'Телефон',
        subject: 'Тема',
        message: 'Повідомлення',
        send: 'Надіслати',
        success: 'Повідомлення надіслано!',
        successDesc: 'Ми зв\'яжемося з вами найближчим часом.',
      }
    },
    footer: {
      desc: 'Лідер у галузі HVAC, санітарних установок та демонтажних робіт.',
      offer: 'Пропозиція',
      company: 'Компанія',
      rights: 'Всі права захищені.',
    }
  }
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: Translations;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('pl');

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t: translations[language] }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};