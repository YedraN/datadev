import "./App.css";
import Header from "./components/sections/Header";
import Welcome from "./components/sections/Welcome";
import Services from "./components/sections/Services";
import RecentWork from "./components/sections/RecentWork";
import Footer from "./components/sections/Footer";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { useEffect } from "react";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

function App() {
  useEffect(() => {
    ScrollSmoother.create({
      wrapper: "#smooth-wrapper",
      content: "#smooth-content",
      smooth: 1.5, // velocidad del scroll
      effects: true // activa efectos con data-speed y data-lag
    });
  }, []);

  return (
    <div id="smooth-wrapper">
      <div id="smooth-content">
        <Header />
        <Welcome />
        <Services />
        <RecentWork />
        <Footer />
      </div>
    </div>
  );
}

export default App;