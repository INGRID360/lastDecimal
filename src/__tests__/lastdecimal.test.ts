import { lastdecimal } from '../index';
test('lastdecimal', () => {
  expect(lastdecimal(555.555, true)).toBe('555.554');
});

test('lastdecimal', () => {
  expect(lastdecimal(5.555421, true)).toBe('5.555420');
});

test('lastdecimal', () => {
  expect(lastdecimal(555.555, false)).toBe('555.556');
});

test('lastdecimal', () => {
  expect(lastdecimal(5.321312399, false)).toBe('5.321312400');
});
