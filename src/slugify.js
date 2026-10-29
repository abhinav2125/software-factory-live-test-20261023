/**
 * Convert a value into a URL-friendly slug.
 *
 * The input is lowercased, trimmed, stripped of Latin accent marks,
 * runs of punctuation/whitespace/underscores collapse to a single
 * hyphen, and leading/trailing hyphens are removed.
 *
 * @param {string} value - The string to slugify.
 * @returns {string} The slug, or an empty string for empty or
 *   punctuation-only input.
 * @throws {TypeError} If value is not a string.
 *
 * @example
 * slugify(' Hello, World! '); // 'hello-world'
 * slugify('Crème brûlée');    // 'creme-brulee'
 * slugify('A__B  C');         // 'a-b-c'
 * slugify('---');             // ''
 */
export function slugify(value) {
  if (typeof value !== 'string') {
    throw new TypeError(`slugify expects a string, received ${typeof value}`);
  }
  return value
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .trim()
    .replace(/[\p{P}\p{S}\s_]+/gu, '-')
    .replace(/^-+|-+$/g, '');
}
