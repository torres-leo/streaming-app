'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

import { ITab } from '@/app/models/tab';
import Card from '@/app/components/Card';

const Tabs = ({ info }: { info: ITab[] }) => {
	const [activeTab, setActiveTab] = useState(0);
	const [activeTabContent, setActiveTabContent] = useState<ITab | null>(null);

	const handleClick = (id: number) => {
		setActiveTab(id);
		setActiveTabContent(null);
	};

	useEffect(() => {
		setActiveTabContent(info.find((tab) => tab.id === activeTab) || null);
	}, [activeTab, info]);

	const renderHeading = () => {
		return info.map((item) => (
			<li
				key={item.id}
				className={`tab ${
					activeTab === item.id ? 'active' : ''
				} px-2 py-1 uppercase hover:cursor-pointer hover:bg-white/20 rounded-full transition-all duration-300 ease-in-out hover:shadow-md hover:scale-105 `}
				onClick={() => handleClick(item.id)}>
				{item.heading}
			</li>
		));
	};

	return (
		<>
			<ul className='flex items-center justify-center gap-x-3 bg-white/10 max-w-fit mx-auto rounded-full px-8 py-2 mb-14'>
				{renderHeading()}
			</ul>

			{activeTabContent && (
				<motion.ul
					initial={{ y: 100, opacity: 0 }}
					animate={{ y: 0, opacity: 1 }}
					transition={{ type: 'easeIn', duration: 0.5 }}
					className='tab__content'>
					{activeTabContent.cards.map((card) => (
						<li key={card.title} className='max-w-[340px] w-full'>
							<Card item={card}></Card>
						</li>
					))}
				</motion.ul>
			)}
		</>
	);
};

export default Tabs;
