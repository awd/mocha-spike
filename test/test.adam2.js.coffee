expect = require('chai').expect

describe 'Fake instance', ->
  task1 = task2 = null
  it 'should pass bitch', ->
    expect(task1).to.not.exist
