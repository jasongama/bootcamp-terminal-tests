var assert= require("assert");
var countAllFromTown =require ("..//countAllFromTown");
describe('countAllFromTown' , function(){
    it('It count all  registration numbers that startWith CL, the expected answer is 3' , function(){
        assert.equal(countAllFromTown('CL 124,CY 567,CL 345, CJ 456,CL 341','CL 2324'), 3)
    });
   
    it(' It will return zero if it dont find registration numbers that startWith CL(0)' , function(){
        assert.equal(countAllFromTown('L 124,CY 567,L 345, CJ 456,L 341','L'), 0)
    });

    it('It count all  registration numbers that startWith CL, the expected answer is 1' , function(){
        assert.equal(countAllFromTown('CL 124,CY 567,L 345, CJ 456,L 341','L'), 1)
    });
});