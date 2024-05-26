'use client';
import { motion } from 'framer-motion';

import { useGlobalStore } from '@/src/store/global';
import SkeletonCard from '../SkeletonCard';
import CardComponent from '.';
import Link from 'next/link';
import { useCallback } from 'react';
import { useRouter } from 'next/navigation';

export default function CardList() {
	const { cardList, loading } = useGlobalStore();
	const router = useRouter();

	const renderList = useCallback(() => {
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
						cardList.length > 13 ? 'lg:grid-cols-4' : 'lg:grid-cols-3'
					}`}>
					{cardList.map((card) => (
						<li
							key={card.id}
							onClick={() => router.push(`streaming/${card.slug}`)}
							className={`${cardList.length > 13 ? 'max-w-[290px]' : 'max-w-[310px]'} w-full cursor-pointer`}>
							<CardComponent item={card} />
						</li>
					))}
				</motion.ul>
			</>
		);

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [cardList, loading]);

	return <>{renderList()}</>;
}
