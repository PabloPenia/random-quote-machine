/**
 * @description Generates a random number between a fixed range.
 * Last value is taking into account and handled through recursion to avoid repetition.
 * @author Pablo Peña
 * @param {number} min - lowest value for randomness
 * @param {number} max - highest value for randomness
 * @param {number} prev - previous random number
 * @returns {number}
 */

export const randomize = (min: number, max: number, prev: number): number => {
	const newRandom = Math.floor(Math.random() * (max - min + 1) + min)
	return newRandom !== prev ? newRandom : randomize(min, max, prev)
}
