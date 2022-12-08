// Sort an Array of Objects in JavaScript:
// https://www.scaler.com/topics/javascript-sort-an-array-of-objects/

const boxes = [
	{ l: 1, w: 1, h: 1 },
	{ l: 2, w: 2, h: 2 },
	{ l: 3, w: 1, h: 3 },
];

function fitsInOneBox(boxes) {
	let fits = true,
		sortedBoxes = boxes.sort((box1, box2) => box1.l - box2.l);

	for (let i = 0; i < sortedBoxes.length - 1; i++) {
		let current = sortedBoxes[i];
		let next = sortedBoxes[i + 1];

		if (current.l >= next.l || current.w >= next.w || current.h >= next.h) {
			fits = false;
		}
	}

	return fits;
}

console.log(fitsInOneBox(boxes));

// Solución alterna (misma lógica, mejor implementado 😊)
// https://github.com/Achalogy/advent-js-2022/blob/main/retos/reto-4/index.js

/* function fitsInOneBox(boxes) {
  return boxes.sort((a, b) => {
    // Ordena las cajas, sumando todos sus lados
    return (a.l + a.w + a.h) - (b.l + b.w + b.h)
  }).every((box, i) => { 
		// Itera en la lista y hace una comparación con todos los resultados, true false true true = false
    if( i === 0 ) return true; // Ignora la primer caja ya que no hay una caja en index -1
    const prev = boxes[i - 1] // Caja anterior y más grande si es valida la lista
    return box.l > prev.l && box.w > prev.w && box.h > prev.h // valida si la anterior caja es más grande
  })
}  */
