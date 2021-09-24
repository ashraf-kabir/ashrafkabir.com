import React from 'react';
import './ThankYouAnimation.css';

function ThankYouAnimation() {
  return (
    <div className='thankyou'>
      <div className="context">
        <h1>Thank you!</h1>
        <h1>¡Gracias!</h1>
      </div>
      <div className="area" >
        <ul className="circles">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
    </div>
  );
}

export default ThankYouAnimation;
