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
            { `Don't have an account? ` }
            <Link to='/account/register'>{ `Register here` }</Link>
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
      }
    };
    console.log('TODO: validate registration.');

    return formValidator(form, fieldRules);
  }
});

export default form(Register);
