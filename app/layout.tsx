import type { Metadata } from 'next';
import { Inter, Open_Sans } from 'next/font/google';

import Header from '@/app/components/Header';
import '@fortawesome/fontawesome-svg-core/styles.css';
import './globals.scss';

const inter = Inter({ subsets: ['latin'] });
const openSans = Open_Sans({ subsets: ['latin'] });

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
			<body className={`${openSans.className}bg-gray-950`}>
				<Header />
				<main className='main-container'>{children}</main>
			</body>
		</html>
	);
}
