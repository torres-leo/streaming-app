export type Card = {
	id: number;
	category: string;
	image: CardImage;
	price: string;
	subtitle?: string;
	title: string;
	slug: string;
	info1?: CardInfo[];
	info2?: CardInfo[];
	contactMessage1: string;
	contactMessage2: string;
};

type CardImage = {
	src: string;
	alt: string;
	// cardImage?: string;
};

type CardInfo = {
	type: string;
	value: string;
};
