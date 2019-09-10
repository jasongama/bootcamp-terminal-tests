var assert = require("assert")
var greet = require("../greet")


describe('greet' , function(){
    it('returns a greeting message: hello Jason' , function(){
        assert.equal(greet('Jason'), "Hello, Jason");
    });
    it('returns a greeting message: Hello Tarantino' , function(){
        assert.equal(greet('Tarantino'), "Hello, Tarantino");
    });
    it('returns a greeting message: Hello numbers' , function(){
        assert.equal(greet('1234'), "Hello, 1234");
    });
});