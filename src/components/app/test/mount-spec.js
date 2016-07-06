/* eslint no-unused-expressions: 0 */
import {
  renderComponent,
  expect
} from '../../../../util/test-helper';
import App from 'components/app';

describe('App', () => {
  let component;

  beforeEach(() => {
    component = renderComponent(App);
  });

  it('Initialize the application', () => {
    expect(component.attr('class')).to.eq('app');
  });
});
