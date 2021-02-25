import React from 'react';
import './About.css';
import AboutItem from './AboutItem';

function About() {
  return (
    <div className='about' id="about">
      <AboutItem
        header='About Me'
        src='/images/img-10.jpg'
        text="Hello! I am Ashraf Kabir. I'm an enthusiastic, self-motivated,
          reliable, responsible and hard working person, a team worker and
          adaptable to challenging situations."
      />
    </div>
  );
}

export default About;
