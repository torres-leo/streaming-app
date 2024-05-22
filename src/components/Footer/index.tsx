import React from 'react';
import Socials from '../Socials';

export default function Footer() {
	return (
		<footer className='bg-gray-950 text-white text-center py-4'>
			<p className='mb-3 text-sm'>&copy; {new Date().getFullYear()} Pez Streaming</p>
			<Socials className='mb-0' withBorder={false} size='w-5 !h-5' />
		</footer>
	);
}
