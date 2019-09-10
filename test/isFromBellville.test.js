var assert = require('assert')
var isFromBellville = require('../isFromBellville')

describe('isFromBellville' , function(){
    it('returns true if a registration number is for Bellville ' , function(){
        assert.equal( isFromBellville('CY64646'), true)
    });

    it('returns false if a registration number is not for Bellville ' , function(){
        assert.equal( isFromBellville('C64646'), false)
    });


    it('returns false if a registration number is a empty string ' , function(){
        assert.equal( isFromBellville(''), false)
    });
});