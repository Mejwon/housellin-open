import React, { Component } from 'react';
import axios from 'axios';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isSubmited: false,
      formIsValid: false,
      subimtedFail: false,
      subimtedSuccess: false,
      formControls: {
        imie_i_nazwisko: {
          value: '',
          error: ['pole jest wymagane'],
          controlerIsValid: false,
          validationRule: {
            isRequired: true
          }
        },
        telefon: {
          value: '',
          error: ['pole jest wymagane'],
          controlerIsValid: false,
          validationRule: {
            isRequired: true
          }
        },
        email: {
          value: '',
          error: ['pole jest wymagane'],
          controlerIsValid: false,
          validationRule: {
            isRequired: true,
            isEmail: true
          }
        },
        message: {
          value: '',
          controlerIsValid: false,
          error: ['pole jest wymagane'],
          validationRule: {
            isRequired: true
          }
        }
      }
    };
  }

  submitHandler = e => {
    this.setState({
      isSubmited: true
    });

    const data = this.dataBuilder();
    if (this.state.formIsValid) {
      axios
        .post('formcarry', data, {
          headers: { Accept: 'application/json' }
        })
        .then(response => {
          if (response.data.status === 'success') {
            this.setState({
              subimtedSuccess: true
            });
            setTimeout(() => {
              this.setState({
                subimtedSuccess: false
              });
            }, 5000);
          } else {
            this.setState({
              subimtedFail: true
            });
          }
        })
        .catch(function(error) {
          console.log(error);
        });
    }
    e.preventDefault();
  };

  handleChange = e => {
    const name = e.target.name;
    const value = e.target.value;

    const updateFormControlers = {
      ...this.state.formControls
    };

    const updateControler = {
      ...updateFormControlers[name]
    };

    var validation = this.formValidator(
      value,
      this.state.formControls[name].validationRule
    );

    updateFormControlers[name] = updateControler;

    updateControler.value = value;
    updateControler.error = validation[0];
    updateControler.controlerIsValid = validation[1];

    let formIsValid = true;
    for (let rule in updateFormControlers) {
      formIsValid = formIsValid && updateFormControlers[rule].controlerIsValid;
    }
    this.setState({
      formControls: updateFormControlers,
      formIsValid: formIsValid
    });
  };

  formValidator = (value, rules) => {
    let isValid = {};
    let error = [];
    let controlerIsValid = true;
    for (let rule in rules) {
      switch (rule) {
        case 'isRequired':
          isValid[rule] = this.requiredValidator(value);
          if (!isValid[rule]) error.push('pole jest wymagane');
          controlerIsValid = controlerIsValid && isValid[rule];
          break;
        case 'isEmail':
          isValid[rule] = this.emailValidator(value);
          if (!isValid[rule]) error.push('mail jest nie poprawny');
          controlerIsValid = controlerIsValid && isValid[rule];
          break;
        default:
          controlerIsValid = true;
          break;
      }
    }
    return [error, controlerIsValid];
  };

  requiredValidator = value => {
    return value.trim() !== '';
  };

  emailValidator = value => {
    // eslint-disable-next-line
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(value).toLowerCase());
  };

  dataBuilder = () => {
    let data = {};
    for (let x in this.state.formControls) {
      data[x] = this.state.formControls[x].value;
    }
    data['oferta'] = this.props.offer;
    return data;
  };

  render() {
    const {
      imie_i_nazwisko,
      telefon,
      email,
      message
    } = this.state.formControls;

    return (
      <div className='form form--offer'>
        <div className='form__title title-margin'>
          <span className='h2-like title-accent'>Skontaktuj się z nami</span>
        </div>
        <form id='form' acceptCharset='UTF-8' onSubmit={this.submitHandler}>
          <div className='field'>
            <div className='control'>
              <input
                className='input'
                type='text'
                name='imie_i_nazwisko'
                placeholder='Imię i nazwisko'
                onChange={this.handleChange}
              />
              {this.state.isSubmited && !imie_i_nazwisko.controlerIsValid && (
                <div className='form__error'>{imie_i_nazwisko.error[0]}</div>
              )}
            </div>
          </div>
          <div className='field'>
            <div className='control'>
              <input
                className='input'
                type='text'
                name='telefon'
                placeholder='Numer telefonu'
                onChange={this.handleChange}
              />
              {this.state.isSubmited && !telefon.controlerIsValid && (
                <div className='form__error'>{telefon.error[0]}</div>
              )}
            </div>
          </div>
          <div className='field'>
            <div className='control'>
              <input
                className='input'
                type='email'
                name='email'
                placeholder='Adres Email'
                onChange={this.handleChange}
              />
              {this.state.isSubmited && !email.controlerIsValid && (
                <div className='form__error'>{email.error[0]}</div>
              )}
            </div>
          </div>
          <div className='field'>
            <div className='control'>
              <textarea
                className='textarea'
                type='text'
                name='message'
                placeholder='Treść wiadomości'
                onChange={this.handleChange}
              ></textarea>
              {this.state.isSubmited && !message.controlerIsValid && (
                <div className='form__error'>{message.error[0]}</div>
              )}
            </div>
          </div>
          <input type='hidden' name='_gotcha' />
          <button
            type='submit'
            className='button button--form button--light-background'
          >
            Wyślij wiadomość
          </button>
          {this.state.subimtedSuccess && (
            <div className='form__message message--succeed'>
              Dziękujemy za wysłanie formularza. Skontaktujemy się tak szybko
              jak to możliwe!
            </div>
          )}
          {this.state.subimtedFail && (
            <div className='form__message message--failed'>
              Coś poszło nie tak. Spróbuj jeszcze raz lub skontaktuj się z nami
              kontakt@housellin.pl
            </div>
          )}
        </form>
      </div>
    );
  }
}

export default Form;
