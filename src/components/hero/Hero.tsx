import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { Download, Github, Linkedin, Mail } from "lucide-react";
import { useTranslation } from "../../hooks/useTranslation";

const Hero: React.FC = () => {
    const { t } = useTranslation();
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

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                duration: 0.8,
                staggerChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { y: 50, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.6,
                ease: "easeOut" as const
            }
        }
    };

    const socialLinks = [
        { icon: Github, href: "https://github.com/JairoAlexandro", label: "GitHub" },
        { icon: Linkedin, href: "https://www.linkedin.com/in/jairo-alexandro", label: "LinkedIn" },
        { icon: Mail, href: "mailto:jairosaborio31@gmail.com", label: "Email" }
    ];

    return (
        <motion.div 
            className="hero min-h-screen flex flex-col items-center justify-center px-4 py-20"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
        >
            <motion.div 
                className="relative mb-8"
                variants={itemVariants}
            >
                <motion.img
                    src="https://res.cloudinary.com/dieclsppc/image/upload/f_auto,q_auto/v1/portafolio/gjcllj1ntlgli0vict6e"
                    alt="Jairo Alexandro - Full Stack Developer"
                    className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 rounded-full border-4 border-white shadow-2xl"
                    whileHover={{ 
                        scale: 1.05,
                        rotate: 5,
                        transition: { duration: 0.3 }
                    }}
                    whileTap={{ scale: 0.95 }}
                />
                <motion.div
                    className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-500 rounded-full border-4 border-white"
                    animate={{ 
                        scale: [1, 1.2, 1],
                        opacity: [1, 0.8, 1]
                    }}
                    transition={{ 
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                />
            </motion.div>

            <motion.h1 
                ref={titleRef} 
                className="hero__title text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 text-center text-white leading-tight"
                variants={itemVariants}
            >
                {t('hero.greeting')}
            </motion.h1>

            <motion.p 
                className="hero__subtitle text-2xl sm:text-3xl md:text-4xl text-blue-400 mb-6 font-semibold"
                variants={itemVariants}
            >
                {t('hero.title')}
            </motion.p>

            <motion.p 
                className="hero__description max-w-4xl text-center text-lg sm:text-xl md:text-2xl text-gray-300 leading-relaxed mb-12 px-4"
                variants={itemVariants}
            >
                {t('hero.description')}
            </motion.p>

            <motion.div 
                className="flex flex-col sm:flex-row gap-4 mb-12"
                variants={itemVariants}
            >
                <motion.a 
                    href="/Jairo_Curriculum.pdf" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.95 }}
                >
                    <Download size={20} />
                    {t('hero.download_cv')}
                </motion.a>

                <motion.a 
                    href="#contact" 
                    className="flex items-center gap-2 border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl"
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.95 }}
                >
                    {t('hero.cta')}
                </motion.a>
            </motion.div>

            <motion.div 
                className="flex gap-6"
                variants={itemVariants}
            >
                {socialLinks.map((social, index) => (
                    <motion.a
                        key={social.label}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 bg-white/10 hover:bg-white/20 text-white rounded-full transition-all duration-300 transform hover:scale-110 hover:rotate-12"
                        whileHover={{ y: -3 }}
                        whileTap={{ scale: 0.9 }}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 + 1 }}
                    >
                        <social.icon size={24} />
                        <span className="sr-only">{social.label}</span>
                    </motion.a>
                ))}
            </motion.div>
        </motion.div>
    );
};

export default Hero;
