import React, { Component } from 'react';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isSubmited: false,
      formIsValid: false,
      subimtedFail: false,
      subimtedSuccess: false,
      formControls: {
        adress: {
          value: '',
          error: ['pole jest wymagane'],
          controlerIsValid: false,
          validationRule: {
            isRequired: true
          }
        },
        rooms: {
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
        size: {
          value: '',
          error: ['pole jest wymagane'],
          controlerIsValid: false,
          validationRule: {
            isRequired: true
          }
        },
        additional: {
          value: [],
          controlerIsValid: true
        },
        standard: {
          value: '',
          error: ['pole jest wymagane'],
          controlerIsValid: false,
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

    if (this.state.formIsValid) {
      this.setState({
        subimtedSuccess: true
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

  handleCheckboxChange = e => {
    const name = e.target.name;
    const value = e.target.value;
    const checked = e.target.checked;

    const updateFormControlers = {
      ...this.state.formControls
    };

    const updateControler = {
      ...updateFormControlers[name]
    };

    updateFormControlers[name] = updateControler;
    updateControler.value = this.checkBoxValue(value, checked, name);
    this.setState({
      formControls: updateFormControlers
    });
  };

  checkBoxValue = (value, checked, name) => {
    let values = this.state.formControls[name].value;
    if (checked) {
      values.push(value);
      return values;
    } else {
      return (values = values.filter(item => {
        return item !== value;
      }));
    }
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
          if (!isValid[rule]) error.push('email jest nie poprawny');
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

  render() {
    const { adress, rooms, size, standard, email } = this.state.formControls;

    return (
      <div className='form form--survey'>
        <div className='survey__title title-margin'>
          <span className='h2-like title-accent'>
            Wypełnij formularz i otrzymaj ofertę!
          </span>
        </div>
        <form id='form' acceptCharset='UTF-8' onSubmit={this.submitHandler}>
          <div className='columns is-multiline'>
            <div className='column is-6'>
              <div className='field'>
                <label className='label'>
                  Adres nieruchomości (miejscowość, ulica, numer domu, numer
                  lokalu )
                </label>
                <div className='control'>
                  <input
                    className='input'
                    type='text'
                    name='adress'
                    placeholder=''
                    onChange={this.handleChange}
                  />
                  {this.state.isSubmited && !adress.controlerIsValid && (
                    <div className='form__error'>{adress.error[0]}</div>
                  )}
                </div>
              </div>
            </div>
            <div className='column is-6'>
              <div className='field'>
                <label className='label'>
                  Jaką powierzchnię ma mieszkanie?
                </label>
                <div className='control'>
                  <input
                    className='input'
                    type='text'
                    name='size'
                    placeholder=''
                    onChange={this.handleChange}
                  />
                  {this.state.isSubmited && !size.controlerIsValid && (
                    <div className='form__error'>{size.error[0]}</div>
                  )}
                </div>
              </div>
            </div>
            <div className='column is-6'>
              <div className='field'>
                <label className='label'>Ile pokoi ma mieszkanie?</label>
                <div className='control'>
                  <input
                    className='input'
                    type='text'
                    name='rooms'
                    placeholder=''
                    onChange={this.handleChange}
                  />
                  {this.state.isSubmited && !rooms.controlerIsValid && (
                    <div className='form__error'>{rooms.error[0]}</div>
                  )}
                </div>
              </div>
            </div>
            <div className='column is-6'>
              <div className='field'>
                <label className='label'>
                  Na którym piętrze znajduje się mieszkanie??
                </label>
                <div className='control'>
                  <input
                    className='input'
                    type='text'
                    name='rooms'
                    placeholder=''
                    onChange={this.handleChange}
                  />
                  {this.state.isSubmited && !rooms.controlerIsValid && (
                    <div className='form__error'>{rooms.error[0]}</div>
                  )}
                </div>
              </div>
            </div>
            <div className='column is-6'>
              <div className='field'>
                <label className='label'>Udogodnienia mieszkania:</label>
                <div className='form__checkbox-item'>
                  <input
                    name='additional'
                    type='checkbox'
                    value='Winda'
                    onChange={this.handleCheckboxChange}
                  />
                  <span className='form__checkbox-label'>Winda</span>
                </div>
                <div className='form__checkbox-item'>
                  <input
                    name='additional'
                    type='checkbox'
                    value='Balkon lub taras'
                    onChange={this.handleCheckboxChange}
                  />
                  <span className='form__checkbox-label'>Balkon lub taras</span>
                </div>
                <div className='form__checkbox-item'>
                  <input
                    name='additional'
                    type='checkbox'
                    value='Piwnica lub komórka lokatorska'
                    onChange={this.handleCheckboxChange}
                  />
                  <span className='form__checkbox-label'>
                    Piwnica lub komórka lokatorska
                  </span>
                </div>
                <div className='form__checkbox-item'>
                  <input
                    name='additional'
                    type='checkbox'
                    value='Miejsce parkingow'
                    onChange={this.handleCheckboxChange}
                  />
                  <span className='form__checkbox-label'>
                    Miejsce parkingow
                  </span>
                </div>
                <div className='form__checkbox-item'>
                  <input
                    name='additional'
                    type='checkbox'
                    value='Klimatyzacja'
                    onChange={this.handleCheckboxChange}
                  />
                  <span className='form__checkbox-label'>Klimatyzacja</span>
                </div>
                <div className='form__checkbox-item'>
                  <input
                    name='additional'
                    type='checkbox'
                    value='Osobna kuchnia'
                    onChange={this.handleCheckboxChange}
                  />
                  <span className='form__checkbox-label'>Osobna kuchnia</span>
                </div>
              </div>
            </div>
            <div className='column is-6'>
              <div className='field'>
                <label className='label'>
                  Jak oceniasz standard mieszkania?:
                </label>
                <div className='form__checkbox-item'>
                  <input
                    name='standard'
                    type='radio'
                    value='Do kapitalnego remontu'
                    onChange={this.handleChange}
                  />
                  <span className='form__checkbox-label'>
                    Do kapitalnego remontu
                  </span>
                </div>
                <div className='form__checkbox-item'>
                  <input
                    name='standard'
                    type='radio'
                    value='Do rementu'
                    onChange={this.handleChange}
                  />
                  <span className='form__checkbox-label'>Do rementu</span>
                </div>
                <div className='form__checkbox-item'>
                  <input
                    name='standard'
                    type='radio'
                    value='Do odświeżenia'
                    onChange={this.handleChange}
                  />
                  <span className='form__checkbox-label'>Do odświeżenia</span>
                </div>
                <div className='form__checkbox-item'>
                  <input
                    name='standard'
                    type='radio'
                    value='Gotowe do wprowadzenia'
                    onChange={this.handleChange}
                  />
                  <span className='form__checkbox-label'>
                    Gotowe do wprowadzenia
                  </span>
                </div>
                <div className='form__checkbox-item'>
                  <input
                    name='standard'
                    type='radio'
                    value='Wysoki standard / luksusowe'
                    onChange={this.handleChange}
                  />
                  <span className='form__checkbox-label'>
                    Wysoki standard / luksusowe
                  </span>
                </div>
                {this.state.isSubmited && !standard.controlerIsValid && (
                  <div className='form__error'>{standard.error[0]}</div>
                )}
              </div>
            </div>
            <div className='column is-6'>
              <div className='field'>
                <label className='label'>Adres email do kontaktu</label>
                <div className='control'>
                  <input
                    className='input'
                    type='text'
                    name='email'
                    placeholder=''
                    onChange={this.handleChange}
                  />
                  {this.state.isSubmited && !email.controlerIsValid && (
                    <div className='form__error'>{email.error[0]}</div>
                  )}
                </div>
              </div>
            </div>
            <input type='hidden' name='_gotcha' />
            <div className='column is-12'>
              <button
                type='submit'
                className='button button--form button--light-background'
              >
                Wyślij wiadomość
              </button>
              {this.state.subimtedSuccess && (
                <div className='form__message message--succeed'>
                  Dziękujemy za wysłanie formularza. Skontaktujemy się tak
                  szybko jak to możliwe!
                </div>
              )}
              {this.state.subimtedFail && (
                <div className='form__message message--failed'>
                  Coś poszło nie tak. Spróbuj jeszcze raz lub skontaktuj się z
                  nami kontakt@housellin.pl
                </div>
              )}
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default Form;
