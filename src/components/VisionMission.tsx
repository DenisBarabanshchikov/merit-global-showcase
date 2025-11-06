import { useLanguage } from '@/contexts/LanguageContext';
import { Card } from './ui/card';
import { Target, Lightbulb } from 'lucide-react';

const VisionMission = () => {
  const { t } = useLanguage();

  return (
    <section id="vision" className="py-24 gradient-navy">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <Card className="p-8 md:p-10 shadow-gold hover:scale-105 transition-smooth bg-card/95 backdrop-blur">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 gradient-gold rounded-lg">
                <Lightbulb className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-3xl font-bold text-primary">{t('vision.title')}</h3>
            </div>
            <p className="text-foreground/80 text-lg leading-relaxed">
              {t('vision.content')}
            </p>
          </Card>

          <Card className="p-8 md:p-10 shadow-gold hover:scale-105 transition-smooth bg-card/95 backdrop-blur">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 gradient-gold rounded-lg">
                <Target className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-3xl font-bold text-primary">{t('mission.title')}</h3>
            </div>
            <p className="text-foreground/80 text-lg leading-relaxed">
              {t('mission.content')}
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default VisionMission;
