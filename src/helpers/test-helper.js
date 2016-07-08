import TestUtils from 'react-addons-test-utils';
import ReactDOM from 'react-dom';
import { expect } from 'chai';
import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import reducers from 'flux/reducers';

const store = createStore(reducers, compose(
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )
);

/**
 * Render component helper method, used to render components into the created cli-DOM.
 *
 * @param {Component} ComponentClass React component.
 * @param {DOMElement} container DOM element used to mount the react component.
 * @param {Object} props Component properties
 *
 * @return {DOMElement} Wrapped jquery element node.
 */
function renderComponent(ComponentClass, container, props) {
  const ref = ReactDOM.render(
    <Provider store={ store } >
      <ComponentClass { ...props } />
    </Provider>,
    container
  );

  return ReactDOM.findDOMNode(ref);
}

/**
 * Event simulator using react Test Utilities.
 *
 * @param  {String} eventName Event type to simulate.
 * @param  {Mixed} value      Value to trigger event with.
 */
function simulate(eventName, value) {
  if (value) {
    this.val(value);
  }

  TestUtils.Simulate[eventName](this); // Trigger a simulate event with passed node.
}

// Hook key functions on global scope to skip import in each spec file.
window.renderComponent = renderComponent;
window.expect = expect;

export {
  simulate,
  renderComponent,
  expect
};
