import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import HomeScreen from "./screens/HomeScreen";
import AuthScreen from "./screens/AuthScreen";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/login" element={<AuthScreen />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;