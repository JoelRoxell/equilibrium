import React, { Component, PropTypes } from 'react';
import { reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { actions } from 'flow/auth';
import { Link } from 'react-router';
import { Input, SubmitButton } from 'components/common/form';

/**
 * Sign in form component
 */
class SignIn extends Component {
  constructor(props) {
    super(props);

    this.className = 'sign-in'; // Should be a static variable, jsdoc can't parse it atm.
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
        <div className={ `${this.className}-error-wrapper` }>
          { this.props.errorMessage }
        </div>
      );
    }
  }

  render() {
    const { handleSubmit } = this.props;

    return (
      <div className={ this.className }>
        <div className={ `${this.className}-header` }>
          <div className={ `${this.className}-welcome-text` }>
            { `Welcome` }
          </div>
          <div className={ `${this.className}-title` }>
            { `Sign in,` }
            <span> { `some more descriptive text.` }</span>
          </div>
        </div>
        <form
          className={ `${this.className}-form` }
          onSubmit={ handleSubmit(this.handleFormSubmit) }
        >
          <div className={ `${this.className}-field-wrapper` }>
            <Input
              name='email'
              component='input'
              type='text'
              placeholder='Email'
            />
          </div>
          <div className={ `${this.className}-field-wrapper` }>
            <Input
              name='password'
              component='input'
              type='password'
              placeholder='password'
            />
          </div>
          { this.renderErrorMessage() }
          <div className={ `${this.className}-submit-wrapper` }>
            <SubmitButton text='Sign in' />
          </div>
        </form>
        <div className={ `${this.className}-footer` }>
          { `Don't have an account? ` }
          <Link to='/register'>{ `Register here` }</Link>
        </div>
      </div>
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

/**
 * Validates signin form.
 *
 * @param {OBject} form Object containing specified redux-form properies.
 *
 * @return {Object} Error message object used by redux-form.
 */
function validateSignIn(form) {
  const fields = {
      email: {
        type: 'text',
        message: 'Please enter an email address.'
      },
      password: {
        type: 'password',
        message: 'Please enter a password.'
      }
    },
    errors = {};

  Object.keys(fields).forEach(attr => {
    if (!form.hasOwnProperty(attr)) {
      errors[attr] = fields[attr].message;
    }
  });

  return errors;
}

// Had to wrapp with connect, reduxForm mapStateToProp isn't working...
export default connect(state => {
  return {
    errorMessage: state.auth.errorMessage,
    errors: state.form.sigin
  };
})(reduxForm({
  form: 'signin',
  fields: ['email', 'password'],
  validateSignIn
})(SignIn));
