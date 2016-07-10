import React, { Component, PropTypes } from 'react';
import { reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { actions } from 'flow/auth';
import { Link } from 'react-router';
import { Input, SubmitButton } from 'components/common/form';

class Signin extends Component {
  static propTypes = {
    handleSubmit: PropTypes.func,
    signInUser: PropTypes.func,
    dispatch: PropTypes.func,
    errorMessage: PropTypes.string
  };

  static className = 'sign-in';

  handleFormSubmit = ({ email, password }) => {
    this.props.dispatch(actions.signInUser({ email, password }));
  };

  renderErrorMessage() {
    if (this.props.errorMessage) {
      return (
        <div className={ `${Signin.className}-error-wrapper` }>
          { this.props.errorMessage }
        </div>
      );
    }
  }

  render() {
    const { handleSubmit } = this.props;

    return (
      <div className={ Signin.className }>
        <div className={ `${Signin.className}-header` }>
          <div className={ `${Signin.className}-welcome-text` }>
            { `Welcome` }
          </div>
          <div className={ `${Signin.className}-title` }>
            { `Sign in,` }
            <span> { `some more descriptive text.` }</span>
          </div>
        </div>
        <form
          className={ `${Signin.className}-form` }
          onSubmit={ handleSubmit(this.handleFormSubmit) }
        >
          <div className={ `${Signin.className}-field-wrapper` }>
            <Input
              name='email'
              component='input'
              type='text'
              placeholder='Email'
            />
          </div>
          <div className={ `${Signin.className}-field-wrapper` }>
            <Input
              name='password'
              component='input'
              type='password'
              placeholder='password'
            />
          </div>
          { this.renderErrorMessage() }
          <div className={ `${Signin.className}-submit-wrapper` }>
            <SubmitButton text='Sign in' />
          </div>
        </form>
        <div className={ `${Signin.className}-footer` }>
          { `Don't have an account? ` }
          <Link to='/register'>{ `Register here` }</Link>
        </div>
      </div>
    );
  }
}

// Had to wrapp with connect, reduxForm mapStateToProp isn't working...
export default connect(state => {
  return {
    errorMessage: state.auth.errorMessage
  };
})(reduxForm({
  form: 'signin',
  fields: ['email', 'password']
})(Signin));
