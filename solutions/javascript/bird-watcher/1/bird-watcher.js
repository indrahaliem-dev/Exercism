// @ts-check
//
// The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion when
// implementing this exercise.

/**
 * Calculates the total bird count.
 *
 * @param {number[]} birdsPerDay
 * @returns {number} total bird count
 */
export function totalBirdCount(birdsPerDay) {
  let counter = 0;
  for(let i = 0; i < birdsPerDay.length; i++){
    counter += birdsPerDay[i]
  }
  return counter;
}

/**
 * Calculates the total number of birds seen in a specific week.
 *
 * @param {number[]} birdsPerDay
 * @param {number} week
 * @returns {number} birds counted in the given week
 */
export function birdsInWeek(birdsPerDay, week) {
  let lastDayIndex = birdsPerDay.length > (week * 7) ? (week * 7) : birdsPerDay.length;
  let firstIndex = (week - 1) * 7;
  let total = 0;
  for (let index = firstIndex; index < lastDayIndex; index++) {
    total += birdsPerDay[index]
  }
  return total;
}

/**
 * Fixes the counting mistake by increasing the bird count
 * by one for every second day.
 *
 * @param {number[]} birdsPerDay
 * @returns {void} should not return anything
 */
export function fixBirdCountLog(birdsPerDay) {
  for (let index = 0; index < birdsPerDay.length; index++) {
    if(index % 2 == 0){
      birdsPerDay[index] += 1;
    } 
  }
  return birdsPerDay;
}

