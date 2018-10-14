import { lastDecimal } from '../index';
test('lastDecimal', () => {
  expect(lastDecimal(555.555, true)).toBe('555.554');
});

test('lastDecimal', () => {
  expect(lastDecimal(5.555421, true)).toBe('5.555420');
});

test('lastDecimal', () => {
  expect(lastDecimal(555.555, false)).toBe('555.556');
});

test('lastDecimal', () => {
  expect(lastDecimal(5.321312399, false)).toBe('5.321312400');
});
