'use client';
import { motion } from 'framer-motion';

import { useGlobalStore } from '@/src/store/global';
import SkeletonCard from '../SkeletonCard';
import CardComponent from '.';
import Link from 'next/link';

export default function CardList() {
	const { cardList, loading } = useGlobalStore();
	console.log(cardList);

	const renderList = () => {
		if (loading && cardList?.length === 0)
			return (
				<div className='grid grid-cols-1 gap-y-10 place-items-center md:grid-cols-2 md:gap-6 lg:grid-cols-3 lg:gap-y-20'>
					{Array(12)
						.fill(null)
						.map((_, idx: number) => (
							<SkeletonCard key={idx} />
						))}
				</div>
			);

		return (
			<motion.ul className={`cards__list ${cardList?.length === 0 ? 'grid-cols-1' : ''}`}>
				{cardList?.map((card) => (
					<li key={card.title} className='max-w-[290px] w-full'>
						<Link href={`streaming/${card.slug}`}>
							<CardComponent item={card} />
						</Link>
					</li>
				))}
			</motion.ul>
		);
	};

	return <>{renderList()}</>;
}
