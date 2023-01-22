import React, { useState } from 'react';
import { Link, withRouter } from 'react-router-dom';
import pdf from '../../components/documents/ashraf-kabir-cv.pdf';
import './Navbar.css';

const isActive = (history, path) => {
  if (history.location.pathname === path) {
    return { borderBottom: '4px solid #fff' };
  } else {
    return { color: '#ffffff' };
  }
};

const Navbar = ({ history }) => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            <i class='fas fa-code' />
            &nbsp;Ashraf
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link
                style={isActive(history, '/')}
                to='/'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Home
              </Link>
            </li>

            {/* <li className='nav-item'>
              <a
                href='https://blog.ashrafkabir.com/'
                target='_blank'
                className='nav-links'
                onClick={closeMobileMenu}
                rel='noreferrer'
              >
                Blog
              </a>
            </li> */}

            <li className='nav-item'>
              <a
                href='/#projects'
                className='nav-links'
                onClick={closeMobileMenu}
                rel='noreferrer'
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
                rel='noreferrer'
              >
                CV
              </a>
            </li>

            <li className='nav-item'>
              <a
                href='/#contact'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Contact
              </a>
            </li>
          </ul>
          {/* {button && <Button buttonStyle='btn--outline'>SIGN UP</Button>} */}
        </div>
      </nav>
    </>
  );
};

export default withRouter(Navbar);
