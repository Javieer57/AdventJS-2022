const packOfGifts = ['book', 'doll', 'ball'];
const reindeers = ['dasher', 'dancer'];

function distributeGifts(packOfGifts, reindeers) {
	let boxWeight = packOfGifts.reduce((weight, gift) => {
		return weight + gift.length;
	}, 0);

	let reindeersCapacity = reindeers.reduce((weight, reindeers) => {
		return weight + reindeers.length * 2;
	}, 0);

	return Math.floor(reindeersCapacity / boxWeight);
}

console.log(distributeGifts(packOfGifts, reindeers));

// Mejor solución encontrada
// https://github.com/Achalogy/advent-js-2022/tree/main/retos/reto-3

// function distributeGifts(packOfGifts, reindeers) {
//   let pesoMax = reindeers.join("").length * 2
//   let pesoCaja = packOfGifts.join("").length
//   return (pesoMax / pesoCaja) >> 0
// }
