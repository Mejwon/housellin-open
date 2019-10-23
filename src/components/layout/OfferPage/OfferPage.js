import React, { Component } from 'react';
import ImageGallery from 'react-image-gallery';
import { Redirect } from 'react-router';
import Form from './Form';
import Map from './Map';
import Info from './Info';
import Description from './Description';
import './offerPage.scss';
import { data } from '../../../data/offers';

class Oferta extends Component {
  constructor(props) {
    super(props);
    this.state = {
      offers: data,
      offer: null,
      email: ''
    };
  }

  getOffer = () => {
    const offer = this.state.offers.find(oferta => {
      return this.props.match.params.id === String(oferta.id);
    });
    this.setState({ offer: offer });
  };

  componentWillMount() {
    this.getOffer();
  }

  render() {
    if (this.state.offer != null) {
      const {
        img,
        price,
        type,
        adress,
        location,
        additionalInfo,
        description,
        map,
        id
      } = this.state.offer;
      return (
        <div className='container'>
          <div className='columns is-multiline'>
            <div className='column is-12'>
              <ImageGallery items={img} />
              <div className='offer-top'>
                <div className='offer-top__content'>
                  <p className='offer-top__text-price'>{price} zł</p>
                  <div className='offer-top__text-accent-wrapper'>
                    <p className='offer-top__text-accent'>
                      {type}, {adress.City} {adress.street}
                    </p>
                  </div>
                  <div className='offer-top__text-location-wrapper'>
                    <p className='offer-top__text-location'>{location}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className='column is-8'>
              <Description
                description={description}
                class={'offer-description-tablet'}
              />
            </div>
            <div className='column is-4'>
              <Info additionalInfo={additionalInfo} />
            </div>
          </div>
          <div className='columns'>
            <div className='column'>
              <Description
                description={description}
                class={'offer-description-mobile'}
              />
            </div>
          </div>
          <div className='columns'>
            <div className='column is-8'>
              <Map map={map} />
            </div>
          </div>
          <div className='columns'>
            <div className='column is-8'>
              <Form offer={id} />
            </div>
          </div>
        </div>
      );
    } else {
      return <Redirect to='/not-found' />;
    }
  }
}

export default Oferta;
