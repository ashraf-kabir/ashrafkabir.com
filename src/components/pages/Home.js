import React from 'react';
import '../../App.css';
import Cards from '../Cards';
import About from '../About';
import Experience from '../Experience';
import Education from '../Education';
import Skills from '../Skills';
import Contact from '../Contact';
import HeroSection from '../HeroSection';

function Home() {
  return (
    <>
      <HeroSection />
      <About />
      <Experience />
      <Education />
      <Skills />
      <Cards />
      <Contact />
    </>
  );
}

export default Home;
