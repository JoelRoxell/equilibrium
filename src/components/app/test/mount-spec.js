import App, { style } from 'components/app';

describe('#App', () => {
  it('-Render App component', function() {
    const container = document.getElementById('app'),
      node = renderComponent(App, container, {}),
      className = style.app;

    expect(node.className).to.equal(className);
  });
});
