import React from 'react';
import { useTranslation } from '../hooks/useTranslation';

// Ejemplo de cómo usar las traducciones en un componente
const ExampleComponent: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div>
      {/* Traducciones simples */}
      <h1>{t('hero.title')}</h1>
      <p>{t('hero.description')}</p>
      
      {/* Traducciones anidadas */}
      <nav>
        <a href="#home">{t('nav.home')}</a>
        <a href="#skills">{t('nav.skills')}</a>
        <a href="#projects">{t('nav.projects')}</a>
        <a href="#contact">{t('nav.contact')}</a>
      </nav>
      
      {/* Traducciones con estructura compleja */}
      <div>
        <h2>{t('skills.title')}</h2>
        <p>{t('skills.subtitle')}</p>
        
        <div>
          <h3>{t('skills.categories.languages')}</h3>
          <h3>{t('skills.categories.frameworks')}</h3>
          <h3>{t('skills.categories.database')}</h3>
        </div>
      </div>
      
      {/* Estadísticas */}
      <div>
        <span>{t('skills.stats.experience')}</span>
        <span>{t('skills.stats.projects')}</span>
        <span>{t('skills.stats.technologies')}</span>
        <span>{t('skills.stats.commits')}</span>
      </div>
    </div>
  );
};

export default ExampleComponent;

/* 
EJEMPLO DE USO:

1. Importar el hook:
   import { useTranslation } from '../hooks/useTranslation';

2. Usar en el componente:
   const { t } = useTranslation();

3. Obtener traducciones:
   const title = t('hero.title');
   const description = t('hero.description');

4. Para traducciones anidadas:
   const navHome = t('nav.home');
   const skillsTitle = t('skills.title');
   const languageCategory = t('skills.categories.languages');

5. Las keys se pueden anidar con puntos:
   - 'nav.home' -> { "nav": { "home": "Inicio" } }
   - 'skills.categories.languages' -> { "skills": { "categories": { "languages": "Lenguajes" } } }

6. Si no encuentra la traducción, retorna la key como fallback
*/
