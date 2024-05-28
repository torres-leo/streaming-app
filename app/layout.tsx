import type { Metadata } from 'next';
import { Open_Sans } from 'next/font/google';

import '@fortawesome/fontawesome-svg-core/styles.css';
import './globals.scss';

import Header from '@/src/components/Header';
import Head from 'next/head';
import Footer from '@/src/components/Footer';

const openSans = Open_Sans({ subsets: ['latin'] });
export const runtime = 'edge';

export const metadata: Metadata = {
	title: 'Pez Streaming',
	description:
		'Adquiere los mejores servicios de streaming al mejor precio y disfruta de una gran variedad de peliculas, series, canales en vivo y mucho más!',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='es'>
			<body className={`${openSans.className} bg-gray-950`}>
				<Header />
				<main className='main-container'>{children}</main>
				<Footer />
			</body>
		</html>
	);
}
