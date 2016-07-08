import React, { Component, PropTypes } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { actions } from 'flow/auth';

class Signin extends Component {
  static propTypes = {
    handleSubmit: PropTypes.func,
    signInUser: PropTypes.func,
    dispatch: PropTypes.func,
    errorMessage: PropTypes.string
  };

  handleFormSubmit = ({ email, password }) => {
    this.props.dispatch(actions.signInUser({ email, password }));
  };

  renderErrorMessage() {
    console.log(this.props);
    if (this.props.errorMessage) {
      return (
        <div>
        { this.props.errorMessage }
        </div>
      );
    }
  }

  render() {
    const { handleSubmit } = this.props;

    return (
      <form onSubmit={ handleSubmit(this.handleFormSubmit) }>
        <div>
          <label>Email</label>
          <Field
            name='email'
            component='input'
            type='text'
            placeholder='email'
          />
        </div>
        <div>
          <label>Password</label>
          <Field
            name='password'
            component='input'
            type='password'
            placeholder='password'
          />
        </div>
        { this.renderErrorMessage() }
        <button
          action='submit'
          className=''
        >
          Sign in
        </button>
      </form>
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
