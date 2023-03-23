const sub = require('../calculatorApp/subtraction/subtract');

test('subtract 2 - 1 to equal 1', () => {
  expect(sub(2, 1)).toBe(1);
});
test('subtract 5 - 1 to equal 4', () => {
  expect(sub(5, 1)).toBe(4);
});