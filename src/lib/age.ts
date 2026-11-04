// Month is 1-based. Only the year is known so far, so Jan 1 matches the old year-only math.
const BIRTH_DATE = { year: 2006, month: 1, day: 1 };

export function getAge(now = new Date()) {
	const hadBirthday =
		now.getMonth() + 1 > BIRTH_DATE.month ||
		(now.getMonth() + 1 === BIRTH_DATE.month &&
			now.getDate() >= BIRTH_DATE.day);
	return now.getFullYear() - BIRTH_DATE.year - (hadBirthday ? 0 : 1);
}
