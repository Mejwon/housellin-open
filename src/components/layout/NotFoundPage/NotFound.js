import React from 'react';
import { Link } from 'react-router-dom';
import './notFound.scss';

const NotFound = () => {
  return (
    <div className='container'>
      <div className='not-found'>
        <p className='h2-like not-found__text'>Nie znaleziono strony</p>
        <i class='far fa-sad-tear'></i>
        <Link to='/' className='text--md'>
          Wróc do strony głównej
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
