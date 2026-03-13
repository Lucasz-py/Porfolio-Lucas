import CustomCursor from './components/ui/CustomCursor';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import WhoAmI from './components/sections/WhoAmI';
import TechStack from './components/sections/TechStack';
import SelectedWorks from './components/sections/SelectedWorks';
import { AnimationProvider } from './context/AnimationContext';


function App() {
  return (
    // Envolvemos todo en el AnimationProvider
    <AnimationProvider>
      <div className="relative min-h-screen bg-black">
        <CustomCursor />
        
        <Header />

        <main>
          <Hero />
          <WhoAmI />
          <TechStack />
          <SelectedWorks />
        </main>

        <Footer />
      </div>
    </AnimationProvider>
  );
}

export default App;