/**
 * Generates a random number between a fixed range
 * repetition is handled through recursion
 * @param min min value of random
 * @param max max value of random
 * @param prev previous value
 * @returns new random number
 */
export const randomize = (min: number, max: number, prev: number): number => {
	const newRandom = Math.floor(Math.random() * (max - min + 1) + min)
	return newRandom !== prev ? newRandom : randomize(min, max, prev)
}
