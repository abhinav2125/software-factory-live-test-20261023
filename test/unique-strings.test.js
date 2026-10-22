import test from 'node:test';
import assert from 'node:assert/strict';
import { uniqueStrings } from '../src/unique-strings.js';

test('removes duplicates while preserving first occurrence order', () => {
  const input = ['silk', 'cotton', 'silk', 'linen', 'cotton'];
  assert.deepEqual(uniqueStrings(input), ['silk', 'cotton', 'linen']);
  assert.deepEqual(input, ['silk', 'cotton', 'silk', 'linen', 'cotton']);
});
test('handles empty input and distinct strings', () => {
  assert.deepEqual(uniqueStrings([]), []);
  assert.deepEqual(uniqueStrings(['a', 'b']), ['a', 'b']);
});
test('keeps empty strings and treats case as distinct', () => {
  assert.deepEqual(uniqueStrings(['', 'A', '', 'a', 'A']), ['', 'A', 'a']);
});
