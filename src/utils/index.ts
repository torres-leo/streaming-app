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

export const convertToDollar = (price: number) => {
	const result = (price / dollarValue).toFixed(2);
	if (result.split('.')[1] === '00' || result.split('.')[1] === '0') return Number(result.split('.')[0]);
	else return Number(result);
};
