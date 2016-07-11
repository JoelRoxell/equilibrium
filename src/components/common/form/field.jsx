import React, { Component, PropTypes } from 'react';
import { classNames } from 'helpers';

class RenderField extends Component {

  constructor(props) {
    super(props);

    this.state = { active: false };
  }

  onFocus = () => {
    this.setState({ active: true });
  }

  onBlur = () => {
    this.setState({ active: false });
  }

  render() {
    return (
      <div className='input'>
        <input
          { ...this.props.input }
          onFocus={ this.onFocus }
          onBlur={ this.onBlur }
        />
        <div className={ classNames('input-marker', {
          active: this.state.active
        }) }>
        </div>
        <div className='input-error-container'>
          { this.props.touched && this.props.error && <span>{ this.props.error }</span> }
        </div>
      </div>
    );
  }
}

RenderField.propTypes = {
  touched: PropTypes.bool,
  error: PropTypes.string,
  active: PropTypes.bool,
  input: PropTypes.object
};

export default RenderField;
