import { cardsInfo } from '@/data/cards';

export default function slug({ params }: { params: { service: string } }) {
	const { service } = params;

	const card = cardsInfo.find((card) => card.slug === service);
	console.log(card);

	return <div>From {service}</div>;
}
