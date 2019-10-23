import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './cookies.scss';

class Cookies extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: true
    };
  }

  accept = () => {
    var obj = { accept: 'true', date: Date.now() };
    localStorage.setItem('privacy-politcy', JSON.stringify(obj));
    this.setState({
      show: false
    });
  };

  componentDidMount() {
    let cookie = localStorage.getItem('privacy-politcy');
    cookie = JSON.parse(cookie);
    if (cookie != null) {
      var date = cookie.date + 31556952000; //Adding one year to date
      if (cookie.accept === 'true' && Date.now() < date) {
        this.setState({
          show: false
        });
      }
    }
  }

  render() {
    return (
      this.state.show && (
        <div className='cookies'>
          <div className='container'>
            <div className='cookies__content'>
              <span>
                Korzystając z serwisu zgadzasz się na naszą{' '}
                <Link to='/polityka-prywatnosci'>politykę prywatności</Link>
              </span>
              <button
                className='button button--dark-background cookies__button'
                onClick={this.accept}
              >
                Akceptuję
              </button>
            </div>
          </div>
        </div>
      )
    );
  }
}

export default Cookies;
