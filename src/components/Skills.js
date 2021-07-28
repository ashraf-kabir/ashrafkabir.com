import React from 'react';
import './Skills.css';

function Skills() {
  return (
    <div className='skills'>
      <h1>Skills</h1>
      <div className='skills__container'>
        <div className='bar html expert' data-skill='HTML5'></div>
        <div className='bar css advanced' data-skill='CSS3'></div>
        <div className='bar php advanced' data-skill='PHP'></div>
        <div className='bar mysql advanced' data-skill='MySql'></div>
        <div className='bar laravel advanced' data-skill='Laravel'></div>
        <div className='bar js advanced' data-skill='JavaScript'></div>
        <div className='bar nodejs intermediate' data-skill='Nodejs'></div>
        <div className='bar react intermediate' data-skill='React'></div>
        <div className='bar mongodb intermediate' data-skill='MongoDB'></div>
        <div className='bar java intermediate' data-skill='Java'></div>
        <div className='bar github advanced' data-skill='GitHub'></div>
      </div>
    </div>
  );
}

export default Skills;
