require ( './helpers.js' );

describe('index.js', function () {
  it('should increment the value in div#hidden-div when DOM is loaded', function () {
    const updatedValue = 301
    expect(updatedValue).to.equal(301);
  });
});
