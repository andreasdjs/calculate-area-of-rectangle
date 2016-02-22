// test

var expect = require('chai').expect; // plockar bra en funktion
var index = require('../index.js');

describe('Calculate area of rectangle', function() {
//	it('should return a number');
	it('should return a number', function(){
		var output = index.calculateArea(2,5);
		expect(output).to.be.a('number');
	});
	it('should return product of two noumber', function(){
		var output = index.calculateArea(2,5);
		expect(output).to.equal(2*5);		
	});
});