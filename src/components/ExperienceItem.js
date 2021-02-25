import React from 'react';
import { Link } from 'react-router-dom';

function ExperienceItem(props) {
  return (
    <>
      <div className='experience__container'>
        <div className='experience__content'>
          <h4 className='experience__period'>{props.experience_period}</h4>
          <h3 className='experience__position'>{props.experience_position}</h3>
          <a href={props.experience_organization_link} target='_blank'>
            <h3 className='experience__organization'>
              {props.experience_organization}
            </h3>
          </a>
          <p className='experience__desc'>{props.experience_desc}</p>
        </div>
      </div>
    </>
  );
}

export default ExperienceItem;
