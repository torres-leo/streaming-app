export type Card = {
	id: string;
	category: string;
	contactMessage: string;
	image: CardImage;
	info?: CardInfo[];
	plan?: string;
	price: string;
	slug?: string;
	subtitle?: string;
	title: string;
	notes?: string[];
	steps?: string[];
};

type CardImage = {
	src: string;
	alt: string;
};

type CardInfo = {
	type: string;
	value: string;
};
