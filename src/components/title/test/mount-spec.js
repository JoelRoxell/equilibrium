/* eslint no-unused-expressions: 0 */
import {
  renderComponent,
  expect
} from '../../../../util/test-helper';
import App from 'components/app';

describe('Title', () => {
  let component;

  beforeEach(() => {
    component = renderComponent(App);
  });

  describe('Render initial view', () => {
    it('Render title', () => {
      expect(component.find('.title')).to.exist;
    });
  });
});