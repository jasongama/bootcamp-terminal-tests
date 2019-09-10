var assert = require("assert");
var findItemsOver = require("..//findItemsOver")
describe('findItemsOver', function () {
    it(' which cars is over 20 years', function () {
        assert.deepEqual(findItemsOver([{
                name: 'Mercedes',
                age: 10
            },
            {
                name: 'BMW',
                age: 37
            }
        ], 20), [{
            name: 'BMW',
            age: 37
        }])
    });
    it('which cars is over 25 years', function () {
        assert.deepEqual(findItemsOver([{
                name: 'BMW',
                age: 10
            },
            {
                name: 'Mercedes',
                age: 37
            }
        ], 25), [{
            name: 'Mercedes',
            age: 37
        }])
    });
});