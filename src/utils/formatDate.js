// Надо переписать, не красиво
// Перерабатывает дату из github в человеческую

export function formatDate(date) {
	const sepT = date.indexOf('T');

	return date
		.substr(0, sepT)
		.split('-')
		.reverse()
		.join('.');
}
