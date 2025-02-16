import React from "react";
import "./App.css";
import Navbar from "./components/navbar/Navbar.tsx";
import Hero from "./components/hero/Hero.tsx";
import Skills from "./components/skills/Skills.tsx";
import Projects from "./components/projects/Projects.tsx";
import Contact from "./components/contact/Contact.tsx";
import Footer from "./components/footer/Footer.tsx";

const App: React.FC = () => {
  return (
    <div >
      <Navbar />
      <Hero />
      <Skills/>
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
