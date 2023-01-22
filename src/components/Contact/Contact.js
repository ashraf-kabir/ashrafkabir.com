import React from 'react';
import './Contact.css';

function Contact() {
  return (
    <div className='contact' id='contact'>
      <h1 className='contact_h1'>Contact</h1>
      <div className='contact__container'>
        <div className='row'>
          <div className='column'>
            <h2 className='col_h2'>Contact Info</h2>
            <p className='col_p'>
              <i class='fa fa-envelope' />
              <a className='col_email' href='mailto:ashrafkabir95@gmail.com'>
                ashrafkabir95@gmail.com
              </a>
            </p>

            <p className='col_p'>
              <i className='fa fa-phone fa-rotate-90' />
              <span className='col_phone'>+88 01751336666</span>
            </p>
            
            <p className='col_p'>
              <i className='fab fa-github' />
              <a
                className='col_social'
                href='https://github.com/ashraf-kabir/'
                target='_blank'
                rel="noreferrer"
              >
                https://github.com/ashraf-kabir/
              </a>
            </p>

            <p className='col_p'>
              <i className='fab fa-linkedin' />
              <a
                className='col_social'
                href='https://www.linkedin.com/in/ashraf-kabir/'
                target='_blank'
                rel="noreferrer"
              >
                https://www.linkedin.com/in/ashraf-kabir/
              </a>
            </p>

            <p className='col_p'>
              <i class='fab fa-facebook-square' />
              <a
                className='col_social'
                href='https://www.facebook.com/sonnet404/'
                target='_blank'
                rel="noreferrer"
              >
                https://www.facebook.com/sonnet404/
              </a>
            </p>
          </div>
          <div className='column'>
            <h2 className='col_h2'>Address</h2>
            <p>
              Location: <br /> Dhaka, Bangladesh
            </p>
            <br />
            <p>Working Hours: <br /> 10AM to 6PM (ET), Mon to Fri</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
