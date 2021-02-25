import React from 'react';

function AboutItem(props) {
  return (
    <>
      <div>
        <h1>{props.header}</h1>
        <div className='about__container'>
          <figure>
            <img
              className='about__item__img'
              alt='Test Image'
              src={props.src}
            />
          </figure>
          <p className='about__text'>{props.text}</p>
        </div>
      </div>
    </>
  );
}

export default AboutItem;
