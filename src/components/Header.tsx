import { useState, useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import LanguageSwitcher from './LanguageSwitcher';
import { Button } from './ui/button';
import meritLogo from '@/assets/merit-logo.png';

const Header = () => {
  const { t } = useLanguage();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-smooth ${
        scrolled ? 'bg-background/95 backdrop-blur-md shadow-elegant' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src={meritLogo} alt="MERIT Business Logo" className="h-10 w-auto" />
            <span className="text-xl font-bold text-primary hidden sm:block">MERIT</span>
          </div>

          <nav className="hidden md:flex items-center gap-6">
            <Button variant="ghost" onClick={() => scrollToSection('about')}>
              {t('nav.about')}
            </Button>
            <Button variant="ghost" onClick={() => scrollToSection('vision')}>
              {t('nav.vision')}
            </Button>
            <Button variant="ghost" onClick={() => scrollToSection('portfolio')}>
              {t('nav.portfolio')}
            </Button>
            <Button variant="ghost" onClick={() => scrollToSection('history')}>
              {t('nav.history')}
            </Button>
            <Button variant="ghost" onClick={() => scrollToSection('contact')}>
              {t('nav.contact')}
            </Button>
          </nav>

          <LanguageSwitcher />
        </div>
      </div>
    </header>
  );
};

export default Header;
