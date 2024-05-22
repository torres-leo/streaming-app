export function isMobile() {
	if (typeof window === 'undefined') {
		return false;
	}

	const regex = /Mobi|Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i;
	return regex.test(navigator.userAgent);
}

export function generateSlug(text: string): string {
	return text
		.replace(/\s+/g, '-')
		.replaceAll('+', 'plus')
		.replaceAll('|', '')
		.replaceAll('&', 'and')
		.toLowerCase()
		.replace(/-+/g, '-');
}

export const dollarValue = 36.6;
