import { generateSlug } from '@/src/utils';

const cards = [
	{
		id: 1,
		image: {
			src: '/images/cards/disney_starplus_paramount.png',
			alt: 'Disney + | Star + | Paramount +',
		},
		title: 'Combo plus',
		subtitle: 'Disney + | Star + | Paramount +',
		price: '250',
		category: 'combos',
	},
	{
		id: 2,
		image: {
			src: '/images/cards/duo_disney_starplus.png',
			alt: 'Disney + | Star +',
		},
		title: 'Disney + | Star +',
		price: '180',
		category: 'duos',
	},
	{
		id: 3,
		image: {
			src: '/images/cards/starplus_iptv_paramount.png',
			alt: 'Star + | IPTV | Paramount +',
		},
		title: 'Combo deportes',
		subtitle: 'Star + | IPTV | Paramount +',
		price: '300',
		category: 'combos',
	},
	{
		id: 4,
		image: {
			src: '/images/cards/duo_max_netflix.png',
			alt: 'Max & Netflix',
		},
		title: 'Duo MAX',
		subtitle: 'MAX & Netflix',
		price: '200',
		category: 'duos',
	},
	{
		id: 5,
		image: {
			src: '/images/cards/duo_max_disney.png',
			alt: 'Max & Disney +',
		},
		title: 'Duo MAX',
		subtitle: 'MAX & Disney +',
		price: '150',
		category: 'duos',
	},
	{
		id: 6,
		image: {
			src: '/images/cards/duo_max_starplus.png',
			alt: 'Max & Star +',
		},
		title: 'Duo MAX',
		subtitle: 'MAX & Star +',
		price: '170',
		category: 'duos',
	},
	{
		id: 7,
		image: {
			src: '/images/cards/duo_max_prime_video.png',
			alt: 'Max & Prime Video',
		},
		title: 'Duo MAX',
		subtitle: 'MAX & Prime Video',
		price: '150',
		category: 'duos',
	},
	{
		id: 8,
		image: {
			src: '/images/cards/duo_max_spotify.png',
			alt: 'Max & Spotify Premium',
		},
		title: 'Duo MAX',
		subtitle: 'MAX & Spotify Premium',
		price: '180',
		category: 'duos',
	},
	{
		id: 9,
		image: {
			src: '/images/cards/duo_max_crunchy.png',
			alt: 'Max & Crunchyroll',
		},
		title: 'Duo MAX',
		subtitle: 'MAX & Crunchyroll',
		price: '150',
		category: 'duos',
	},
	{
		id: 10,
		image: {
			src: '/images/cards/duo_max_yt.png',
			alt: 'Max & Youtube Premium',
		},
		title: 'Duo MAX',
		subtitle: 'MAX & Youtube Premium',
		price: '180',
		category: 'duos',
	},
	{
		id: 11,
		image: {
			src: '/images/cards/duo_max_iptv.png',
			alt: 'Max & IPTV',
		},
		title: 'Duo MAX',
		subtitle: 'MAX & IPTV',
		price: '200',
		category: 'duos',
	},
	{
		id: 12,
		image: {
			src: '/images/cards/duo_max_paramount.png',
			alt: 'Max & Paramount +',
		},
		title: 'Duo MAX',
		subtitle: 'MAX & Paramount +',
		price: '150',
		category: 'duos',
	},
	{
		id: 13,
		image: {
			src: '/images/cards/duo_max_vix.png',
			alt: 'Max & Vix Plus',
		},
		title: 'Duo MAX',
		subtitle: 'MAX & Vix Plus',
		price: '150',
		category: 'duos',
	},
	{
		id: 14,
		image: {
			src: '/images/cards/duo_iptv_netflix.png',
			alt: 'IPTV & Netflix',
		},
		title: 'Duo IPTV',
		subtitle: 'IPTV & Netflix',
		price: '280',
		category: 'duos',
	},
	{
		id: 15,
		image: {
			src: '/images/cards/duo_iptv_disney.png',
			alt: 'IPTV & Disney +',
		},
		title: 'Duo IPTV',
		subtitle: 'IPTV & Disney +',
		price: '220',
		category: 'duos',
	},
	{
		id: 16,
		image: {
			src: '/images/cards/duo_iptv_starplus.png',
			alt: 'IPTV & Star +',
		},
		title: 'Duo IPTV',
		subtitle: 'IPTV & Star +',
		price: '250',
		category: 'duos',
	},
	{
		id: 17,
		image: {
			src: '/images/cards/duo_iptv_max.png',
			alt: 'IPTV & MAX',
		},
		title: 'Duo IPTV',
		subtitle: 'IPTV & MAX',
		price: '220',
		category: 'duos',
	},
	{
		id: 18,
		image: {
			src: '/images/cards/duo_iptv_prime_video.png',
			alt: 'IPTV & Prime Video',
		},
		title: 'Duo IPTV',
		subtitle: 'IPTV & Prime Video',
		price: '220',
		category: 'duos',
	},
	{
		id: 19,
		image: {
			src: '/images/cards/duo_iptv_spotify.png',
			alt: 'IPtV & Spotify Premium',
		},
		title: 'Duo IPTV',
		subtitle: 'IPTV & Spotify Premium',
		price: '250',
		category: 'duos',
	},
	{
		id: 20,
		image: {
			src: '/images/cards/duo_iptv_yt.png',
			alt: 'IPtV & Youtube Premium',
		},
		title: 'Duo IPTV',
		subtitle: 'IPTV & Youtube Premium',
		price: '250',
		category: 'duos',
	},
	{
		id: 21,
		image: {
			src: '/images/cards/duo_iptv_paramount.png',
			alt: 'IPtV & Paramount Plus',
		},
		title: 'Duo IPTV',
		subtitle: 'IPTV & Paramount Plus',
		price: '220',
		category: 'duos',
	},
	{
		id: 22,
		image: {
			src: '/images/cards/duo_iptv_crunchy.png',
			alt: 'IPtV & Crunchyroll',
		},
		title: 'Duo IPTV',
		subtitle: 'IPTV & Crunchyroll',
		price: '220',
		category: 'duos',
	},
	{
		id: 23,
		image: {
			src: '/images/cards/duo_iptv_vix.png',
			alt: 'IPtV & Vix Plus',
		},
		title: 'Duo IPTV',
		subtitle: 'IPTV & Vix Plus',
		price: '220',
		category: 'duos',
	},
	{
		id: 24,
		image: {
			src: '/images/cards/netflix_iptv_max_disney.png',
			alt: 'Netflix | IPTV | MAX | Disney +',
		},
		title: 'Netflix | IPTV | MAX | Disney +',
		price: '390',
		category: 'combos',
	},
	{
		id: 25,
		image: {
			src: '/images/cards/netflix_iptv_max.png',
			alt: 'Netflix | IPTV | MAX',
		},
		title: 'Netflix | IPTV | MAX',
		price: '330',
		category: 'combos',
	},
	{
		id: 26,
		image: {
			src: '/images/cards/netflix_spotify_max.png',
			alt: 'Netflix | Spotify Premium | MAX',
		},
		title: 'Netflix | Spotify Premium | MAX',
		price: '300',
		category: 'combos',
	},
	{
		id: 27,
		image: {
			src: '/images/cards/duo_netflix_disney.png',
			alt: 'Netflix & Disney +',
		},
		title: 'Duo NETFLIX',
		subtitle: 'Netflix & Disney +',
		price: '220',
		category: 'duos',
	},
	{
		id: 28,
		image: {
			src: '/images/cards/duo_netflix_starplus.png',
			alt: 'Netflix & Star +',
		},
		title: 'Duo NETFLIX',
		subtitle: 'Netflix & Star +',
		price: '250',
		category: 'duos',
	},
	{
		id: 29,
		image: {
			src: '/images/cards/duo_netflix_max.png',
			alt: 'Netflix & MAX',
		},
		title: 'Duo NETFLIX',
		subtitle: 'Netflix & MAX',
		price: '220',
		category: 'duos',
	},
	{
		id: 30,
		image: {
			src: '/images/cards/duo_netflix_yt.png',
			alt: 'Netflix & Youtube Premium',
		},
		title: 'Duo NETFLIX',
		subtitle: 'Netflix & Youtube Premium',
		price: '250',
		category: 'duos',
	},
	{
		id: 31,
		image: {
			src: '/images/cards/duo_netflix_spotify.png',
			alt: 'Netflix & Spotify Premium',
		},
		title: 'Duo NETFLIX',
		subtitle: 'Netflix & Spotify Premium',
		price: '250',
		category: 'duos',
	},
	{
		id: 32,
		image: {
			src: '/images/cards/duo_netflix_prime.png',
			alt: 'Netflix & Prime Video',
		},
		title: 'Duo NETFLIX',
		subtitle: 'Netflix & Prime Video',
		price: '220',
		category: 'duos',
	},
	{
		id: 33,
		image: {
			src: '/images/cards/duo_netflix_iptv.png',
			alt: 'Netflix & IPTV',
		},
		title: 'Duo NETFLIX',
		subtitle: 'Netflix & IPTV',
		price: '230',
		category: 'duos',
	},
	{
		id: 34,
		image: {
			src: '/images/cards/duo_netflix_crunchy.png',
			alt: 'Netflix & Crunchyroll',
		},
		title: 'Duo NETFLIX',
		subtitle: 'Netflix & Crunchyroll',
		price: '220',
		category: 'duos',
	},
	{
		id: 35,
		image: {
			src: '/images/cards/duo_netflix_paramount.png',
			alt: 'Netflix & Paramount +',
		},
		title: 'Duo NETFLIX',
		subtitle: 'Netflix & Paramount +',
		price: '220',
		category: 'duos',
	},
	{
		id: 36,
		image: {
			src: '/images/cards/duo_netflix_vix.png',
			alt: 'Netflix & Vix Plus',
		},
		title: 'Duo NETFLIX',
		subtitle: 'Netflix & Vix Plus',
		price: '220',
		category: 'duos',
	},
	{
		id: 37,
		image: {
			src: '/images/cards/duo_netflix_canva.png',
			alt: 'Netflix & Canva Pro',
		},
		title: 'Duo NETFLIX',
		subtitle: 'Netflix & Canva Pro',
		price: '220',
		category: 'duos',
	},
	{
		id: 38,
		image: {
			src: '/images/cards/netflix.webp',
			alt: 'NETFLIX',
		},
		title: 'NETFLIX',
		price: '160',
		category: 'individual',
	},
	{
		id: 39,
		image: {
			src: '/images/cards/disney.webp',
			alt: 'DISNEY +',
		},
		title: 'DISNEY +',
		price: '100',
		category: 'individual',
	},
	{
		id: 40,
		image: {
			src: '/images/cards/starplus.webp',
			alt: 'STAR +',
		},
		title: 'STAR +',
		price: '120',
		category: 'individual',
	},
	{
		id: 41,
		image: {
			src: '/images/cards/max.webp',
			alt: 'MAX +',
		},
		title: 'MAX +',
		price: '100',
		category: 'individual',
	},
	{
		id: 42,
		image: {
			src: '/images/cards/youtube.webp',
			alt: 'YOUTUBE PREMIUM',
		},
		title: 'YOUTUBE PREMIUM',
		price: '130',
		category: 'individual',
	},
	{
		id: 43,
		image: {
			src: '/images/cards/spotify.webp',
			alt: 'SPOTIFY PREMIUM',
		},
		title: 'SPOTIFY PREMIUM',
		price: '130',
		category: 'individual',
	},
	{
		id: 44,
		image: {
			src: '/images/cards/prime-video.webp',
			alt: 'AMAZON PRIME VIDEO',
		},
		title: 'AMAZON PRIME VIDEO',
		price: '100',
		category: 'individual',
	},
	{
		id: 45,
		image: {
			src: '/images/cards/iptv.png',
			alt: 'IPTV',
		},
		title: 'IPTV',
		price: '180',
		category: 'individual',
	},
	{
		id: 46,
		image: {
			src: '/images/cards/crunchy.webp',
			alt: 'CRUNCHYROLL',
		},
		title: 'CRUNCHYROLL',
		price: '100',
		category: 'individual',
	},
	{
		id: 47,
		image: {
			src: '/images/cards/paramount.webp',
			alt: 'PARAMOUNT PLUS',
		},
		title: 'PARAMOUNT PLUS',
		price: '100',
		category: 'individual',
	},
	{
		id: 48,
		image: {
			src: '/images/cards/vix.webp',
			alt: 'VIX PLUS',
		},
		title: 'VIX PLUS',
		price: '100',
		category: 'individual',
	},
	{
		id: 49,
		image: {
			src: '/images/cards/canva.webp',
			alt: 'CANVA PRO',
		},
		title: 'CANVA PRO',
		price: '120',
		category: 'individual',
	},
];

export const cardsInfo = cards.map((card) => {
	let slug = '';

	if (card.subtitle) {
		slug = generateSlug(card.subtitle);
	} else {
		slug = generateSlug(card.title);
	}

	return { ...card, slug };
});
