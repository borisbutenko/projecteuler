/**
 * @see https://projecteuler.net/problem=1
 * If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9.
 * The sum of these multiples is 23.
 * Find the sum of all the multiples of 3 or 5 below 1000.
 */
function multiplies_of_3_and_5 () {
	let [num_below, sum] = [1000, 0]
	while (num_below--) {
		if (num_below % 3 === 0 || num_below % 5 === 0) {
			sum += num_below
		}
	}
	return sum
}
