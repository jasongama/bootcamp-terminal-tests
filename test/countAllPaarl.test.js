
 var assert = require("assert");
 var countAllPaarl = require("../countAllPaarl")
describe('countAllPaarl' , function(){
    it(' It will return 2 when it count all registration numbers from Paarl' , function(){
        assert.equal( countAllPaarl('CL 900, CJ 678 543, CA 34567, CJ 67890, CN 7864'), 2)
    });
    it('It will return zero when it doesnt find registration numbers from Paarl ' , function(){
        assert.equal( countAllPaarl('CL 900, 678 543, CA 34567,  67890, CN 7864'), 0)
    });
    it(' if it is a empty string, it will return zero if doesnt find registration number from Paarl(0)' , function(){
        assert.equal( countAllPaarl('CL 900, " ", CA 34567,  " ", CN 7864'), 0)
    });
});