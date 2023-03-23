const sum = require('../calculatorApp/sum/sum');

test('add 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});
// fail the below test to check the report
test('add 1 + 5 to equal 6', () => {
  expect(sum(1, 5)).toBe(5);
});