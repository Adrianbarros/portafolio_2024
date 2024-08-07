import React, { useRef } from 'react';
import { Header } from './components/Header';
import './App.css';
import { Main } from './sections/Main';
import { Skills } from './sections/Skills';
import { Experience } from './sections/Experience';
import { ContactMe } from './sections/ContactMe';



const App = () => {

  const sectionRefs = {
    about: useRef(null),
    experience: useRef(null),
    skills: useRef(null),
    contact: useRef(null),
  };
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
