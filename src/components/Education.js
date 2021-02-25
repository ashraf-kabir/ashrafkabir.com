import React, { Component } from 'react';
import EducationItem from './EducationItem';
import './Education.css';

function Education() {
  return (
    <div className='education'>
      <h1>Education</h1>
      <ul className='education__item'>
        <EducationItem
          education_period='May 2016 - Aug 2020'
          education_position='B.Sc. in Computer Science and Engineering'
          education_organization='Brac University'
          education_organization_location='66 Mohakhali, Dhaka 1212'
          education_organization_link='https://bracu.ac.bd'
          education_desc1='CGPA: 3.27 out of 4.00'
          education_desc2='136 Credits completed out of 136'
          education_desc3='Graduation Date: September, 2020'
        />
      </ul>

      <ul className='education__item'>
        <EducationItem
          education_period='Jul 2013 - Jun 2015'
          education_position='Higher Secondary School Certificate (HSC)'
          education_organization='St. Joseph Higher Secondary School'
          education_organization_location='97 Asad Ave, Dhaka 1207'
          education_organization_link='https://www.sjs.edu.bd/'
          education_desc1='Science Group'
          education_desc2='Class 11 - 12'
          education_desc3='Result: GPA 5.00 out of 5.00 on HSC'
        />
      </ul>

      <ul className='education__item'>
        <EducationItem
          education_period='Jan 2003 - Dec 2012'
          education_position='Junior School Certificate (JSC), Secondary School Certificate (SSC)'
          education_organization="Dhanmondi Govt. Boys' High School"
          education_organization_location='27 Mirpur Rd, Dhaka 1207'
          education_organization_link=''
          education_desc1='Science Group'
          education_desc2='Class 01 - 10'
          education_desc3='Result: GPA 5.00 out of 5.00 on JSC and SSC'
        />
      </ul>
    </div>
  );
}

export default Education;
