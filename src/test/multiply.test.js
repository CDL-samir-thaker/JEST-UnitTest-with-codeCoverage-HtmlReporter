const multiply = require('../calculatorApp/multiply/multiply');

test('multiply 2 * 1 to equal 1', () => {
  expect(multiply(2, 1)).toBe(2);
});
