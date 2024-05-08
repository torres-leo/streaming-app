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
}

export const useGlobalStore = create<GlobalStore>((set, get) => ({
	activeTab: localStorage.getItem('activeTab') || tabs[0],
	setActiveTab: (tab: string) => set({ activeTab: tab }),
	loading: true,
	setLoading: (loading: boolean) => set({ loading }),
	cardList: [],
	setCardList: (cards: Card[]) => set({ cardList: cards }),
}));
