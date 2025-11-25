import "../App.css";
import Header from "../components/sections/Header";
import Welcome from "../components/sections/Welcome";
import Services from "../components/sections/Services";
import RecentWork from "../components/sections/RecentWork";
import Footer from "../components/sections/Footer";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { useEffect } from "react";

function HomeScreen() {
  useEffect(() => {
    ScrollSmoother.create({
      wrapper: "#smooth-wrapper",
      content: "#smooth-content",
      smooth: 1.5,
      effects: true
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

export default HomeScreen