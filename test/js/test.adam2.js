
describe('Adam2', function() {
  describe('Fake instance', function() {
    return it('should pass bitch', function() {
      var adam2;
      adam2 = null;
      return expect(adam2).to.not.exist;
    });
  });
  return describe('Real instance', function() {
    return describe('#realMethod', function() {
      return it('should return a string', function() {
        var adam2;
        adam2 = new Adam2();
        return expect(adam2.realMethod()).to.equal("stringy");
      });
    });
  });
});
