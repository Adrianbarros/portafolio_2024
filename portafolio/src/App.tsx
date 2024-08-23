import React, { useRef, useContext, useEffect } from 'react';
import { Header } from './components/Header';
import './App.css';
import { Main } from './sections/Main';
import { Skills } from './sections/Skills';
import { Experience } from './sections/Experience';
import { ContactMe } from './sections/ContactMe';

import { VisibilityProvider, VisibilityContext } from './utils/VIsibilityContext';



const App = () => {

  const sectionRefs = {
    about: useRef(null),
    experience: useRef(null),
    skills: useRef(null),
    contact: useRef(null),
  };
  const context = useContext(VisibilityContext);

  if (!context) {
    throw new Error('App must be used within a VisibilityProvider');
  }

  const { setIsExperienceVisible } = context;

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsExperienceVisible(entry.isIntersecting);
      },
      { threshold: 0.5 }
    );

    if (sectionRefs.experience.current) {
      observer.observe(sectionRefs.experience.current);
    }

    return () => {
      if (sectionRefs.experience.current) {
        observer.unobserve(sectionRefs.experience.current);
      }
    };
  }, [setIsExperienceVisible]);

  return (

    <div className="App">
      <Header sectionRef={sectionRefs} />
      <div ref={sectionRefs.about}>
        <Main sectionRef={sectionRefs} />
      </div>
      <div ref={sectionRefs.skills}>
        <Skills />
      </div>
      <div ref={sectionRefs.experience}>
        <Experience />
      </div>

      <div ref={sectionRefs.contact}>
        <ContactMe />
      </div>
    </div>
  );
}

export default App;
