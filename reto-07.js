const a1 = ['bici', 'coche', 'bici', 'bici'];
const a2 = ['coche', 'bici', 'muñeca', 'coche'];
const a3 = ['bici', 'pc', 'pc'];

function getGiftsToRefill(a1, a2, a3) {
	let gifts = [],
		toRefill = [];

	gifts = [...new Set(a1), ...new Set(a2), ...new Set(a3)];
	toRefill = gifts.filter((gift) => {
		return gifts.indexOf(gift) === gifts.lastIndexOf(gift);
	});

	return toRefill;
}

const gifts = getGiftsToRefill(a1, a2, a3);

console.log(gifts);

// Mejor solución que encontré:
// https://github.com/borjapazr/adventjs-solutions/blob/main/2022/challenge-07/solution.js

/* 
const getGiftsToRefill = (a1, a2, a3) => {
  return [...new Set([...a1, ...a2, ...a3])].filter(
    gift => a1.includes(gift) + a2.includes(gift) + a3.includes(gift) === 1
  );
};
*/
