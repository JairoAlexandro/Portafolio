import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer className="bg-[#161616] border-2 border-black text-white py-4 rounded-2xl">
            <p className="text-center">&copy; {new Date().getFullYear()} JairoAlexandro</p>
        </footer>
    );
};

export default Footer;