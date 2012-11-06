describe 'Adam2', ->
  describe 'Fake instance', ->
    it 'should pass bitch', ->
      adam2 = null
      expect(adam2).to.not.exist

  describe 'Real instance', ->
    describe '#realMethod', ->
      it 'should return a string', ->
        adam2 = new Adam2();

        expect(adam2.realMethod()).to.equal("stringy")
