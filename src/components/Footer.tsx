import { useLanguage } from '@/contexts/LanguageContext';
import meritLogo from '@/assets/merit-logo.png';

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-primary py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center space-y-6">
          <div className="flex items-center gap-3">
            <img src={meritLogo} alt="MERIT Business Logo" className="h-12 w-auto" />
            <span className="text-2xl font-bold text-white">MERIT Business</span>
          </div>
          
          <p className="text-white/80 text-center">
            {t('footer.tagline')}
          </p>
          
          <div className="h-px w-64 bg-white/20" />
          
          <p className="text-white/60 text-sm text-center">
            {t('footer.rights')}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
