/* eslint no-unused-expressions: 0 */
import {
  renderComponent,
  expect
} from '../../../../util/test-helper';
import App from 'components/app';

describe('Navigation', () => {
  let component;

  beforeEach(() => {
    component = renderComponent(App);
  });

  it('Renders', () => {
    expect(component.find('.navigation')).to.exist;
  });
});
