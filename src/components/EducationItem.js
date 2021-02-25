import React from 'react';
import { Link } from 'react-router-dom';

function EducationItem(props) {
  return (
    <>
      <div className='education__container'>
        <div className='education__content'>
          <h4 className='education__period'>{props.education_period}</h4>
          <a
            className='education__organization__link'
            href={props.education_organization_link}
            target='_blank'
          >
            <h3 className='education__organization'>
              {props.education_organization}
            </h3>
          </a>
          <p className='education__organization__location'>{props.education_organization_location}</p>
          <h4 className='education__position'>{props.education_position}</h4>
          <br />
          <p className='education__desc1'>{props.education_desc1}</p>
          <p className='education__desc2'>{props.education_desc2}</p>
          <p className='education__desc3'>{props.education_desc3}</p>
          <p className='education__desc4'>{props.education_desc4}</p>
        </div>
      </div>
    </>
  );
}

export default EducationItem;
