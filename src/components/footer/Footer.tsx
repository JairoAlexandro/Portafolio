import React from "react";
import { motion } from "framer-motion";
import { Heart, ArrowUp, Github, Linkedin, Mail, ExternalLink, MapPin } from "lucide-react";
import { useTranslation } from "../../hooks/useTranslation";

const Footer: React.FC = () => {
  const { t } = useTranslation();
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: 'GitHub',
      icon: Github,
      href: 'https://github.com/JairoAlexandro',
      color: 'hover:text-gray-400'
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      href: 'https://www.linkedin.com/in/jairo-alexandro',
      color: 'hover:text-blue-400'
    },
    {
      name: 'Email',
      icon: Mail,
      href: 'mailto:jairosaborio31@gmail.com',
      color: 'hover:text-red-400'
    }
  ];

  const quickLinks = [
    { name: t('nav.skills'), href: '#skills' },
    { name: t('nav.projects'), href: '#projects' },
    { name: t('nav.contact'), href: '#contact' },
    { name: t('hero.download_cv'), href: '/Jairo_Curriculum.pdf' }
  ];

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <footer className="bg-slate-900/95 border-t border-slate-700">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="max-w-7xl mx-auto px-4 py-16"
      >
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Información principal */}
          <motion.div variants={itemVariants} className="md:col-span-2">
            <h3 className="text-2xl font-bold text-white mb-4">Jairo Alexandro</h3>
            <p className="text-gray-300 mb-6 max-w-md">
              {t('hero.description')}
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-3 bg-slate-800/50 hover:bg-slate-700/50 text-gray-300 rounded-lg transition-all duration-300 ${social.color}`}
                  whileHover={{ y: -2, scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={social.name}
                >
                  <social.icon size={20} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Enlaces rápidos */}
          <motion.div variants={itemVariants}>
            <h4 className="text-lg font-semibold text-white mb-4">Enlaces Rápidos</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-blue-400 transition-colors flex items-center gap-2 group"
                  >
                    {link.name}
                    {link.href.startsWith('http') && (
                      <ExternalLink size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                    )}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Información de contacto */}
          <motion.div variants={itemVariants}>
            <h4 className="text-lg font-semibold text-white mb-4">{t('contact.contact_info_title')}</h4>
            <div className="space-y-3 text-gray-300">
              <p className="flex items-center gap-2">
                <Mail size={16} className="text-blue-400" />
                jairosaborio31@gmail.com
              </p>
              <p className="flex items-center gap-2">
                <MapPin size={16} className="text-blue-400" />
                Málaga, Spain
              </p>
            </div>
          </motion.div>
        </div>

        {/* Línea divisoria */}
        <div className="border-t border-slate-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <motion.p variants={itemVariants} className="text-gray-400 text-center md:text-left">
              © {currentYear} Jairo Alexandro. {t('footer.rights')}
            </motion.p>
            
            <motion.div variants={itemVariants} className="flex items-center gap-2 text-gray-400">
              <span>{t('footer.built_with')}</span>
              <Heart size={16} className="text-red-500 animate-pulse" />
              <span>{t('footer.by')} React & TypeScript</span>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Botón de volver arriba */}
      <motion.button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 p-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-lg transition-all duration-300 z-50"
        whileHover={{ scale: 1.1, y: -2 }}
        whileTap={{ scale: 0.9 }}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1 }}
        aria-label="Scroll to top"
      >
        <ArrowUp size={20} />
      </motion.button>
    </footer>
  );
};

export default Footer;