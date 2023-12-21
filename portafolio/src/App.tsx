import React from 'react';
import { Header } from './components/Header';
import './App.css';
import { Main } from './sections/Main';
import { Skills } from './sections/Skills';

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Skills />

    </div>
  );
}

export default App;
