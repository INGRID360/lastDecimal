import { lastdecimal } from '../index';
test('lastdecimal', () => {
  expect(lastdecimal(555.555, true)).toBe('555.556');
});

test('lastdecimal', () => {
  expect(lastdecimal(5.559999, true)).toBe('5.560000');
});

test('lastdecimal', () => {
  expect(lastdecimal(554.1, false)).toBe('554.0');
});

test('lastdecimal', () => {
  expect(lastdecimal(5.3213123, false)).toBe('5.3213122');
});

test('lastdecimal', () => {
  expect(lastdecimal(0, true)).toBe(undefined);
});
