'use client';
import { motion } from 'framer-motion';

import { useGlobalStore } from '@/src/store/global';
import SkeletonCard from '../SkeletonCard';
import CardComponent from '.';
import Link from 'next/link';

export default function CardList() {
	const { cardList, loading } = useGlobalStore();

	const renderList = () => {
		if (loading && cardList?.length === 0)
			return (
				<div className='grid grid-cols-1 gap-y-10 gap-x-2 place-items-center sm:grid-cols-2 md:grid-cols-3 md:gap-6 lg:grid-cols-3 lg:gap-y-20 lg:gap-x-2'>
					{Array(12)
						.fill(null)
						.map((_, idx: number) => (
							<SkeletonCard key={idx} className='max-w-[335px] w-full' />
						))}
				</div>
			);

		return (
			<>
				<motion.ul
					className={`cards__list ${cardList?.length === 0 ? 'grid-cols-1' : ''}  ${
						cardList.length > 12 ? 'lg:grid-cols-4' : 'lg:grid-cols-3'
					}`}>
					{cardList?.map((card) => (
						<li key={card.title} className={`${cardList.length > 12 ? 'max-w-[290px]' : 'max-w-[310px]'} w-full`}>
							<Link href={`streaming/${card.slug}`}>
								<CardComponent item={card} />
							</Link>
						</li>
					))}
				</motion.ul>
			</>
		);
	};

	return <>{renderList()}</>;
}
