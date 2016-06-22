import jsdom from 'jsdom';
import _$ from 'jquery';
import TestUtils from 'react-addons-test-utils';
import ReactDOM from 'react-dom';
import chai, { expect } from 'chai';
import React from 'react';
import chaiJquery from 'chai-jquery';

/* Set up testing environemnt in CLI, provide a dom in terminal. */
global.document = jsdom.jsdom('<!doctype html><html><body></body></html>');
global.window = global.document.defaultView;
global.navigator = {
  userAgent: ''
};

const $ = _$(global.window);

/**
 * Render component helper method used to render components into the created cli-DOM.
 * @param  {Component} ComponentClass React comonent
 *
 * @return {DOMElement} Wrapped jquery element node.
 */
function renderComponent(ComponentClass) {
  const domRef = TestUtils.renderIntoDocument(<ComponentClass />);

  return $(ReactDOM.findDOMNode(domRef)); // produces HTML
}

// Build a helper to simulate events

// Set up chai-jquery
chaiJquery(chai, chai.util, $);

export {
  renderComponent,
  expect
};
