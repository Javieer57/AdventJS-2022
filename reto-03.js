const packOfGifts = ['book', 'doll', 'ball'];
const reindeers = ['dasher', 'dancer'];

function distributeGifts(packOfGifts, reindeers) {
	let boxWeight = packOfGifts.reduce((weight, gift) => {
		return weight + gift.length;
	}, 0);

	let reindeersCapacity = reindeers.reduce((weight, reindeers) => {
		return weight + reindeers.length * 2;
	}, 0);

	return reindeersCapacity / boxWeight;
}

console.log(distributeGifts(packOfGifts, reindeers));
