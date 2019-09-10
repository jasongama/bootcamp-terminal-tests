var assert = require("assert");
var regCheck =  require("..//regCheck")


describe('regCheck' , function(){
    it('check if a registration number endsWith GP is true' , function(){
        assert.equal( regCheck('DV 23 NB GP', 'GP'), true)
    });
    it('check if a registration number endsWith MP is false' , function(){
        assert.equal( regCheck('DV 23 NB GP', 'MP'), false)
    });
    it('check if a registration CY189-012 endsWith CY is false' , function(){
        assert.equal( regCheck('CY189-012', 'CY'), false)
    });
});