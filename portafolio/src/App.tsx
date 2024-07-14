import React from 'react';
import { Header } from './components/Header';
import './App.css';
import { Main } from './sections/Main';
import { Skills } from './sections/Skills';
import { Experience } from './sections/Experience';


function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Skills />
      <Experience />
    </div>
  );
}

export default App;
