var assert = require("assert");
var fromWhere = require("..//fromWhere")
describe('fromWhere' , function(){
    it(' When the car registration number is from CY the expected answer is Bellville ' , function(){
        assert.equal(fromWhere('CY'), 'Bellville')
    });
    it('When the car registration number is from CJ the expected answer is Paarl' , function(){
        assert.equal(fromWhere('CJ'), 'Paarl')
    });
    it('When the car  registration number is from CA the expected answer is Cape Town' , function(){
        assert.equal(fromWhere('CA'), 'Cape Town')
    });
});