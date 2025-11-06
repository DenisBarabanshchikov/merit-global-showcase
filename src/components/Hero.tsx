import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from './ui/button';
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  const { t } = useLanguage();

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const scrollDown = () => {
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden gradient-hero">
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />
      
      <div className="container mx-auto px-4 py-32 text-center relative z-10">
        <div className="max-w-4xl mx-auto space-y-8 animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
            {t('hero.title')}
          </h1>
          
          <div className="h-1 w-32 mx-auto gradient-gold rounded-full" />
          
          <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto">
            {t('hero.subtitle')}
          </p>
          
          <div className="pt-8">
            <Button
              onClick={scrollToContact}
              size="lg"
              className="gradient-gold text-primary font-semibold shadow-gold hover:scale-105 transition-smooth px-8 py-6 text-lg"
            >
              {t('hero.cta')}
            </Button>
          </div>
        </div>
      </div>

      <button
        onClick={scrollDown}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/70 hover:text-white transition-smooth animate-bounce"
        aria-label={t('hero.scroll')}
      >
        <ChevronDown className="h-8 w-8" />
      </button>
    </section>
  );
};

export default Hero;
