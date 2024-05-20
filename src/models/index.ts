export type Card = {
	id: string;
	category: string;
	contactMessage1?: string;
	contactMessage2?: string;
	image: CardImage;
	info1?: CardInfo[];
	info2?: CardInfo[];
	plan1?: string;
	plan2?: string;
	price: string;
	slug?: string;
	subtitle?: string;
	title: string;
};

type CardImage = {
	src: string;
	alt: string;
};

type CardInfo = {
	type: string;
	value: string;
};
