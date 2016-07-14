import React, { Component, PropTypes } from 'react';
import { reduxForm } from 'redux-form';
import { Input, SubmitButton } from 'components/common/form';
import { Link } from 'react-router';
import { formValidator } from 'helpers';

class Register extends Component {
  constructor(props) {
    super(props);

    this.handleRegistrationSubmit = this.handleRegistrationSubmit.bind(this);
  }

  handleRegistrationSubmit(form) {
    console.log('handleRegistrationSubmit', form);
  }

  render() {
    const className = 'account-register',
      { handleSubmit } = this.props;

    return (
      <div className={ className }>
        <form
          className={ `${className}-form` }
          onSubmit={ handleSubmit(this.handleRegistrationSubmit) }
        >
          <div className={ `${className}-field-wrapper` }>
            <Input
              name='email'
              component='input'
              type='text'
              placeholder='Email'
            />
          </div>
          <div className={ `${className}-field-wrapper` }>
            <Input
              name='password'
              component='input'
              type='password'
              placeholder='Password'
            />
          </div>
          <div className={ `${className}-field-wrapper` }>
            <Input
              name='confirmPassword'
              component='input'
              type='password'
              placeholder='Confirm password'
            />
          </div>
          <div>
            <SubmitButton text='Register' />
          </div>
          <div className={ `${this.className}-footer` }>
            { `Already have an account? ` }
            <Link to='/account/signin'>{ `Sign in here` }</Link>
          </div>
        </form>
      </div>
    );
  }
}

Register.propTypes = {
  handleSubmit: PropTypes.func
};

let form = reduxForm({
  form: 'register',
  fields: ['email', 'password', 'confirmPassword'],
  validate(form) {
    const fieldRules = {
      email: {
        type: 'text',
        message: 'Email is a required field.'
      },
      password: {
        type: 'password',
        rules: [
          {
            rule: function(value) {
              return value.length > 6;
            },
            message: 'Plase enter a password longer than 5 characters.'
          }
        ]
      },
      confirmPassword: {
        type: 'password',
        rules: [
          {
            rule: function() {
              return form.password === form.confirmPassword;
            },
            message: 'Confirm password must match password'
          }
        ]
      }
    };

    return formValidator(form, fieldRules);
  }
});

export default form(Register);
