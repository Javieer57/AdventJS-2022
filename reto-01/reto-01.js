const gifts = ['book', 'game', 'socks'];

function wrapping(gifts) {
	return gifts.map((gift) => {
		let box = '*'.repeat(gift.length + 2);
		return `${box}\n*${gift}*\n${box}`;
	});
}

console.log(wrapping(gifts));
