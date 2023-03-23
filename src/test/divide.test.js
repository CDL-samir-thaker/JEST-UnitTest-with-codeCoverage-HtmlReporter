const divide = require('../calculatorApp/divide/divide');

test('divide 2 by 2 to equal 1', () => {
  expect(divide(2, 2)).toBe(1);
});

test('divide 10 by 2 to equal 5', () => {
  expect(divide(10, 2)).toBe(5);
});