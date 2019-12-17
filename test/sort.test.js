const sort = require('../sort')
const expect = require('chai').expect

describe('Sort function', () => {
    it('should sort in ascending order', () => {
        const list = [19, 3, 1, 4];
        const expectedAnswer = [1, 3, 4, 19];
        expect(sort(list)).to.deep.equal(expectedAnswer);
    })
})