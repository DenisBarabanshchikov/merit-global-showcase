import { useLanguage } from '@/contexts/LanguageContext';
import { Card } from './ui/card';
import { ExternalLink } from 'lucide-react';

const Portfolio = () => {
  const { t } = useLanguage();

  const companies = [
    {
      name: 'Mohammed A Alfaddaghi & Partners',
      url: '#',
      description: 'Strategic business consultancy and partnerships',
    },
    {
      name: 'Oy Nord Water LTD',
      url: '#',
      description: 'Water treatment and environmental solutions',
    },
    {
      name: 'Mohammed A Alfaddaghi for Real Estate',
      url: '#',
      description: 'Premium real estate development and investment',
    },
    {
      name: 'New Age Power',
      url: '#',
      description: 'Innovative energy solutions and services',
    },
    {
      name: 'Bravo Solar Energy Systems',
      url: '#',
      description: 'Advanced solar energy technologies',
    },
  ];

  return (
    <section id="portfolio" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            {t('portfolio.title')}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t('portfolio.subtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {companies.map((company, index) => (
            <Card
              key={index}
              className="p-6 hover:shadow-gold transition-smooth group cursor-pointer border-2 hover:border-accent"
            >
              <a href={company.url} target="_blank" rel="noopener noreferrer" className="block">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-xl font-bold text-primary group-hover:text-gradient-gold transition-smooth flex-1">
                    {company.name}
                  </h3>
                  <ExternalLink className="h-5 w-5 text-muted-foreground group-hover:text-accent transition-smooth flex-shrink-0 ml-2" />
                </div>
                <p className="text-muted-foreground">{company.description}</p>
              </a>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
