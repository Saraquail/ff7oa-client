/* eslint-disable import/prefer-default-export */

/**
 * sort comparator. sorts by a specific object property
 * @param {String} prop Name of property to sort by
 * @param {Boolean} desc Specifies whether to sort descending
 *
 * @example
 * [{ foo: 'free' }, { foo: 'bar' }].sort(sortBy('foo'))
 * // => [{ foo: 'bar' }, { foo: 'free' }]
 */
export const sortBy = (prop, desc) => (a, b) => {
  const first = a[prop];
  const second = b[prop];

  if (desc ? second > first : first > second) {
    return 1;
  }

  if (desc ? second < first : first < second) {
    return -1;
  }

  return 0;
};
