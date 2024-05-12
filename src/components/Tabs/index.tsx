'use client';

import { useEffect } from 'react';
import { cardsInfo } from '@/data/cards';

import { Card } from '@/src/models';

import { useGlobalStore } from '@/src/store/global';
import { isMobile } from '@/src/utils';

type TabsProps = {
	elements: string[];
};

const Tabs = ({ elements }: TabsProps) => {
	const { activeTab, setActiveTab, setCardList, setLoading } = useGlobalStore();

	const handleClick = (item: string) => {
		if (item === activeTab) return;

		setCardList([]);
		setActiveTab(item);
		scrollToTabs();

		localStorage.setItem('activeTab', item);
	};

	useEffect(() => {
		setLoading(true);
		setTimeout(() => {
			setCardList(cardsInfo.filter((card: Card) => card.category === activeTab) || []);
			setLoading(false);
		}, 550);

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [activeTab]);

	const scrollToTabs = () => {
		window.scrollTo({
			top: isMobile() ? 450 : 500,
			behavior: 'smooth',
		});
	};

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
		<ul
			id='tabs'
			className='flex scroll-tabs sticky z-10 top-4 xl:animate-none xl:relative items-center justify-center gap-x-3 bg-white/10 max-w-fit mx-auto rounded-full px-8 py-2 mb-14'>
			{renderTabs()}
		</ul>
	);
};

export default Tabs;
