import React, { Component, PropTypes } from 'react';
import { reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { Input, SubmitButton } from 'components/common/form';
import { Link } from 'react-router';
import { formValidator } from 'helpers';
import { actions } from 'flux/auth';
import style from './style/register';

class Register extends Component {
  constructor(props) {
    super(props);

    this.handleRegistrationSubmit = this.handleRegistrationSubmit.bind(this);
  }

  /**
   * Renders error messages originating from server side.
   *
   * @return {ReactElement} Html block.
   */
  renderErrorMessage() {
    if (this.props.errorMessage) {
      return (
        <div className={ style.errorWrapper }>
          { this.props.errorMessage }
        </div>
      );
    }
  }

  handleRegistrationSubmit(form) {
    this.props.dispatch(actions.createUser({
      email: form.email, password: form.password
    }));
  }

  render() {
    let { handleSubmit } = this.props;

    return (
      <div className={ style.register }>
        <form
          className={ style.form }
          onSubmit={ handleSubmit(this.handleRegistrationSubmit) }
        >
          <div className={ style.fieldWrapper }>
            <Input
              name='email'
              component='input'
              type='text'
              placeholder='Email'
            />
          </div>
          <div className={ style.fieldWrapper }>
            <Input
              name='password'
              component='input'
              type='password'
              placeholder='Password'
            />
          </div>
          <div className={ style.fieldWrapper }>
            <Input
              name='confirmPassword'
              component='input'
              type='password'
              placeholder='Confirm password'
            />
          </div>
          { this.renderErrorMessage() }
          <div className={ style.submitWrapper }>
            <SubmitButton text='Register' />
          </div>
        </form>
        <div className={ style.footer }>
          { `Already have an account? ` }
          <Link to='/account/signin'>
            { `Sign in here` }
          </Link>
        </div>
      </div>
    );
  }
}

Register.propTypes = {
  handleSubmit: PropTypes.func,
  dispatch: PropTypes.func,
  errorMessage: PropTypes.string
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
        message: 'Password is a required field.',
        rules: [
          {
            rule: function(value) {
              return value.length > 5;
            },
            message: 'Plase enter a password longer than 5 characters.'
          }
        ]
      },
      confirmPassword: {
        type: 'password',
        message: 'Password must be confirmed.',
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

export default connect(state => {
  return {
    errorMessage: state.auth.errorMessage
  };
})(form(Register));
