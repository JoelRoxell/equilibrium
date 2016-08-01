/* eslint no-unused-expressions: 0 */
import testHelper from 'helpers/test-helper';
import App from 'components/app';

describe('Title', () => {
  let component;

  console.log(testHelper);

  beforeEach(() => {
    component = renderComponent(App);
  });

  it('Renders', () => {
    expect(component.find('.title')).to.exist;
  });
});
