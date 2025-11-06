import { useLanguage } from '@/contexts/LanguageContext';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Mail, MapPin } from 'lucide-react';

const Contact = () => {
  const { t } = useLanguage();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    window.location.href = 'mailto:aalfaddaghi@gmail.com';
  };

  return (
    <section id="contact" className="py-24 gradient-navy">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {t('contact.title')}
          </h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            {t('contact.subtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <Card className="p-8 shadow-gold bg-card/95 backdrop-blur">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2">{t('contact.name')}</label>
                <Input required placeholder={t('contact.name')} />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">{t('contact.email')}</label>
                <Input type="email" required placeholder={t('contact.email')} />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">{t('contact.message')}</label>
                <Textarea required placeholder={t('contact.message')} rows={5} />
              </div>
              
              <Button type="submit" className="w-full gradient-gold text-primary font-semibold shadow-gold hover:scale-105 transition-smooth">
                {t('contact.send')}
              </Button>
            </form>
          </Card>

          <div className="space-y-6">
            <Card className="p-8 shadow-gold bg-card/95 backdrop-blur">
              <div className="flex items-start gap-4">
                <div className="p-3 gradient-gold rounded-lg flex-shrink-0">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">Email</h3>
                  <a href="mailto:aalfaddaghi@gmail.com" className="text-accent hover:underline">
                    aalfaddaghi@gmail.com
                  </a>
                </div>
              </div>
            </Card>

            <Card className="p-8 shadow-gold bg-card/95 backdrop-blur">
              <div className="flex items-start gap-4">
                <div className="p-3 gradient-gold rounded-lg flex-shrink-0">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">{t('contact.address')}</h3>
                  <p className="text-muted-foreground">{t('contact.location')}</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
