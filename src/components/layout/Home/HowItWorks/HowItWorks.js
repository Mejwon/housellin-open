import React from 'react';
import { Link } from 'react-router-dom';
import './howItWorks.scss';
import ContractIcon from '../../../../utilities/ContractIcon';
import MeetingIcon from '../../../../utilities/MeetingIcon';
import FundsIcon from '../../../../utilities/FundsIcon';

const HowItWorks = () => {
  return (
    <div id='hiw' className='container margin-section'>
      <div className='columns'>
        <div className='column'>
          <h2 className='title-margin title-accent'>Jak to działa?</h2>
          <div className='hiw__title text--md has-text-centered'>
            Housellin kupuje Twoją nieruchomość w imieniu dużych,
            profesjonalnych inwestorów. Daje to pewność natychmiastowej
            sprzedaży i terminowej zapłaty.
          </div>
        </div>
      </div>
      <div className='columns is-multiline'>
        <div className='column is-offset-one-fifth-desktop is-full is-three-fifths-desktop'>
          <div className='hiw-item'>
            <div className='columns'>
              <div className='column is-4 hiw-item__icon-position icon-position--left'>
                <ContractIcon class={'hiw-item__icon'} fill='#f7e4a2' />
              </div>
              <div className='column is-8'>
                <div className='hiw-item__title text--md'>
                  Wypełnij formularz online
                </div>
                <div className='hiw-item__description font--sm'>
                  Wystarczy, że odpowiesz na kilka pytań dotyczących mieszkania
                  i prześlesz parę zdjęć. Nie musisz niczego czyścić i
                  remontować!
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='column is-offset-one-fifth-desktop is-full is-three-fifths-desktop'>
          <div className='hiw-item'>
            <div className='columns columns-revers-mobile'>
              <div className='column is-8'>
                <div className='hiw-item__title text--md'>
                  Spotkaj się z naszym doradcą w mieszkaniu
                </div>
                <div className='hiw-item__description font--sm'>
                  Wystarczy, że odpowiesz na kilka pytań dotyczących mieszkania
                  i prześlesz parę zdjęć. Nie musisz niczego czyścić i
                  remontować!
                </div>
              </div>
              <div className='column is-4 hiw-item__icon-position icon-position--right'>
                <MeetingIcon class={'hiw-item__icon'} fill='#f7e4a2' />
              </div>
            </div>
          </div>
        </div>
        <div className='column is-offset-one-fifth-desktop is-full is-three-fifths-desktop'>
          <div className='hiw-item'>
            <div className='columns'>
              <div className='column is-4 hiw-item__icon-position icon-position--left'>
                <FundsIcon class={'hiw-item__icon'} fill='#f7e4a2' />
              </div>
              <div className='column is-8'>
                <div className='hiw-item__title text--md'>
                  Wybierz datę i otrzymaj gotówkę w ciągu kilku dni
                </div>
                <div className='hiw-item__description font--sm'>
                  Po zaakceptowaniu oferty, to Ty wybierasz datę wyprowadzki. My
                  zajmiemy się organizacją wszystkich formalności i przygotujemy
                  płatność.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='link-center'>
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

export default HowItWorks;
