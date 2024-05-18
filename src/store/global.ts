import { create } from 'zustand';
import { Card } from '../models';

import info from '@/data/Home.json';
import { cardsInfo } from '@/data/cards';

const tabs = info.TABS;

interface GlobalStore {
	activeTab: string;
	setActiveTab: (tab: string) => void;
	loading: boolean;
	setLoading: (loading: boolean) => void;
	cardList: Card[] | [];
	setCardList: (cards: Card[]) => void;
	filteredList: Card[] | [];
	setFilteredList: (cards: Card[]) => void;
	inputValue: string;
	setInputValue: (value: string) => void;
}

export const useGlobalStore = create<GlobalStore>((set, get) => ({
	activeTab: tabs[0],
	setActiveTab: (tab: string) => set({ activeTab: tab }),
	loading: true,
	setLoading: (loading: boolean) => set({ loading }),
	cardList: [],
	setCardList: (cards: Card[]) => set({ cardList: cards }),
	filteredList: [],
	setFilteredList: (cards: Card[]) => set({ filteredList: cards }),
	inputValue: '',
	setInputValue: (value: string) => set({ inputValue: value }),
}));
