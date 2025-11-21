// @ts-check

/**
 * Calculates the sum of the two input arrays.
 *
 * @param {number[]} array1
 * @param {number[]} array2
 * @returns {number} sum of the two arrays
 */
export function twoSum(array1, array2) {
  const arr1 = Number(array1.join(''));
  const arr2 = Number(array2.join(''));
  return arr1 + arr2
}
/**
 * Checks whether a number is a palindrome.
 *
 * @param {number} value
 * @returns {boolean} whether the number is a palindrome or not
 */
export function luckyNumber(value) {
 return value == String(value).split('').reverse().join('') 
}

/**
 * Determines the error message that should be shown to the user
 * for the given input value.
 *
 * @param {string|null|undefined} input
 * @returns {string} error message
 */
export function errorMessage(input) {
  if (input === undefined || input === null || input === '') {
    return 'Required field';
  }

  const valueInput = Number(input);

  if (isNaN(valueInput)) {
    return 'Must be a number besides 0';
  }

  return valueInput === 0 ? 'Must be a number besides 0' : '';
}

