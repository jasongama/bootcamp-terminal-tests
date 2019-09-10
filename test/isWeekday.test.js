var assert = require("assert")
var isWeekday = require("../isWeekday")
describe('isWeekday' , function(){
    it('find out if the parameter will pass if it is the day of the week' , function(){
        assert.equal( isWeekday('Monday'), true)
    });
    it('find out if the parameter will fail if it is the weekend' , function(){
        assert.equal( isWeekday('Saturday'), false)
    });
    it('find out if the parameter will fail if it is Monthcd ' , function(){
        assert.equal( isWeekday('September'), false)
    });
});