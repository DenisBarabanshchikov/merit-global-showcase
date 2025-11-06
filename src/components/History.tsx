import { useLanguage } from '@/contexts/LanguageContext';

const History = () => {
  const { t } = useLanguage();

  const milestones = [
    { year: '1979-1981', event: 'Helped establish M&A Alfaddaghi Co and Alamttar Corp.' },
    { year: '1984', event: 'Managed Alamttar to have the largest market share in its field.' },
    { year: '1985-1989', event: 'Led the restructuring of M&A Alfaddaghi' },
    { year: '1989-1990', event: 'Formed Alfaddaghi Group by merging the top management of M&A and Alamttar' },
    { year: '1990', event: 'Formed Matanah Ltd for Service and Auto Parts.' },
    { year: '1992', event: 'Formed Alfaddaghi for Commerce and services.' },
    { year: '1994', event: 'Formed State of the Art technology (SOFT) for software and telecommunication.' },
    { year: '1995', event: 'Led the efforts and negotiations to acquire shares of Alfaddaghi Group.' },
    { year: '1997', event: 'Formed Mohammed A & Partners.' },
    { year: '2005', event: 'Acquired 100% of the shares of Oy Nord Water Ltd Finland.' },
    { year: '2014', event: 'Won the Entrepreneurship Award from Saudi Aramco.' },
    { year: '2014', event: 'Formed New Age Power.' },
    { year: '2017', event: 'Formed Bravo Solar Energy Systems Dubai UAE.' },
    { year: '2019-Present', event: 'Chairman of the board of Alfaddaghi Group.' },
  ];

  return (
    <section id="history" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            {t('history.title')}
          </h2>
          <p className="text-lg text-muted-foreground">
            {t('history.subtitle')}
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 gradient-gold" />

            {milestones.map((milestone, index) => (
              <div
                key={index}
                className={`relative mb-12 ${
                  index % 2 === 0 ? 'md:pr-1/2 md:text-right' : 'md:pl-1/2 md:ml-auto'
                } pl-20 md:pl-0`}
              >
                <div className="absolute left-8 md:left-1/2 w-4 h-4 gradient-gold rounded-full -translate-x-1.5 md:-translate-x-2 shadow-gold" />
                
                <div className="bg-card p-6 rounded-lg shadow-elegant border-2 hover:border-accent transition-smooth hover:shadow-gold">
                  <span className="text-accent font-bold text-lg">{milestone.year}</span>
                  <p className="text-foreground/80 mt-2">{milestone.event}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default History;
