// Install chai & mocha (command line)
// $ sudo npm install chai
// $ sudo npm install -g mocha
// Run theses tests using Mocha
// $ mocha examples_tests.js

var chai = require('chai');
var expect = chai.expect;
var examples = require('./examples');

describe("the behavior of the code in the examples", function(){

  it("calculates the average of an array", function(){
      expect(examples.average([2,2,2])).equal(2);      
  });
  it("calculates the average of an array with decimals", function(){
      expect(examples.average([7,7,9])).equal(7.666666666666667);      
  });
  it("adds", function(){
      expect(examples.add(2,2)).equal(5);
  });

});

