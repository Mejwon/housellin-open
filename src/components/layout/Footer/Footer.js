import React from 'react';
import './footer.scss';
import { Link } from 'react-router-dom';
import logo from '../../../assets/housellin_logo.png';

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='container footer__content'>
        <div className='columns'>
          <div className='column is-7 footer__logo-wrapper'>
            <img className='footer__logo' src={logo} alt='logo' />
          </div>
          <div className='column is-5 footer__links'>
            <Link to='/polityka-prywatnosci' className=''>
              Polityka Prywatności
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
