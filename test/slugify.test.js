import test from 'node:test';
import assert from 'node:assert/strict';
import { slugify } from '../src/slugify.js';

test('acceptance: lowercases, trims and hyphenates words', () => {
  assert.equal(slugify(' Hello, World! '), 'hello-world');
});

test('acceptance: removes Latin accent marks', () => {
  assert.equal(slugify('Crème brûlée'), 'creme-brulee');
});

test('acceptance: collapses runs of punctuation, whitespace and underscores', () => {
  assert.equal(slugify('A__B  C'), 'a-b-c');
  assert.equal(slugify('one -- two!!three'), 'one-two-three');
});

test('acceptance: empty and punctuation-only input return an empty string', () => {
  assert.equal(slugify(''), '');
  assert.equal(slugify('---'), '');
  assert.equal(slugify('   '), '');
  assert.equal(slugify('…!!!'), '');
});

test('removes leading and trailing hyphens', () => {
  assert.equal(slugify('--hello--'), 'hello');
  assert.equal(slugify(' -_ Mixed CASE _- '), 'mixed-case');
});

test('keeps digits and already-slugged input intact', () => {
  assert.equal(slugify('node-20-release'), 'node-20-release');
  assert.equal(slugify('123'), '123');
});

test('throws TypeError for non-string input', () => {
  for (const value of [undefined, null, 42, 0, true, {}, [], ['a'], () => {}]) {
    assert.throws(() => slugify(value), TypeError);
  }
});
