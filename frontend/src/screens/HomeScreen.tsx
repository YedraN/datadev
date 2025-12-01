import "../App.css";
import Header from "../components/sections/Header";
import Welcome from "../components/sections/Welcome";
import Services from "../components/sections/Services";
import RecentWork from "../components/sections/RecentWork";
import Footer from "../components/sections/Footer";
import SEO from "../components/SEO";

function HomeScreen() {
  return (
    <>
      <SEO
        title="DataDev - Soluciones digitales para tu web"
        description="DataDev ofrece soluciones digitales a medida para tu negocio. Desarrollo web, aplicaciones y consultoría tecnológica."
        keywords="desarrollo web, aplicaciones, consultoría tecnológica, datadev, software"
      />
      <Header />
      <Welcome />
      <Services />
      <RecentWork />
      <Footer />
    </>
  );
}

export default HomeScreen;