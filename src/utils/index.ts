export function isMobile() {
	const regex = /Mobi|Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i;
	return regex.test(navigator.userAgent);
}

export function generateSlug(text: string): string {
	return text
		.replace(/\s+/g, '-')
		.replaceAll('+', 'plus')
		.replaceAll('|', '')
		.replaceAll('&', 'and')
		.replaceAll('--', '-')
		.toLowerCase();
}
