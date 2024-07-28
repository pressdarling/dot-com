import { expect, test } from 'vitest';
import { add } from './maths';

test('add function', () => {
  expect(add(2, 3)).toBe(5);
});
