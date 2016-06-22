import React from 'react';
import TestUtils from 'react-addons-test-utils';
import ReactDOM from 'react-dom';
import jsdom from 'jsdom';
import _$ from 'jquery';
import { expect } from 'chai';

/* Set up testing environemnt in CLI, provide a dom in terminal. */
global.document = jsdom.jsdom(`
    <!doctype html>
    <html>
      <body>
      </body>
    </html
  `);

global.window = global.document.defaultView;
const $ = _$(global.window);

/**
 * Render component helper method used to render components into the created cli-DOM.
 * @param  {Component} component React comonent
 *
 * @return {DOMElement} Wrapped jquery element node.
 */
function render(component) {
  const domRef = TestUtils.renderIntoDocument(<component />);

  return $(ReactDOM.findDOMNode(domRef));
}

// Build a helper to simulate events

// Set up chai-jquery

export {
  render,
  expect
};
