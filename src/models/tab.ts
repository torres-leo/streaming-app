export interface ITab {
	id: number;
	heading: string;
	cards: Card[];
}

export type Card = {
	image: CardImage;
	title: string;
	price: string;
};

type CardImage = {
	src: string;
	alt: string;
	cardImage?: string;
};
