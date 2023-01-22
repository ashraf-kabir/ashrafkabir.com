import React from 'react';
import '../../App.css';
import Cards from '../../components/Cards/Cards';
import About from '../../components/About/About';
import Experience from '../../components/Experience/Experience';
import Education from '../../components/Education/Education';
import Skills from '../../components/Skills/Skills';
import Contact from '../../components/Contact/Contact';
import HeroSection from '../../components/HeroSection/HeroSection';

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
