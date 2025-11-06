import React, { createContext, useContext, useState, useEffect } from 'react';

type Language = 'en' | 'ar' | 'ru';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
  dir: 'ltr' | 'rtl';
}

const translations = {
  en: {
    // Navigation
    'nav.about': 'About',
    'nav.vision': 'Vision & Mission',
    'nav.portfolio': 'Portfolio',
    'nav.history': 'History',
    'nav.contact': 'Contact',
    
    // Hero
    'hero.title': 'MERIT Business',
    'hero.subtitle': 'Strategic Partnerships for Global Excellence',
    'hero.cta': 'Contact Us',
    'hero.scroll': 'Scroll to Explore',
    
    // About
    'about.title': 'Welcome',
    'about.intro': 'Welcome to Merit Business webpage. I am Ali Alfaddaghi, founder and owner of the company. In this introduction, I will share some of my achievements and brief history about my business journey.',
    'about.founder': 'Founder & Chairman',
    
    // Vision & Mission
    'vision.title': 'Our Vision',
    'vision.content': 'We at Merit believe in diversity, excellence and endurance. We strive to be a global partner for cutting-edge products and services.',
    'mission.title': 'Our Mission',
    'mission.content': 'To realize the vision, we are focusing on strategic partnerships, teaming up with professionals in their respective fields and creating the most value for all stakeholders.',
    
    // Portfolio
    'portfolio.title': 'Our Companies',
    'portfolio.subtitle': 'Strategic investments and partnerships across multiple sectors',
    
    // History
    'history.title': 'Our Journey',
    'history.subtitle': 'Milestones of Growth and Excellence',
    
    // Contact
    'contact.title': 'Get in Touch',
    'contact.subtitle': 'Let\'s discuss how we can create value together',
    'contact.name': 'Your Name',
    'contact.email': 'Your Email',
    'contact.message': 'Your Message',
    'contact.send': 'Send Message',
    'contact.address': 'Address',
    'contact.location': '7991-Alryan, Riyadh 14211, Kingdom of Saudi Arabia',
    
    // Footer
    'footer.rights': '© 2025 MERIT Business. All rights reserved.',
    'footer.tagline': 'Excellence in Strategic Partnerships',
  },
  ar: {
    // Navigation
    'nav.about': 'عن الشركة',
    'nav.vision': 'الرؤية والرسالة',
    'nav.portfolio': 'محفظة الأعمال',
    'nav.history': 'تاريخنا',
    'nav.contact': 'اتصل بنا',
    
    // Hero
    'hero.title': 'ميريت للأعمال',
    'hero.subtitle': 'شراكات استراتيجية للتميز العالمي',
    'hero.cta': 'اتصل بنا',
    'hero.scroll': 'استكشف المزيد',
    
    // About
    'about.title': 'مرحباً بكم',
    'about.intro': 'مرحباً بكم في موقع شركة ميريت للأعمال. أنا علي الفضاغي، مؤسس ومالك الشركة. في هذه المقدمة، سأشارككم بعض إنجازاتي ونبذة موجزة عن رحلتي في عالم الأعمال.',
    'about.founder': 'المؤسس ورئيس مجلس الإدارة',
    
    // Vision & Mission
    'vision.title': 'رؤيتنا',
    'vision.content': 'نحن في ميريت نؤمن بالتنوع والتميز والاستدامة. نسعى لأن نكون شريكاً عالمياً للمنتجات والخدمات المتطورة.',
    'mission.title': 'رسالتنا',
    'mission.content': 'لتحقيق الرؤية، نركز على الشراكات الاستراتيجية والتعاون مع المحترفين في مجالاتهم وخلق أقصى قيمة لجميع أصحاب المصلحة.',
    
    // Portfolio
    'portfolio.title': 'شركاتنا',
    'portfolio.subtitle': 'استثمارات وشراكات استراتيجية في قطاعات متعددة',
    
    // History
    'history.title': 'رحلتنا',
    'history.subtitle': 'معالم النمو والتميز',
    
    // Contact
    'contact.title': 'تواصل معنا',
    'contact.subtitle': 'دعنا نناقش كيف يمكننا خلق القيمة معاً',
    'contact.name': 'الاسم',
    'contact.email': 'البريد الإلكتروني',
    'contact.message': 'رسالتك',
    'contact.send': 'إرسال الرسالة',
    'contact.address': 'العنوان',
    'contact.location': '7991-الريان، الرياض 14211، المملكة العربية السعودية',
    
    // Footer
    'footer.rights': '© 2025 ميريت للأعمال. جميع الحقوق محفوظة.',
    'footer.tagline': 'التميز في الشراكات الاستراتيجية',
  },
  ru: {
    // Navigation
    'nav.about': 'О компании',
    'nav.vision': 'Видение и миссия',
    'nav.portfolio': 'Портфолио',
    'nav.history': 'История',
    'nav.contact': 'Контакты',
    
    // Hero
    'hero.title': 'MERIT Business',
    'hero.subtitle': 'Стратегические партнерства для глобального успеха',
    'hero.cta': 'Связаться',
    'hero.scroll': 'Листайте дальше',
    
    // About
    'about.title': 'Добро пожаловать',
    'about.intro': 'Добро пожаловать на веб-сайт компании Merit Business. Я Али Альфаддаги, основатель и владелец компании. В этом вступлении я поделюсь своими достижениями и краткой историей моего бизнес-пути.',
    'about.founder': 'Основатель и председатель',
    
    // Vision & Mission
    'vision.title': 'Наше видение',
    'vision.content': 'В Merit мы верим в многообразие, совершенство и стойкость. Мы стремимся быть глобальным партнером для передовых продуктов и услуг.',
    'mission.title': 'Наша миссия',
    'mission.content': 'Для реализации видения мы фокусируемся на стратегических партнерствах, сотрудничестве с профессионалами в своих областях и создании максимальной ценности для всех заинтересованных сторон.',
    
    // Portfolio
    'portfolio.title': 'Наши компании',
    'portfolio.subtitle': 'Стратегические инвестиции и партнерства в различных секторах',
    
    // History
    'history.title': 'Наш путь',
    'history.subtitle': 'Вехи роста и совершенства',
    
    // Contact
    'contact.title': 'Свяжитесь с нами',
    'contact.subtitle': 'Давайте обсудим, как мы можем создать ценность вместе',
    'contact.name': 'Ваше имя',
    'contact.email': 'Ваш Email',
    'contact.message': 'Ваше сообщение',
    'contact.send': 'Отправить',
    'contact.address': 'Адрес',
    'contact.location': '7991-Аль-Райян, Эр-Рияд 14211, Королевство Саудовская Аравия',
    
    // Footer
    'footer.rights': '© 2025 MERIT Business. Все права защищены.',
    'footer.tagline': 'Совершенство в стратегических партнерствах',
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  useEffect(() => {
    document.documentElement.setAttribute('dir', language === 'ar' ? 'rtl' : 'ltr');
    document.documentElement.setAttribute('lang', language);
  }, [language]);

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations.en] || key;
  };

  const dir = language === 'ar' ? 'rtl' : 'ltr';

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, dir }}>
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
