'use client';

import HomeInfo from '@/data/Home.json';

import Section from '@/src/components/SectionContainer';
import Tabs from '@/src/components/Tabs';
import MarqueeImages from '@/src/components/Marquee';
import CardList from '@/src/components/Card/List';
import { useState } from 'react';
import { Card } from '@/src/models';
import SearchInput from '@/src/components/SearchInput';
import { useGlobalStore } from '@/src/store/global';
import FilteredList from '@/src/components/Card/FilteredList';
import Socials from '@/src/components/Socials';

export default function Home() {
	const { inputValue, filteredList } = useGlobalStore();

	return (
		<>
			<Section customClass=' mb-20'>
				<h1 className='text-center mb-10 text-balance text-2xl leading-9 md:text-4xl md:leading-[1.3] lg:text-5xl lg:leading-[1.3] font-bold max-w-[750px] mx-auto text-white/85'>
					Contrata los mejores servicios de Streaming al mejor precio!
				</h1>

				<Socials className='mb-10' />

				<MarqueeImages info={HomeInfo.MARQUEE} />
			</Section>

			<Section customClass='streaming mb-20' title='Servicios de Streaming'>
				<Tabs elements={HomeInfo.TABS} />
				<SearchInput customClass='mb-10 w-full sm:w-1/2 mx-auto' textShow='Buscar Plataforma' />

				{!inputValue ? <CardList /> : inputValue && filteredList && <FilteredList />}
			</Section>
		</>
	);
}
