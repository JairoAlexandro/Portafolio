import React, { useState} from "react";
import { Menu, X} from "lucide-react";
import { useAppContext } from "../../context/AppContext";
import { Link} from "react-router-dom";
import { useTranslation } from "../../hooks/useTranslation";
import LanguageSwitcher from "../LanguageSwitcher";

const Navbar: React.FC = () => {
    const { t } = useTranslation();
    const [menuOpen, setMenuOpen] = useState(false);
    const {setCurrentSection } = useAppContext();

    const handleNavClick = (section: string) => {
        setCurrentSection(section);
        const element = document.getElementById(section);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <nav className="sticky top-0 z-50 bg-slate-900/95 backdrop-blur-sm border-b-4 border-white transition-all duration-300" 
             style={{ borderImage: "linear-gradient(to right, transparent, white, transparent) 1" }}>
            <div className="container mx-auto flex justify-between items-center px-4 py-4">
                <Link to="/" className="text-white text-2xl font-bold hover:text-blue-400 transition-colors">
                    J. Alexandro
                </Link>
                
                <div className="flex items-center space-x-4">
                    <LanguageSwitcher />
                    
                    <button 
                        className="text-white md:hidden p-2 rounded-lg hover:bg-slate-800 transition-colors" 
                        onClick={() => setMenuOpen(!menuOpen)}
                        aria-label="Toggle menu"
                    >
                        {menuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>

                    <div className="hidden md:flex space-x-6">
                        <button 
                            className="text-white hover:text-blue-400 transition-colors cursor-pointer font-medium" 
                            onClick={() => handleNavClick('skills')}
                        >
                            {t('nav.skills')}
                        </button>
                        <button 
                            className="text-white hover:text-blue-400 transition-colors cursor-pointer font-medium" 
                            onClick={() => handleNavClick('projects')}
                        >
                            {t('nav.projects')}
                        </button>
                        <button 
                            className="text-white hover:text-blue-400 transition-colors cursor-pointer font-medium" 
                            onClick={() => handleNavClick('contact')}
                        >
                            {t('nav.contact')}
                        </button>
                    </div>
                </div>
            </div>

            <div className={`md:hidden bg-slate-800/95 backdrop-blur-sm transition-all duration-300 overflow-hidden ${
                menuOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
            }`}>
                <div className="flex flex-col items-center py-4 space-y-4">
                    <button 
                        className="text-white hover:text-blue-400 transition-colors cursor-pointer font-medium" 
                        onClick={() => handleNavClick('skills')}
                    >
                        {t('nav.skills')}
                    </button>
                    <button 
                        className="text-white hover:text-blue-400 transition-colors cursor-pointer font-medium" 
                        onClick={() => handleNavClick('projects')}
                    >
                        {t('nav.projects')}
                    </button>
                    <button 
                        className="text-white hover:text-blue-400 transition-colors cursor-pointer font-medium" 
                        onClick={() => handleNavClick('contact')}
                    >
                        {t('nav.contact')}
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
