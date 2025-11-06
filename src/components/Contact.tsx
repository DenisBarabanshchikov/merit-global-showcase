import { useLanguage } from '@/contexts/LanguageContext';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Mail, MapPin } from 'lucide-react';
const Contact = () => {
  const {
    t
  } = useLanguage();
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    window.location.href = 'mailto:aalfaddaghi@gmail.com';
  };
  return <section id="contact" className="py-24 gradient-navy">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {t('contact.title')}
          </h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            {t('contact.subtitle')}
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          

          <div className="flex flex-col md:flex-row gap-6 justify-center items-stretch max-w-4xl mx-auto">
            <Card className="p-8 shadow-gold bg-card/95 backdrop-blur flex-1 md:w-80">
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

            <Card className="p-8 shadow-gold bg-card/95 backdrop-blur flex-1 md:w-80">
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
    </section>;
};
export default Contact;