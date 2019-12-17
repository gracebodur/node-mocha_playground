const divide = require('../index')
const expect = require('chai').expect


describe('Divide function', () => {
  it('should divide positive integers correctly', () => {
    expect(divide(8, 4)).to.equal(2);
  });

  it('should throw an error when divide by zero', () => {
    expect(() => { divide(8, 0) }).to.throw();
  });
});


// describe('Divide function', () => {
//     it('should divide positive integers correctly', () => {
//        // define inputs
//   const a = 8;
//   const b = 4;
//   const expectedAnswer = 2;

//   // invoke the function
//   const actualAnswer = divide(a, b);

//   // assert that expected === actual
//   expect(actualAnswer).to.equal(expectedAnswer);
//     });
  
//     it('should throw an error when divide by zero', () => {
//       // define inputs
//   const a = 8, b = 0;

//   // set up the function call
//   const fn = () => {
//     divide(a, b)
//   };

//   // assert that exception is thrown
//   expect(fn).to.throw();
//     });
//   });