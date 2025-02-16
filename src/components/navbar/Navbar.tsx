import React, { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar: React.FC = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className="p-4 border-b-4 border-white" style={{ borderImage: "linear-gradient(to right, transparent, white, transparent) 1" }}>
            <div className="container mx-auto flex justify-between items-center">
                <div className="text-white text-2xl font-bold">Jairo Alexandro</div>
                <button 
                    className="text-white md:hidden" 
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    {menuOpen ? <X size={30} /> : <Menu size={30} />}
                </button>

                <div className="hidden md:flex">
                    <button className="text-white mx-4" onClick={() => document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' })}>Skills</button>
                    <button className="text-white mx-4" onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}>Projects</button>
                    <button className="text-white mx-4" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>Contact</button>
                </div>
            </div>

            <div className={`md:hidden flex flex-col items-center bg-[#222222] transition-all duration-300 ${menuOpen ? "h-auto opacity-100 py-4" : "h-0 opacity-0 overflow-hidden"}`}>
                <button className="text-white my-2" onClick={() => document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' })}>Skills</button>
                <button className="text-white my-2" onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}>Proyects</button>
                <button className="text-white my-2" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>Contact</button>
            </div>
        </nav>
    );
};

export default Navbar;
