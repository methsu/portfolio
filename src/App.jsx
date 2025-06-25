import React from 'react';
import Header from './components/Header';
import Home from './components/home';
import AboutMe from './components/AboutMe';
import Skills from './components/Skills';
import Contact from './components/Contactme';
import Education from './components/Education';
import Footer from './components/Footer';
import Projects
 from './components/Projects';
import './index.css';

function App() {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      <main>
        <Home />
        <AboutMe />
        <Skills />
        <Education/>
        < Projects />

        <Contact/>
      </main>
      <Footer/>
    </div>
  );
}

export default App;