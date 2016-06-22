/* eslint no-unused-expressions: 0 */
import {
  renderComponent,
  expect
} from '../test-helper';
import { App } from 'components';

describe('Instantiate SPA', () => {
  let component;

  beforeEach(() => {
    component = renderComponent(App);
  });

  describe('Render initial view', () => {
    it('Render title', () => {
      expect(component.find('.title')).to.exist;
    });
    it('Render navigation', () => {
      expect(component.find('.navigation')).to.exist;
    });
  });
});
