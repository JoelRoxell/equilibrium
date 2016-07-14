import React, { Component } from 'react';
import RenderField from './render-field';
import { Field } from 'redux-form';
import style from './style/input';

class Input extends Component {
  render() {
    return (
      <Field
        { ...this.props }
        className={ style.field }
        component={ RenderField }
      />
    );
  }
}

export default Input;
