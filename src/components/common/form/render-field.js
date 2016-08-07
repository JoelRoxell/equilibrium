import React, { Component, PropTypes } from 'react';
import { classNames } from 'helpers';
import style from './style/input';

class RenderField extends Component {

  constructor(props) {
    super(props);
    this.onFocus = this.onFocus.bind(this);
    this.onBlur = this.onBlur.bind(this);

    this.state = { active: false };
  }

  onFocus() {
    this.setState({ active: true });
  }

  onBlur() {
    this.setState({ active: false });
  }

  renderError() {
    let node;

    if (Array.isArray(this.props.error)) {
      node = this.props.error.map((error, i) => {
        return (<span key={ i }>{ error }</span>);
      });
    } else {
      node = (<span>{ this.props.error }</span>);
    }

    return (
      <div className={ style.errorList }>
        { node }
      </div>
    );
  }

  render() {
    return (
      <div className={ style.input }>
        <input
          { ...this.props.input }
          onFocus={ this.onFocus }
          onBlur={ this.onBlur }
          className={ style.field }
          placeholder={ this.props.placeholder }
        />
        <div className={ classNames(style.marker, {
          [style.active]: this.state.active
        }) }>
        </div>
        <div className={ style.errorContainer }>
          { this.props.touched && this.props.error && this.renderError() }
        </div>
      </div>
    );
  }
}

RenderField.propTypes = {
  touched: PropTypes.bool,
  error: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array
  ]),
  active: PropTypes.bool,
  input: PropTypes.object,
  placeholder: PropTypes.string
};

export default RenderField;
