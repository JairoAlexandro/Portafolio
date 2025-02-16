import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const Hero: React.FC = () => {
    const titleRef = useRef<HTMLHeadingElement>(null);

    useEffect(() => {
        if (titleRef.current) {
            const letters = titleRef.current.innerText.split(""); 
            titleRef.current.innerHTML = ""; 
            
            letters.forEach((letter) => {
                const span = document.createElement("span");
                span.innerText = letter;
                span.style.opacity = "0";
                span.style.filter = "blur(5px)";
                titleRef.current?.appendChild(span);
            });

            gsap.to(titleRef.current.children, {
                opacity: 1,
                filter: "blur(0px)",
                y: -20,
                duration: 0.4,
                ease: "power3.out",
                stagger: 0.1, 
            });
        }
    }, []);

    return (
        <div className="hero text-white flex flex-col items-center justify-center">
            <img
                src="../images/perfil.jpeg"
                alt="Profile"
                className="hero__image rounded-full border-4 border-white w-32 h-32 sm:w-48 sm:h-48 md:w-64 md:h-64 lg:w-64 lg:h-64 mb-4 mt-8 shadow-lg"
            />
            <h1 ref={titleRef} className="hero__title text-4xl font-bold mb-2">
                Hi! I´m Jairo Alexandro
            </h1>
            <p className="hero__subtitle text-3xl">Web Developer</p>
            <p className="hero__subtitle mt-6 text-xl">
                Full Stack Developer with solid experience in creating robust and scalable web applications. I excel in both
                BackEnd and FrontEnd, combining strong technical mastery with skills in programming logic and intuitive interface
                design.
            </p>
            <a href="../src/docs/Currículum_Jairo_Saborito.pdf" target="_blank" rel="noopener noreferrer" className="mt-8 px-6 py-2 border-2 border-white text-white rounded-full bg-transparent transition duration-200 ease-in-out transform hover:bg-white hover:text-black hover:scale-105 hover:shadow-lg">
                Download CV
            </a>
            
        </div>
    );
};

export default Hero;
