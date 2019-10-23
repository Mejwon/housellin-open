import React from 'react';
import { Link } from 'react-router-dom';
import './clearCosts.scss';
import img from '../../../../assets/19.jpg';
import img2 from '../../../../assets/20.jpg';

const ClearCosts = () => {
  return (
    <div id='clear-costs' className='container'>
      <h2 className='title-margin title-accent'>
        Jasne i przejrzyste koszty sprzedaży z Housellin
      </h2>
      <div className='columns is-gapless-dekstop is-marginless columns-reverse-desktop is-multiline'>
        <div className='column is-full-mobile is-paddingless-desktop'>
          <div className='clear-cost__desc-wrapper'>
            <div className='clear-cost__desc'>
              Oferta, którą od nas otrzymasz będzie oparta o wycenę rynkową
              Twojej nieruchomości. Od tje ceony odejmiemy koszty związane z
              procesem sprzedaży od Housellin.
            </div>
            <div className='link-center'>
              <Link
                to={'/ankieta'}
                className='button button--main button--light-background'
              >
                Uzyskaj Ofertę
              </Link>
            </div>
          </div>
        </div>
        <div className='column is-full-mobile is-paddingless-desktop is-flex'>
          <img src={img} alt='' />
        </div>
      </div>
      <div className='columns is-gapless-dekstop is-marginless is-multiline columns-row-desktop '>
        <div className='column is-paddingless-desktop is-flex'>
          <img src={img2} alt='' />
        </div>
        <div className='column is-paddingless-desktop'>
          <div className='clear-cost__desc-wrapper'>
            <div className='clear-cost__equations'>
              <div className='clear-cost__equation-item'>
                <span></span>
                <span>wycena Housellin</span>
              </div>
              <div className='clear-cost__equation-item'>
                <i className='fas fa-minus'></i>
                <span>wycena napraw</span>
              </div>
              <div className='clear-cost__equation-item'>
                <i className='fas fa-minus'></i>
                <span>koszty transakcyjne</span>
              </div>
              <hr></hr>
              <div className='clear-cost__equation-item'>
                <i className='fas fa-equals'></i>
                <span className='text--accent'>Twoje wynagrodzenie</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClearCosts;
