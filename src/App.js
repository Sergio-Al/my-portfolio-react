//import logo from "./assets/logo.svg";
import NavbarLinks from "./components/NavbarLinks";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import ServicesSection from "./components/ServicesSection";
import WorkingSection from "./components/WorkingSection";
import OtherTechSection from "./components/OtherTechSection";
import DeliveredProjectsSection from "./components/DeliveredProjectsSection";

function App() {
  return (
    <div>
      <NavbarLinks />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <WorkingSection />
      <OtherTechSection />
      <DeliveredProjectsSection />
    </div>
  );
}

export default App;
