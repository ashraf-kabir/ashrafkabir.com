import React from 'react';
import './Footer.css';
import pdf from '../components/documents/ashraf-kabir-cv.pdf';
import { Button } from './Button';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
      {/* <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
          Join the Adventure newsletter to receive our best vacation deals
        </p>
        <p className='footer-subscription-text'>
          You can unsubscribe at any time.
        </p>
        <div className='input-areas'>
          <form>
            <input
              className='footer-input'
              name='email'
              type='email'
              placeholder='Your Email'
            />
            <Button buttonStyle='btn--outline'>Subscribe</Button>
          </form>
        </div>
      </section> */}
      <div class='footer-links'>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>About</h2>
            <a href={pdf} target='_blank'>
              CV
            </a>
          </div>

          <div class='footer-link-items'>
            <h2>Contact</h2>
            <a>Phone: +88 01717093791</a>
            <a href='mailto:ashrafkabir95@gmail.com'>
              Email: ashrafkabir95@gmail.com
            </a>
            <a>Location: Dhaka, Bangladesh</a>
          </div>

          <div class='footer-link-items'>
            <h2>Social Media</h2>
            <a href='https://www.facebook.com/sonnet404/' target='_blank'>
              Facebook
            </a>
            <a href='https://github.com/ashraf-kabir' target='_blank'>
              GitHub
            </a>
            <a href='https://www.linkedin.com/in/ashraf-kabir/' target='_blank'>
              LinkedIn
            </a>
          </div>

        </div>

        {/* <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>Contact</h2>
            <a>Phone: +880 1751336666</a>
            <a href='mailto:ashrafkabir95@gmail.com'>
              Email: ashrafkabir95@gmail.com
            </a>
            <a>Location: Dhaka, Bangladesh</a>
          </div>
        </div> */}

        {/* <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>Videos</h2>
            <Link to='/'>Submit Video</Link>
            <Link to='/'>Ambassadors</Link>
            <Link to='/'>Agency</Link>
            <Link to='/'>Influencer</Link>
          </div>
          <div class='footer-link-items'>
            <h2>Social Media</h2>
            <a href='https://www.facebook.com/sonnet404/' target='_blank'>
              Facebook
            </a>
            <a href='https://github.com/ashraf-kabir' target='_blank'>
              GitHub
            </a>
            <a href='https://www.linkedin.com/in/ashraf-kabir/' target='_blank'>
              LinkedIn
            </a>
          </div>
        </div> */}

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
            >
              <i class='fab fa-facebook-f' />
            </a>
            {/* <Link
              class='social-icon-link instagram'
              to='/'
              target='_blank'
              aria-label='Instagram'
            >
              <i class='fab fa-instagram' />
            </Link> */}
            <a
              class='social-icon-link github'
              href='https://github.com/ashraf-kabir'
              target='_blank'
              aria-label='GitHub'
            >
              <i class='fab fa-github' />
            </a>
            {/* <a
              class='social-icon-link twitter'
              href='/'
              target='_blank'
              aria-label='Twitter'
            >
              <i class='fab fa-twitter' />
            </a> */}
            <a
              class='social-icon-link linkedin'
              href='https://www.linkedin.com/in/ashraf-kabir/'
              target='_blank'
              aria-label='LinkedIn'
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
