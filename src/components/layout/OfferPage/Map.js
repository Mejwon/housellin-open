import React from 'react';

const Map = ({ map }) => {
  return (
    <div className='offer-map'>
      <div className='offer-map__title'>
        <span className='h2-like title-accent'>Mapa</span>
      </div>
      <div className='offer-map__map'>
        <iframe
          src={map}
          width='600'
          height='450'
          frameBorder='0'
          allowFullScreen=''
          title='mapa'
        ></iframe>
      </div>
    </div>
  );
};

export default Map;
