import testHelper from 'helpers/test-helper';
import App from 'components/app';

describe('#Initial tests setup', function() {
  it('-Returnes "hello world"', function() {
    expect(hello()).to.equal('hello world');
  });

  it('-Should be another test', function () {
    expect(true).to.equal(true);
  });

  it('Create a new feature test(async)', function() {
    let x = 10;

    expect(x).to.equal(10);
  });

  it('Should render App component', function() {
    const container = document.getElementById('app');

    let _node = renderComponent(App, container, {});

    console.log(_node, container);
  });
});

function hello() {
  return 'hello world';
}

console.log('Loaded test scripts');
