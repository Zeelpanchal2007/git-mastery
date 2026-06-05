import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import MenuSection from './components/MenuSection';
import AboutSection from './components/AboutSection';
import StatsSection from './components/StatsSection';
import TestimonialSection from './components/TestimonialSection';
import GallerySection from './components/GallerySection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-primaryBg font-sans text-primaryText">
      <Navbar />
      <main>
        <HeroSection />
        <MenuSection />
        <AboutSection />
        <StatsSection />
        <TestimonialSection />
        <GallerySection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
