import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import WhoAmI from './components/sections/WhoAmI';
import TechStack from './components/sections/TechStack';
import SelectedWorks from './components/sections/SelectedWorks';

// Importamos los Contextos
import { AnimationProvider } from './context/AnimationContext';
import { LanguageProvider } from './context/LanguageContext';

function App() {
  return (
    <AnimationProvider>
      <LanguageProvider>
        <div className="relative min-h-screen bg-black">
          
          <Header />

          <main>
            <Hero />
            <WhoAmI />
            <TechStack />
            <SelectedWorks />
          </main>

          <Footer />
        </div>
      </LanguageProvider>
    </AnimationProvider>
  );
}

export default App;