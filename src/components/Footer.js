import React from 'react';
import './Footer.css';
import pdf from '../components/documents/ashraf-kabir-cv.pdf';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
      <div class='footer-links'>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>About</h2>
            <a href={pdf} target='_blank' rel="noreferrer">CV</a>
          </div>

          <div class='footer-link-items'>
            <h2>Contact</h2>
            <p>Phone: +88 01751336666</p>
            <a href='mailto:ashrafkabir95@gmail.com'>
              Email: ashrafkabir95@gmail.com
            </a>
            <p>Location: Dhaka, Bangladesh</p>
          </div>

          <div class='footer-link-items'>
            <h2>Social Media</h2>
            <a href='https://www.facebook.com/sonnet404/' target='_blank' rel="noreferrer">
              Facebook
            </a>
            <a href='https://github.com/ashraf-kabir' target='_blank' rel="noreferrer">
              GitHub
            </a>
            <a href='https://www.linkedin.com/in/ashraf-kabir/' target='_blank' rel="noreferrer">
              LinkedIn
            </a>
          </div>
        </div>
      </div>

      <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='footer-logo'>
            <Link to='/' className='social-logo'>
              Ashraf&nbsp;<i class='fas fa-code' />
            </Link>
          </div>
          <small class='website-rights'>
            © Ashraf Kabir {new Date().getFullYear()}
          </small>
          <div class='social-icons'>
            <a
              class='social-icon-link facebook'
              href='https://www.facebook.com/sonnet404/'
              target='_blank'
              aria-label='Facebook'
              rel="noreferrer"
            >
              <i class='fab fa-facebook-f' />
            </a>

            <a
              class='social-icon-link github'
              href='https://github.com/ashraf-kabir'
              target='_blank'
              aria-label='GitHub'
              rel="noreferrer"
            >
              <i class='fab fa-github' />
            </a>

            <a
              class='social-icon-link linkedin'
              href='https://www.linkedin.com/in/ashraf-kabir/'
              target='_blank'
              aria-label='LinkedIn'
              rel="noreferrer"
            >
              <i class='fab fa-linkedin' />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
