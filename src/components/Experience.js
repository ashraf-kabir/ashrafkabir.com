import React, { Component } from 'react';
import ExperienceItem from './ExperienceItem';
import './Experience.css';

function Experience() {
  return (
    <div className='experience'>
      <h1>Work Experience</h1>
      <div className='experience__item'>
        <ExperienceItem
          experience_period='Nov 2020 - currently working'
          experience_position='Remote PHP Developer (full-time)'
          experience_organization='Manaknight Digital Inc.'
          experience_organization_link='https://manaknightdigital.com/'
          experience_desc='Manaknight Digital provides software solutions like web, mobile, automation, custom, etc.'
        />
      </div>
      <div className='experience__item'>
        <ExperienceItem
          experience_period='Apr 2020 - Oct 2020'
          experience_position='Intern (Web Development)'
          experience_organization='Magnito Digital Ltd.'
          experience_organization_link='http://magnitodigital.com/'
          experience_desc='Magnito Digital is the largest digital agency of Bangladesh with a team of more than 90 people.'
        />
      </div>
      <div className='experience__item'>
        <ExperienceItem
          experience_period='Jan 2020 - Dec 2020'
          experience_position='Web Developer &#38; Webmaster'
          experience_organization='IEEE Brac University Student Branch'
          experience_organization_link='http://ieeebracu.com/'
          experience_desc="A non-profit organization, IEEE is the world's leading professional association for the advancement of technology."
        />
      </div>
    </div>
  );
}

export default Experience;
