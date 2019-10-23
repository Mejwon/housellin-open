import React from 'react';
import { Link } from 'react-router-dom';
import './getOffer.scss';

const GetOffer = () => {
  return (
    <div className='container get-offer'>
      <div className='get-offer__content'>
        <h1 className='has-text-centered'>
          Najłatwiejszy sposób sprzedaży mieszkania
        </h1>
        <div className='get-offer__font-position '>
          <p className='font--sm has-text-centered'>
            Sprzedaj mieszkanie szybko i bezstresowo. W 48h otrzymasz rynkową
            ofertę kupna za gotówkę. Sprawdź, co możemy Ci zaproponować.
          </p>
        </div>
        <Link
          to={'/ankieta'}
          className='button button--main button--dark-background'
        >
          Uzyskaj Ofertę
        </Link>
      </div>
    </div>
  );
};

export default GetOffer;
