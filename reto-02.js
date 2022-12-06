const year = 2022;
const holidays = ['01/06', '04/01', '12/25'];

function countHours(year, holidays) {
	let hours = 0;

	holidays.forEach((day) => {
		let currentDate = new Date(`${day}/${year}`),
			isWorkDay = [1, 2, 3, 4, 5].includes(currentDate.getDay());

		if (isWorkDay) {
			hours += 2;
		}
	});

	return hours;
}

console.log(countHours(year, holidays));
