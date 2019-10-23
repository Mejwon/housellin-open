import React, { Component } from 'react';
import './survey.scss';
import Form from './Form';

class Survey extends Component {
  render() {
    return (
      <div className='container'>
        <div className='columns'>
          <div className='column'>
            <Form />
          </div>
        </div>
      </div>
    );
  }
}

export default Survey;
