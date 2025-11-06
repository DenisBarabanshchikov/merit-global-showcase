import { LanguageProvider } from '@/contexts/LanguageContext';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import VisionMission from '@/components/VisionMission';
import Portfolio from '@/components/Portfolio';
import History from '@/components/History';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <LanguageProvider>
      <div className="min-h-screen">
        <Header />
        <Hero />
        <About />
        <VisionMission />
        <Portfolio />
        <History />
        <Contact />
        <Footer />
      </div>
    </LanguageProvider>
  );
};

export default Index;
