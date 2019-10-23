import React, { Component } from 'react';
import './newsletter.scss';

class Newsletter extends Component {
  render() {
    return (
      <div className='container'>
        <div className='newsletter'>
          <h2 className='text--accent-yellow'>
            ZAPISZ SIĘ, ABY NIE PRZEGAPIĆ NOWYCH OFERT
          </h2>
          <span className='newsletter__title text--md has-text-centered'>
            ZAPISZ SIĘ DO NEWSLETTERA:
          </span>
          <div className='newsletter__form-wrapper'>
            <div className='field field--newsletter'>
              <div className='control'>
                <input
                  className='input input--newsletter input-email'
                  type='email'
                  placeholder='Wprowadź adres email'
                />
              </div>
              <div className='control control--center'>
                <button className='button button--submit-newsletter button--dark-background'>
                  Zapisz Się
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Newsletter;
