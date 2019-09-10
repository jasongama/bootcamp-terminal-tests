var assert = require("assert")
var yearsAgo = require("../yearsAgo")

describe('yearsAgo' , function(){
    it('It will subract 1993 to 2019 and the expected answer is 26' , function(){
        assert.equal(yearsAgo('1993'), 26)
    });
    it('It will subract 1997 to 2019 and the expected answer is 22' , function(){
        assert.equal(yearsAgo('1997'), 22)
    });
    it('It will subract 2020 to 2019 and the expected answer is -1' , function(){
        assert.equal(yearsAgo('2020'), -1)
    });
});