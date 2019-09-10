var assert =  require("assert");
var totalPhoneBill = require("..//totalPhoneBill")
describe('totalPhoneBill' , function(){
    it('totalCalls it should return R2.75' , function(){
        assert.equal(totalPhoneBill("call"), 'R2.75')
    });
    it('totalSms it should return R0.65' , function(){
        assert.equal(totalPhoneBill("sms"), 'R0.65')
    });
    it('if it is a empty string it should return R0.00' , function(){
        assert.equal(totalPhoneBill(""), 'R0.00')
    });
});