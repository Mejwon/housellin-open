import React from 'react';
import { Link } from 'react-router-dom';

const Item = ({ offer }) => {
  const { id, thumbnail, type, adress, location, price } = offer;
  return (
    <div className='column is-half-tablet is-one-third-desktop'>
      <Link to={`/oferta/${id}`}>
        <div className='offer-item'>
          <img src={thumbnail} alt={location} />

          <div className='offer-item__description'>
            <div>
              <span>{type} </span>
              <span>{adress.City}</span>
            </div>
            <div>
              <span>{location}</span>
            </div>
            <span className='offer-item__text-price'>{price} zł</span>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Item;
