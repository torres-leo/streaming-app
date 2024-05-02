'use client';

import React, { useEffect, useState } from 'react';
import cardsInfo from '@/data/cards.json';
import { motion } from 'framer-motion';

import { Card } from '@/src/models';

import CardComponent from '../Card';

type TabsProps = {
	elements: string[];
};

const Tabs = ({ elements }: TabsProps) => {
	const [activeTab, setActiveTab] = useState(elements[0]);
	const [cardList, setCardList] = useState<Card[] | null>(null);

	const handleClick = (item: string) => {
		setActiveTab(item);
		setCardList(null);
	};

	useEffect(() => {
		setCardList(cardsInfo.filter((card: Card) => card.category === activeTab) || null);
	}, [activeTab]);

	const renderTabs = () => {
		return elements.map((item, idx) => (
			<li
				key={idx}
				className={`tab ${
					activeTab === item ? 'active' : ''
				} px-2 py-1 uppercase hover:cursor-pointer hover:bg-white/20 rounded-full transition-all duration-300 ease-in-out hover:shadow-md hover:scale-105 `}
				onClick={() => handleClick(item)}>
				{item}
			</li>
		));
	};

	return (
		<>
			<ul className='flex items-center justify-center gap-x-3 bg-white/10 max-w-fit mx-auto rounded-full px-8 py-2 mb-14'>
				{renderTabs()}
			</ul>

			{cardList && (
				<motion.ul
					initial={{ y: 100, opacity: 0 }}
					animate={{ y: 0, opacity: 1 }}
					transition={{ type: 'easeIn', duration: 0.5 }}
					className={`tab__content ${cardList.length === 0 ? 'grid-cols-1' : ''}`}>
					{cardList.map((card) => (
						<li key={card.title} className='max-w-[310px] w-full'>
							<CardComponent item={card} />
						</li>
					))}
				</motion.ul>
			)}
		</>
	);
};

export default Tabs;
