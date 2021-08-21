import React from 'react';

function ExperienceItem(props) {
  return (
    <>
      <div className='experience__container'>
        <div className='experience__content'>
          <h4 className='experience__period'>{props.experience_period}</h4>
          <h3 className='experience__position'>{props.experience_position}</h3>
          <a href={props.experience_organization_link} target='_blank' rel="noreferrer">
            <h3 className='experience__organization'>
              {props.experience_organization}
            </h3>
          </a>
          <p className='experience__desc'>{props.experience_desc}</p>
          <a className='experience__website' href={props.experience_website} target='_blank' rel="noreferrer">{props.experience_website}</a>
        </div>
      </div>
    </>
  );
}

export default ExperienceItem;
