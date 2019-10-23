import React, { Component } from 'react';
import './offer.scss';
import Item from './Item';
import { data } from '../../../../data/offers';

class Offer extends Component {
  state = {
    offerToLoad: 3
  };
  loadMoreOffer = () => {
    this.setState((prevState, props) => ({
      offerToLoad: prevState.offerToLoad + 3
    }));
  };
  render() {
    return (
      <div id='nasze-nieruchomosci' className='offer margin-section'>
        <div className='container'>
          <div>
            <h2 className='title-margin title-accent'>Nasze nieruchomości</h2>
          </div>
          <div className='columns is-multiline'>
            {data.map((offer, i) => {
              if (i < this.state.offerToLoad) {
                return <Item key={i} offer={offer} />;
              } else {
                return null;
              }
            })}
          </div>
          {data.length > this.state.offerToLoad && (
            <div className='link-center'>
              <button
                className='button button--main button--light-background'
                onClick={this.loadMoreOffer}
              >
                Więcej ofert
              </button>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default Offer;
