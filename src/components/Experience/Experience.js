import React from 'react';
import ExperienceItem from './ExperienceItem';
import './Experience.css';

function Experience() {
  const reliSourceDesc = 'ReliSource is a “Provider of Niche Products & Services” and works as your Extended Engineering Partner to deliver a combination of unique and Quality driven Technology...';
  return (
    <div className='experience'>
      <h1>Work Experience</h1>
      <div className='experience__item'>
        <ExperienceItem
          experience_period='Sep 2022 - currently working'
          experience_position='Web Developer (Full-time)'
          experience_organization='ReliSource Technologies Ltd.'
          experience_organization_link='https://www.relisource.com/'
          experience_desc={reliSourceDesc}
          experience_website='https://www.relisource.com/'
        />
      </div>
      <div className='experience__item'>
        <ExperienceItem
          experience_period='Aug 2021 - Sep 2022'
          experience_position='Software Engineer (Full-time)'
          experience_organization='Inovace Technologies'
          experience_organization_link='https://inovacetech.com/'
          experience_desc='Inovace is one of the latest tech startups in Bangladesh, focusing on IT sector, especially on Embedded Systems Design and Software Development.'
          experience_website='https://inovacetech.com/'
        />
      </div>
      <div className='experience__item'>
        <ExperienceItem
          experience_period='Nov 2020 - June 2022'
          experience_position='Web Developer (Full-time->Remote)'
          experience_organization='Manaknight Digital Inc.'
          experience_organization_link='https://manaknightdigital.com/'
          experience_desc='Manaknight Digital provides software solutions like web, mobile, automation, custom, etc.'
          experience_website='https://manaknightdigital.com/'
        />
      </div>
      <div className='experience__item'>
        <ExperienceItem
          experience_period='Apr 2020 - Oct 2020'
          experience_position='Intern (Web Development)'
          experience_organization='Magnito Digital Ltd.'
          experience_organization_link='http://magnitodigital.com/'
          experience_desc='Magnito Digital is the largest digital agency of Bangladesh with a team of more than 90 people.'
          experience_website='http://magnitodigital.com/'
        />
      </div>
      <div className='experience__item'>
        <ExperienceItem
          experience_period='Jan 2020 - Dec 2020'
          experience_position='Web Developer &#38; Webmaster'
          experience_organization='IEEE Brac University Student Branch'
          experience_organization_link='http://ieeebracu.com/'
          experience_desc="A non-profit organization, IEEE is the world's leading professional association for the advancement of technology."
          experience_website='http://ieeebracu.com/'
        />
      </div>
    </div>
  );
}

export default Experience;
