import React from 'react';
import * as Utils from '../../../utilities/Utils';

const Info = ({ additionalInfo }) => {
  return (
    <div className='infos'>
      {Utils.mapObject(additionalInfo, (key, value) => {
        return (
          <div key={key} className='info-item'>
            <span className='info-item__key'>{key}:</span>{' '}
            <span className='info-item__value'>{value}</span>
          </div>
        );
      })}
    </div>
  );
};

export default Info;
