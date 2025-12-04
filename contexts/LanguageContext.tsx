import React, { createContext, useContext, useState, ReactNode } from 'react';
import { Language } from '../types';

interface Translations {
  nav: {
    offer: string;
    about: string;
    portfolio: string;
    contact: string;
    quote: string;
    subtitle: string;
  };
  hero: {
    badge: string;
    titleStart: string;
    titleColor: string;
    titleEnd: string;
    desc: string;
    ctaPrimary: string;
    ctaSecondary: string;
    feature1: string;
    feature2: string;
    feature3: string;
    cardTitle: string;
    cardSubtitle: string;
  };
  services: {
    title: string;
    subtitle: string;
    s1_title: string;
    s1_desc: string;
    s2_title: string;
    s2_desc: string;
    s3_title: string;
    s3_desc: string;
    s4_title: string;
    s4_desc: string;
  };
  portfolio: {
    title: string;
    subtitle: string;
    cta: string;
    p1_title: string;
    p1_desc: string;
    p2_title: string;
    p2_desc: string;
    p3_title: string;
    p3_desc: string;
    p4_title: string;
    p4_desc: string;
    p5_title: string;
    p5_desc: string;
    p6_title: string;
    p6_desc: string;
    p7_title: string;
    p7_desc: string;
  };
  why_us: {
    title: string;
    subtitle: string;
    f1_title: string;
    f1_desc: string;
    f2_title: string;
    f2_desc: string;
    f4_title: string;
    f4_desc: string;
  };
  testimonials: {
    title: string;
    subtitle: string;
    google_btn: string;
    no_reviews: string;
  };
  contact: {
    title: string;
    subtitle: string;
    phone: string;
    email: string;
    address: string;
    hours: string;
    hours_wk: string;
    hours_sat: string;
    company_data: string;
    facebook: string;
    // New Direct Contact Keys
    direct_title: string;
    direct_desc: string;
    btn_call: string;
    btn_email: string;
  };
  footer: {
    desc: string;
    services: string;
    contact: string;
    rights: string;
  };
  chat: {
    greeting: string;
    input_placeholder: string;
    title: string;
    subtitle: string;
  };
}

const translations: Record<Language, Translations> = {
  pl: {
    nav: {
      offer: 'Oferta',
      about: 'O nas',
      portfolio: 'Galeria',
      contact: 'Kontakt',
      quote: 'Darmowa Wycena',
      subtitle: 'Systemy Instalacyjne'
    },
    hero: {
      badge: 'Wolne terminy na montaż',
      titleStart: 'Profesjonalny',
      titleColor: 'Montaż',
      titleEnd: 'Instalacji',
      desc: 'Specjalizujemy się wyłącznie w usługach montażowych. Oferujemy montaż wentylacji, rekuperacji, klimatyzacji, chłodnictwa, instalacji kanalizacyjnych oraz prace rozbiórkowe.',
      ctaPrimary: 'Zamów Montaż',
      ctaSecondary: 'Nasze Usługi',
      feature1: 'Fachowy Montaż',
      feature2: 'Szybka Realizacja',
      feature3: 'Doświadczenie',
      cardTitle: 'Specjalizacja',
      cardSubtitle: 'Tylko Montaż'
    },
    services: {
      title: 'Nasze Specjalizacje',
      subtitle: 'Specjalizujemy się wyłącznie w profesjonalnym montażu. Gwarantujemy najwyższą jakość wykonania prac.',
      s1_title: 'Wentylacja i Rekuperacja',
      s1_desc: 'Profesjonalny montaż systemów wentylacji mechanicznej i rekuperacji. Świeże powietrze i oszczędność energii.',
      s2_title: 'Klimatyzacja i Chłodnictwo',
      s2_desc: 'Montaż instalacji klimatyzacyjnych oraz systemów chłodniczych. Precyzyjna kontrola temperatury.',
      s3_title: 'Instalacje Kanalizacyjne',
      s3_desc: 'Kompleksowe wykonawstwo wewnętrznych i zewnętrznych instalacji kanalizacyjnych.',
      s4_title: 'Rozbiórki i Demontaż',
      s4_desc: 'Profesjonalne prace rozbiórkowe i demontaż instalacji oraz konstrukcji budowlanych.'
    },
    portfolio: {
      title: 'Galeria Realizacji',
      subtitle: 'Zobacz zdjęcia z naszych montaży i instalacji',
      cta: 'Zamów realizację →',
      p1_title: 'Dom Jednorodzinny',
      p1_desc: 'Kompleksowa rekuperacja',
      p2_title: 'Biuro Kraków',
      p2_desc: 'System VRF 12 jednostek',
      p3_title: 'Apartament Modern',
      p3_desc: 'Klimatyzacja kanałowa',
      p4_title: 'Hala Magazynowa',
      p4_desc: 'Wentylacja przemysłowa',
      p5_title: 'Garaż Podziemny',
      p5_desc: 'System oddymiania',
      p6_title: 'Pompa Ciepła',
      p6_desc: 'Montaż jednostki zewnętrznej',
      p7_title: 'Instalacja Spiro',
      p7_desc: 'Montaż kanałów wentylacyjnych'
    },
    why_us: {
      title: 'Dlaczego My?',
      subtitle: 'Stawiamy na jakość, terminowość i kulturę pracy.',
      f1_title: 'Terminowość',
      f1_desc: 'Szanujemy Twój czas. Zawsze dotrzymujemy ustalonych terminów realizacji prac.',
      f2_title: 'Czystość i Porządek',
      f2_desc: 'Zabezpieczamy miejsce pracy i zostawiamy po sobie idealny porządek.',
      f4_title: 'Gwarancja Jakości',
      f4_desc: 'Udzielamy gwarancji na nasze montaże. Jesteśmy pewni naszej pracy.'
    },
    testimonials: {
      title: 'Opinie Klientów',
      subtitle: 'Sprawdź co mówią o nas klienci na Google',
      google_btn: 'Zobacz opinie na Google Maps',
      no_reviews: 'Jesteśmy nowi na Google Maps. Bądź pierwszym, który wystawi opinię!'
    },
    contact: {
      title: 'Skontaktuj się z nami',
      subtitle: 'Specjalizujemy się w montażu. Zadzwoń lub napisz, aby otrzymać wycenę.',
      phone: 'Telefon',
      email: 'Email',
      address: 'Adres',
      hours: 'Godziny pracy',
      hours_wk: 'Pn-Pt: 8:00 - 18:00',
      hours_sat: 'Sob: 9:00 - 14:00',
      company_data: 'Dane firmowe',
      facebook: 'Facebook',
      direct_title: 'Szybka Wycena',
      direct_desc: 'Wolisz konkretną rozmowę zamiast formularzy? Zadzwoń do nas bezpośrednio lub wyślij wiadomość e-mail.',
      btn_call: 'Zadzwoń: +48 660 321 872',
      btn_email: 'Napisz e-mail'
    },
    footer: {
      desc: 'Profesjonalny montaż wentylacji, klimatyzacji oraz instalacji kanalizacyjnych. Szybkie terminy i gwarancja jakości.',
      services: 'Usługi',
      contact: 'Kontakt',
      rights: 'Wszelkie prawa zastrzeżone.',
    },
    chat: {
      greeting: 'Dzień dobry! Tu asystent Vit-Went. W czym mogę pomóc? Wykonujemy montaże wentylacji, klimatyzacji oraz prace rozbiórkowe.',
      input_placeholder: 'Zapytaj o wycenę...',
      title: 'Asystent Vit-Went',
      subtitle: 'Szybka pomoc online'
    }
  },
  en: {
    nav: {
      offer: 'Services',
      about: 'About Us',
      portfolio: 'Gallery',
      contact: 'Contact',
      quote: 'Free Quote',
      subtitle: 'Installation Systems'
    },
    hero: {
      badge: 'Available dates for installation',
      titleStart: 'Professional',
      titleColor: 'Installation',
      titleEnd: 'Services',
      desc: 'We specialize exclusively in installation services. We offer installation of ventilation, recuperation, air conditioning, refrigeration, sewage systems, and demolition works.',
      ctaPrimary: 'Book Installation',
      ctaSecondary: 'Our Services',
      feature1: 'Expert Installation',
      feature2: 'Fast Execution',
      feature3: 'Experience',
      cardTitle: 'Specialization',
      cardSubtitle: 'Installation Only'
    },
    services: {
      title: 'Our Specializations',
      subtitle: 'We specialize exclusively in professional installation. We guarantee the highest quality of work.',
      s1_title: 'Ventilation & Recuperation',
      s1_desc: 'Professional installation of mechanical ventilation and recuperation systems. Fresh air and energy savings.',
      s2_title: 'AC & Refrigeration',
      s2_desc: 'Installation of air conditioning systems and refrigeration units. Precise temperature control.',
      s3_title: 'Sewage Systems',
      s3_desc: 'Comprehensive execution of internal and external sewage systems.',
      s4_title: 'Demolition & Dismantling',
      s4_desc: 'Professional demolition works and dismantling of installations and building structures.'
    },
    portfolio: {
      title: 'Project Gallery',
      subtitle: 'See photos from our installations',
      cta: 'Order installation →',
      p1_title: 'Single Family House',
      p1_desc: 'Comprehensive recuperation',
      p2_title: 'Office Krakow',
      p2_desc: 'VRF System 12 units',
      p3_title: 'Modern Apartment',
      p3_desc: 'Ducted air conditioning',
      p4_title: 'Warehouse',
      p4_desc: 'Industrial ventilation',
      p5_title: 'Underground Garage',
      p5_desc: 'Smoke extraction system',
      p6_title: 'Heat Pump',
      p6_desc: 'External unit installation',
      p7_title: 'Spiro Installation',
      p7_desc: 'Ventilation duct assembly'
    },
    why_us: {
      title: 'Why Choose Us?',
      subtitle: 'We focus on quality, punctuality, and work culture.',
      f1_title: 'Punctuality',
      f1_desc: 'We respect your time. We always meet agreed deadlines.',
      f2_title: 'Cleanliness',
      f2_desc: 'We protect the workspace and leave it perfectly clean.',
      f4_title: 'Quality Warranty',
      f4_desc: 'We provide a full warranty on our installations. We are confident in our work.'
    },
    testimonials: {
      title: 'Client Reviews',
      subtitle: 'Check what customers say about us on Google',
      google_btn: 'See reviews on Google Maps',
      no_reviews: 'We are new on Google Maps. Be the first to leave a review!'
    },
    contact: {
      title: 'Contact Us',
      subtitle: 'We specialize in installation. Call or write to get a quote.',
      phone: 'Phone',
      email: 'Email',
      address: 'Address',
      hours: 'Working Hours',
      hours_wk: 'Mon-Fri: 8:00 - 18:00',
      hours_sat: 'Sat: 9:00 - 14:00',
      company_data: 'Company Data',
      facebook: 'Facebook',
      direct_title: 'Quick Quote',
      direct_desc: 'Prefer direct conversation over forms? Call us directly or send an email.',
      btn_call: 'Call: +48 660 321 872',
      btn_email: 'Send Email'
    },
    footer: {
      desc: 'Professional installation of ventilation, air conditioning, and sewage systems. Fast deadlines and quality guarantee.',
      services: 'Services',
      contact: 'Contact',
      rights: 'All rights reserved.'
    },
    chat: {
      greeting: 'Hello! This is the Vit-Went assistant. How can I help you? We perform installations of ventilation, air conditioning, and demolition works.',
      input_placeholder: 'Ask for a quote...',
      title: 'Vit-Went Assistant',
      subtitle: 'Fast online help'
    }
  },
  ua: {
    nav: {
      offer: 'Послуги',
      about: 'Про нас',
      portfolio: 'Галерея',
      contact: 'Контакти',
      quote: 'Безкоштовна Оцінка',
      subtitle: 'Інсталяційні Системи'
    },
    hero: {
      badge: 'Вільні дати для монтажу',
      titleStart: 'Професійний',
      titleColor: 'Монтаж',
      titleEnd: 'Систем',
      desc: 'Ми спеціалізуємося виключно на монтажних послугах. Пропонуємо монтаж вентиляції, рекуперації, кондиціонування, холодильних установок, каналізації та демонтажні роботи.',
      ctaPrimary: 'Замовити Монтаж',
      ctaSecondary: 'Наші Послуги',
      feature1: 'Професійний Монтаж',
      feature2: 'Швидка Реалізація',
      feature3: 'Досвід',
      cardTitle: 'Спеціалізація',
      cardSubtitle: 'Тільки Монтаж'
    },
    services: {
      title: 'Наші Спеціалізації',
      subtitle: 'Ми спеціалізуємося виключно на професійному монтажі. Гарантуємо найвищу якість виконання робіт.',
      s1_title: 'Вентиляція та Рекуперація',
      s1_desc: 'Професійний монтаж систем механічної вентиляції та рекуперації. Свіже повітря та енергозбереження.',
      s2_title: 'Кондиціонування та Холод',
      s2_desc: 'Монтаж систем кондиціонування та холодильних установок. Точний контроль температури.',
      s3_title: 'Каналізаційні Системи',
      s3_desc: 'Комплексне виконання внутрішніх та зовнішніх каналізаційних систем.',
      s4_title: 'Знесення та Демонтаж',
      s4_desc: 'Професійні роботи зі знесення та демонтажу установок і будівельних конструкцій.'
    },
    portfolio: {
      title: 'Галерея Робіт',
      subtitle: 'Подивіться фото наших монтажів',
      cta: 'Замовити реалізацію →',
      p1_title: 'Приватний Будинок',
      p1_desc: 'Комплексна рекуперація',
      p2_title: 'Офіс Краків',
      p2_desc: 'Система VRF 12 блоків',
      p3_title: 'Апартаменти Modern',
      p3_desc: 'Канальний кондиціонер',
      p4_title: 'Склад',
      p4_desc: 'Промислова вентиляція',
      p5_title: 'Підземний Гараж',
      p5_desc: 'Система димовидалення',
      p6_title: 'Тепловий Насос',
      p6_desc: 'Монтаж зовнішнього блоку',
      p7_title: 'Монтаж Спіро',
      p7_desc: 'Установка вентиляційних каналів'
    },
    why_us: {
      title: 'Чому обирають нас?',
      subtitle: 'Ми ставимо на якість, пунктуальність та культуру праці.',
      f1_title: 'Пунктуальність',
      f1_desc: 'Ми цінуємо ваш час. Завжди дотримуємося домовлених термінів.',
      f2_title: 'Чистота і Порядок',
      f2_desc: 'Ми захищаємо робоче місце і залишаємо після себе ідеальний порядок.',
      f4_title: 'Гарантія Якості',
      f4_desc: 'Ми надаємо гарантію на наші монтажі. Ми впевнені у своїй роботі.'
    },
    testimonials: {
      title: 'Відгуки Клієнтів',
      subtitle: 'Перевірте, що кажуть про нас клієнти в Google',
      google_btn: 'Переглянути відгуки на Google Maps',
      no_reviews: 'Ми нові на Google Maps. Будьте першими, хто залишить відгук!'
    },
    contact: {
      title: 'Зв\'яжіться з нами',
      subtitle: 'Ми спеціалізуємося на монтажі. Зателефонуйте або напишіть, щоб отримати оцінку.',
      phone: 'Телефон',
      email: 'Email',
      address: 'Адреса',
      hours: 'Години роботи',
      hours_wk: 'Пн-Пт: 8:00 - 18:00',
      hours_sat: 'Сб: 9:00 - 14:00',
      company_data: 'Дані компанії',
      facebook: 'Facebook',
      direct_title: 'Швидка Оцінка',
      direct_desc: 'Віддаєте перевагу прямій розмові? Зателефонуйте нам або надішліть емейл.',
      btn_call: 'Телефонуйте: +48 660 321 872',
      btn_email: 'Написати E-mail'
    },
    footer: {
      desc: 'Професійний монтаж вентиляції, кондиціонування та каналізаційних систем. Швидкі терміни та гарантія якості.',
      services: 'Послуги',
      contact: 'Контакти',
      rights: 'Всі права захищені.'
    },
    chat: {
      greeting: 'Доброго дня! Це асистент Vit-Went. Чим можу допомогти? Ми виконуємо монтаж вентиляції, кондиціонування та демонтажні роботи.',
      input_placeholder: 'Запитайте про оцінку...',
      title: 'Асистент Vit-Went',
      subtitle: 'Швидка допомога онлайн'
    }
  },
  de: {
    nav: {
      offer: 'Angebot',
      about: 'Über uns',
      portfolio: 'Galerie',
      contact: 'Kontakt',
      quote: 'Kostenloses Angebot',
      subtitle: 'Installationssysteme'
    },
    hero: {
      badge: 'Freie Termine für Montage',
      titleStart: 'Professionelle',
      titleColor: 'Montage',
      titleEnd: 'Systeme',
      desc: 'Wir sind ausschließlich auf Montagedienstleistungen spezialisiert. Wir bieten die Montage von Lüftungs-, Rekuperations-, Klima-, Kälte-, Abwasseranlagen sowie Abbrucharbeiten an.',
      ctaPrimary: 'Montage Bestellen',
      ctaSecondary: 'Unsere Dienstleistungen',
      feature1: 'Fachgerechte Montage',
      feature2: 'Schnelle Umsetzung',
      feature3: 'Erfahrung',
      cardTitle: 'Spezialisierung',
      cardSubtitle: 'Nur Montage'
    },
    services: {
      title: 'Unsere Spezialisierungen',
      subtitle: 'Wir spezialisieren uns ausschließlich auf professionelle Montage. Wir garantieren höchste Ausführungsqualität.',
      s1_title: 'Lüftung & Rekuperation',
      s1_desc: 'Professionelle Montage von mechanischen Lüftungs- und Rekuperationssystemen. Frische Luft und Energieeinsparung.',
      s2_title: 'Klima & Kältetechnik',
      s2_desc: 'Montage von Klimaanlagen und Kühlsystemen. Präzise Temperaturregelung.',
      s3_title: 'Abwasserinstallationen',
      s3_desc: 'Komplexe Ausführung von internen und externen Abwassersystemen.',
      s4_title: 'Abbruch & Demontage',
      s4_desc: 'Professionelle Abbruch- und Demontagearbeiten von Anlagen und Baukonstruktionen.'
    },
    portfolio: {
      title: 'Projektgalerie',
      subtitle: 'Sehen Sie Fotos von unseren Montagen',
      cta: 'Montage bestellen →',
      p1_title: 'Einfamilienhaus',
      p1_desc: 'Komplexe Rekuperation',
      p2_title: 'Büro Krakau',
      p2_desc: 'VRF-System 12 Einheiten',
      p3_title: 'Modernes Apartment',
      p3_desc: 'Kanal-Klimaanlage',
      p4_title: 'Lagerhalle',
      p4_desc: 'Industrielüftung',
      p5_title: 'Tiefgarage',
      p5_desc: 'Rauchabzugssystem',
      p6_title: 'Wärmepumpe',
      p6_desc: 'Montage der Außeneinheit',
      p7_title: 'Spiro-Installation',
      p7_desc: 'Montage von Lüftungskanälen'
    },
    why_us: {
      title: 'Warum Wir?',
      subtitle: 'Wir setzen auf Qualität, Pünktlichkeit und Arbeitskultur.',
      f1_title: 'Pünktlichkeit',
      f1_desc: 'Wir respektieren Ihre Zeit. Wir halten uns immer an die vereinbarten Termine.',
      f2_title: 'Sauberkeit',
      f2_desc: 'Wir schützen den Arbeitsplatz und hinterlassen ihn perfekt sauber.',
      f4_title: 'Qualitätsgarantie',
      f4_desc: 'Wir geben Garantie auf unsere Montagen. Wir sind von unserer Arbeit überzeugt.'
    },
    testimonials: {
      title: 'Kundenbewertungen',
      subtitle: 'Prüfen Sie, was Kunden über uns auf Google sagen',
      google_btn: 'Bewertungen auf Google Maps ansehen',
      no_reviews: 'Wir sind neu auf Google Maps. Seien Sie der Erste, der eine Bewertung abgibt!'
    },
    contact: {
      title: 'Kontaktieren Sie uns',
      subtitle: 'Wir spezialisieren uns auf Montage. Rufen Sie an oder schreiben Sie uns für ein Angebot.',
      phone: 'Telefon',
      email: 'E-Mail',
      address: 'Adresse',
      hours: 'Öffnungszeiten',
      hours_wk: 'Mo-Fr: 8:00 - 18:00',
      hours_sat: 'Sa: 9:00 - 14:00',
      company_data: 'Firmendaten',
      facebook: 'Facebook',
      direct_title: 'Schnelles Angebot',
      direct_desc: 'Bevorzugen Sie direkten Kontakt statt Formulare? Rufen Sie uns an oder schreiben Sie eine E-Mail.',
      btn_call: 'Anrufen: +48 660 321 872',
      btn_email: 'E-Mail senden'
    },
    footer: {
      desc: 'Professionelle Montage von Lüftungs-, Klima- und Abwasseranlagen. Schnelle Termine und Qualitätsgarantie.',
      services: 'Dienstleistungen',
      contact: 'Kontakt',
      rights: 'Alle Rechte vorbehalten.'
    },
    chat: {
      greeting: 'Guten Tag! Hier ist der Vit-Went Assistent. Wie kann ich helfen? Wir führen Montage von Lüftung, Klima und Abbrucharbeiten durch.',
      input_placeholder: 'Nach Angebot fragen...',
      title: 'Vit-Went Assistent',
      subtitle: 'Schnelle Online-Hilfe'
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
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};