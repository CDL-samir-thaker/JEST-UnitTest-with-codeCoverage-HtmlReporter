const multiply = require('../calculatorApp/multiply/multiply');

test('multiply 2 * 1 to equal 2', () => {
  expect(multiply(2, 1)).toBe(2);
  console.log(multiply(2,1))
});
