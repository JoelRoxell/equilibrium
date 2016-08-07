/* eslint no-unused-expressions: 0 */

import { expect } from 'helpers/test-helper';

import Navigation, { style } from 'components/navigation';

describe('#Navigation', () => {
  let node;

  beforeEach(function() {
    node = renderComponent(Navigation, document.getElementById('app'), {});
  });

  it('-Render', function() {
    expect(node).to.exist;
  });

  it('-Load style', function() {
    expect(node.className).to.equal(style.navigation);
  });
});
