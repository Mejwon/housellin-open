import React from 'react';
import './navbar.scss';
import logo from '../../../../src/assets/housellin_logo.png';

const Navbar = () => {
  const toogleMenuMobile = () => {
    document.querySelector('.navbar-menu').classList.toggle('is-active');
    document.querySelector('.navbar-burger').classList.toggle('is-active');
  };

  return (
    <nav
      className='navbar container'
      role='navigation'
      aria-label='main navigation'
    >
      <div className='navbar-brand'>
        <a className='navbar-item' href='/'>
          <img src={logo} alt='logo' />
        </a>

        <button
          className='navbar-burger'
          aria-label='menu'
          aria-expanded='false'
          onClick={toogleMenuMobile}
        >
          <span aria-hidden='true' />
          <span aria-hidden='true' />
          <span aria-hidden='true' />
        </button>
      </div>
      <div className='navbar-menu'>
        <a className='navbar-item' href='/#nasze-nieruchomosci'>
          Nasze nieruchomości
        </a>
        <a className='navbar-item' href='/#benefits'>
          Jakie są korzyści
        </a>
        <a className='navbar-item' href='/#hiw'>
          Jak to działa
        </a>
        <a className='navbar-item' href='/#advantages'>
          Co nas wyróżnia
        </a>
        <a className='navbar-item' href='/#faq'>
          FAQ
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
