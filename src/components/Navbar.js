import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import pdf from '../components/documents/ashraf-kabir-cv.pdf';
import './Navbar.css';

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            <i class='fas fa-code' />&nbsp;Ashraf
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                Home
              </Link>
            </li>

            <li className='nav-item'>
              <a
                href='https://blog.ashrafkabir.com/'
                target='_blank'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Blog
              </a>
            </li>

            <li className='nav-item'>
              <a
                href='#projects'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Projects
              </a>
            </li>

            <li className='nav-item'>
              <a
                href={pdf}
                target='_blank'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                CV
              </a>
            </li>

            <li className='nav-item'>
              <a href='#contact' className='nav-links' onClick={closeMobileMenu}>
                Contact
              </a>
            </li>
          </ul>
          {/* {button && <Button buttonStyle='btn--outline'>SIGN UP</Button>} */}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
