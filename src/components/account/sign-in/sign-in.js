import React, { Component, PropTypes } from 'react';
import { reduxForm } from 'redux-form';
import { actions } from 'flow/auth';
import { Input, SubmitButton } from 'components/common/form';
import { connect } from 'react-redux';

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
      <form
        className={ `${this.className}` }
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
});

export default connect(state => {
  return {
    errorMessage: state.auth.errorMessage
  };
})(form(SignIn));
