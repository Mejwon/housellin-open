import React, { Component } from 'react';

export default class Description extends Component {
  render() {
    return (
      <div className={this.props.class}>
        <div className='offer-description__title'>
          <span className='h2-like title-accent'>Opis ogłoszenia</span>
        </div>
        {this.props.description.map((txt, index) => {
          return (
            <p key={index} className='offer-description__text'>
              {txt}
            </p>
          );
        })}
      </div>
    );
  }
}
