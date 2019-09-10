var assert =require("assert");
var transportFee = require("..//transportFee");

describe('transportFee' , function(){
    it(' if it is a morning shift is expected to return R20' , function(){
        assert.equal(transportFee('morning'), 'R20')
    });
    it(' if it is a afternoon shift is expected to return R10' , function(){
        assert.equal(transportFee('afternoon'), "R10")
    });
    it(' if it is a nightshit is expected to return free' , function(){
        assert.equal(transportFee('nightshift'), "free")
    });
});