'use client';
import { motion } from 'framer-motion';

import { cardsInfo } from '@/data/cards';

import { useGlobalStore } from '@/src/store/global';

import CardComponent from '.';
import Link from 'next/link';
import SkeletonCard from '../SkeletonCard';
import { useCallback, useEffect } from 'react';
import { Card } from '@/src/models';
import info from '@/data/Home.json';
import { useRouter } from 'next/navigation';

export default function FilteredList() {
	const { loading, inputValue, setLoading, filteredList, setFilteredList } = useGlobalStore();

	const router = useRouter();

	useEffect(() => {
		setLoading(true);

		if (inputValue === '') {
			setFilteredList([]);
			setLoading(false);
			return;
		}

		setFilteredList([]);
		const lowerCaseSearchTerm = inputValue.toLowerCase();
		const filtered = cardsInfo.filter((card) => {
			const lowerCaseTitle = card.title.toLowerCase().replaceAll('- ', '');
			const lowerCaseSubtitle = card.subtitle ? card.subtitle.toLowerCase().replaceAll('- ', '') : '';
			return lowerCaseTitle.includes(lowerCaseSearchTerm) || lowerCaseSubtitle.includes(lowerCaseSearchTerm);
		}) as Card[];

		setFilteredList(filtered);
		setLoading(false);

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [inputValue]);

	const renderFilterList = () => {
		if (loading && filteredList.length === 0)
			return (
				<div className='grid grid-cols-1 gap-y-10 gap-x-2 place-items-center sm:grid-cols-2 md:grid-cols-3 md:gap-6 lg:grid-cols-3 lg:gap-y-20 lg:gap-x-2'>
					{Array(12)
						.fill(null)
						.map((_, idx: number) => (
							<SkeletonCard key={idx} className='max-w-[335px] w-full' />
						))}
				</div>
			);

		if (filteredList.length === 0) {
			return (
				<div className='flex items-center justify-center h-96'>
					<h2 className='text-2xl text-white/85'>No se encontraron resultados</h2>
				</div>
			);
		}

		return (
			<motion.ul
				className={`cards__list ${filteredList?.length === 0 ? 'grid-cols-1' : ''}  ${
					filteredList.length > 12 ? 'lg:grid-cols-4' : 'lg:grid-cols-3'
				}`}>
				{filteredList.map((card) => (
					<li
						key={card.id}
						onClick={() => router.push(`streaming/${card.slug}`)}
						className={`${filteredList.length > 12 ? 'max-w-[290px]' : 'max-w-[310px]'} w-full cursor-pointer`}>
						<CardComponent item={card} />
					</li>
				))}
			</motion.ul>
		);
	};

	return <div>{renderFilterList()}</div>;
}
