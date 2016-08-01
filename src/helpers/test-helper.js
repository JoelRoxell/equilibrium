import TestUtils from 'react-addons-test-utils';
import ReactDOM from 'react-dom';
import { expect } from 'chai';
import React from 'react';

/**
 * Render component helper method, used to render components into the created cli-DOM.
 *
 * @param  {Component} ComponentClass React component.
 *
 * @return {DOMElement} Wrapped jquery element node.
 */
function renderComponent(ComponentClass) {
  const domRef = TestUtils.renderIntoDocument(<ComponentClass />);

  return ReactDOM.findDOMNode(domRef); // produces HTML
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
  renderComponent,
  expect
};
