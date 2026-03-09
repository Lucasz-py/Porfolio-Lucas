import CustomCursor from './components/CustomCursor';
import Header from './components/Header';
import Hero from './components/Hero';
import WhoAmI from './components/WhoAmI';
import TechStack from './components/TechStack';
import SelectedWorks from './components/SelectedWorks';

function App() {
  return (
    // Agregamos bg-black aquí para asegurarnos de que no haya fondos blancos globales
    <div className="relative min-h-screen bg-black">
      <CustomCursor />
      
      <Header />

      {/* ELIMINAMOS el className="pt-24" que empujaba todo hacia abajo */}
      <main>
        <Hero />
        <WhoAmI />
        <TechStack />
        <SelectedWorks />
      </main>
    </div>
  );
}

export default App;