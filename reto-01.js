function wrapping(gifts) {
	let decoration = '*';

	let wrapped = gifts.map((gift) => {
		let box = decoration.repeat(gift.length + 2);
		return `${box}\n*${gift}*\n${box}`;
	});

	return wrapped;
}

const gifts = ['book', 'game', 'socks'];
const wrapped = wrapping(gifts);
console.log(wrapped);
