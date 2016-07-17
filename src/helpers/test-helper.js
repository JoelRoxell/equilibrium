import jsdom from 'jsdom';
import _$ from 'jquery';
import TestUtils from 'react-addons-test-utils';
import ReactDOM from 'react-dom';
import chai, { expect } from 'chai';
import React from 'react';
import chaiJquery from 'chai-jquery';

/* Create testing environemnt in CLI, provide a dom in terminal. */
global.document = jsdom.jsdom('<!doctype html><html><body></body></html>');
global.window = global.document.defaultView;
global.navigator = {
  userAgent: ''
};
const $ = _$(global.window);

/**
 * Render component helper method used to render components into the created cli-DOM.
 *
 * @param  {Component} ComponentClass React component.
 *
 * @return {DOMElement} Wrapped jquery element node.
 */
function renderComponent(ComponentClass) {
  const domRef = TestUtils.renderIntoDocument(<ComponentClass />);

  return $(ReactDOM.findDOMNode(domRef)); // produces HTML
}

/**
 * Event simulator using react Test Utilities.
 *
 * @param  {String} eventName Event type to simulate.
 * @param  {Mixed} value      Value to trigger event with.
 */
$.fn.simulate = function(eventName, value) {
  if (value) {
    this.val(value);
  }

  TestUtils.Simulate[eventName](this[0]); // Trigger a simulate event with passed node.
};

// Set up chai-jquery
chaiJquery(chai, chai.util, $);

// Hook key functions on global scope to skip import in each spec file.
global.renderComponent = renderComponent;
global.expect = expect;

export {
  renderComponent,
  expect
};
