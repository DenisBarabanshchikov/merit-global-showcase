import { useLanguage } from '@/contexts/LanguageContext';
import { Card } from './ui/card';

const About = () => {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <Card className="p-8 md:p-12 shadow-elegant border-2">
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-8 text-center">
              {t('about.title')}
            </h2>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-foreground/80 leading-relaxed mb-6">
                {t('about.intro')}
              </p>
              
              <div className="mt-8 pt-8 border-t border-border">
                <p className="text-center">
                  <span className="font-bold text-2xl text-gradient-gold">Ali Alfaddaghi</span>
                  <br />
                  <span className="text-muted-foreground">{t('about.founder')}</span>
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;
