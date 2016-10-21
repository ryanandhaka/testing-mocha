' use strict'

var chai = require('chai')
var expect = chai.expect
var App = require('./index.js')
chai.should()
var number1,number2


describe("Number Test",()=> {
  beforeEach(function(){
    number1 = 1
  })
  it("checked if the number is odd",()=>{
    App.isOdd(number1).should.be.true
  })
  beforeEach(function(){
    number2 = 2
  })
  it("checked if the number is even",()=>{
    App.isEven(number2).should.be.true
  })
})
