import React from "react";
import { MotionConfig } from "framer-motion";
import { TranslationProvider } from "./context/TranslationContext";
import Navbar from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero";
import Now from "./components/now/Now";
import Experience from "./components/experience/Experience";
import Skills from "./components/skills/Skills";
import Projects from "./components/projects/Projects";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";

const App: React.FC = () => {
  return (
    <TranslationProvider>
      <MotionConfig reducedMotion="user">
        <div className="relative min-h-screen">
          {/* Fondo decorativo */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[900px] overflow-hidden"
          >
            <div className="bg-grid absolute inset-0" />
            <div className="absolute left-1/2 top-[-280px] h-[560px] w-[900px] -translate-x-1/2 rounded-full bg-accent/[0.08] blur-[120px]" />
          </div>

          <Navbar />
          <main>
            <Hero />
            <Now />
            <Experience />
            <Skills />
            <Projects />
            <Contact />
          </main>
          <Footer />
        </div>
      </MotionConfig>
    </TranslationProvider>
  );
};

export default App;
