export type Card = {
	id: number;
	category: string;
	image: CardImage;
	price: string;
	subtitle?: string;
	title: string;
	slug: string;
};

type CardImage = {
	src: string;
	alt: string;
	cardImage?: string;
};
