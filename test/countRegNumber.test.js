var assert = require("assert");
var countRegNumber = require("../countRegNumber")
describe(' countRegNumber' , function(){
    it(' It will count that it have three registration numbers in the string' , function(){
        assert.equal( countRegNumber('CA 182736,CY 523519,CJ 812328') , 3)
    });
    it(' It will return two if it has two registration numbers in the string ' , function(){
        assert.equal( countRegNumber('CA 182736,CY 523519') , 2)
    });
    it(' It will return one if it has one registration numbers in the string' , function(){
        assert.equal( countRegNumber('CA 42665') , 1)
    });
});