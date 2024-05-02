export interface ITab {
	id: number;
	heading: string;
	cards: Card[];
}

export type Card = {
	id: number;
	category: string;
	image: CardImage;
	price: string;
	subtitle?: string;
	title: string;
};

type CardImage = {
	src: string;
	alt: string;
	cardImage?: string;
};
