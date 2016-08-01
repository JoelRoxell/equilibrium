var expect = chai.expect;

describe('#Initial tests setup', function() {
  it('-Returnes "hello world"', function() {
    expect(hello()).to.equal('hello world');
  });

  it('-Should be another test', function () {
    expect(true).to.equal(true);
  });
});

function hello() {
  return 'hello world';
}
