import React, { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AppProvider } from "./context/AppContext";
import { TranslationProvider } from "./context/TranslationContext";
import "./App.css";

// Lazy loading de componentes
const Navbar = React.lazy(() => import("./components/navbar/Navbar"));
const Hero = React.lazy(() => import("./components/hero/Hero"));
const Skills = React.lazy(() => import("./components/skills/Skills"));
const Projects = React.lazy(() => import("./components/projects/Projects"));
const Contact = React.lazy(() => import("./components/contact/Contact"));
const Footer = React.lazy(() => import("./components/footer/Footer"));

// Componente de carga
const LoadingSpinner = () => (
  <div className="flex items-center justify-center min-h-screen">
    <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-500"></div>
  </div>
);

const App: React.FC = () => {
  return (
    <TranslationProvider>
      <AppProvider>
        <Router>
          <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 dark:from-slate-900 dark:via-purple-900 dark:to-slate-900">
            <Suspense fallback={<LoadingSpinner />}>
              <Navbar />
              <main>
                <Routes>
                  <Route path="/" element={
                    <>
                      <Hero />
                      <Skills />
                      <Projects />
                      <Contact />
                    </>
                  } />
                  <Route path="/skills" element={<Skills />} />
                  <Route path="/projects" element={<Projects />} />
                  <Route path="/contact" element={<Contact />} />
                </Routes>
              </main>
              <Footer />
            </Suspense>
          </div>
        </Router>
      </AppProvider>
    </TranslationProvider>
  );
};

export default App;
