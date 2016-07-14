import React, { Component, PropTypes } from 'react';
import { reduxForm } from 'redux-form';
import { actions } from 'flow/auth';
import { Input, SubmitButton } from 'components/common/form';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { formValidator } from 'helpers';
import style from './style/sign-in';

/**
 * Sign in form component
 */
class SignIn extends Component {
  constructor(props) {
    super(props);

    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  /**
   * Dispatch a created action based on passed email and password.
   *
   * @param  {Object} FormProp  contains the specifed form properties(emal, password).
   */
  handleFormSubmit({ email, password }) {
    this.props.dispatch(actions.signInUser({ email, password }));
  }

  /**
   * Renders error message passed from server.
   *
   * @return {Compnent} Html block.
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

  render() {
    const { handleSubmit } = this.props;

    return (
      <form
        className={ style.signIn }
        onSubmit={ handleSubmit(this.handleFormSubmit) }
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
            placeholder='password'
          />
        </div>
        { this.renderErrorMessage() }
        <div className={ style.submitWrapper }>
          <SubmitButton text='Sign in' />
        </div>
        <div className={ style.footer }>
          { `Don't have an account? ` }
          <Link to='/account/register'>{ `Register here` }</Link>
        </div>
      </form>
    );
  }
}

SignIn.propTypes = {
  handleSubmit: PropTypes.func,
  signInUser: PropTypes.func,
  dispatch: PropTypes.func,
  errorMessage: PropTypes.string,
  errors: PropTypes.shape()
};

let form = reduxForm({
  form: 'signin',
  fields: ['email', 'password'],
  validate(form) {
    const fieldRules = {
      email: {
        type: 'text',
        message: 'Please enter an email address.'
      },
      password: {
        type: 'password',
        message: 'Please enter a password.',
        rules: [
          {
            criteria: function(value) {
              return value > 6;
            },
            message: 'Length must be greater than 6.'
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
})(form(SignIn));
