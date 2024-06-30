'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { isMobile } from '@/src/utils';

const Header = () => {
	const path = usePathname();

	const isOnStreamingPage = path.includes('streaming');

	return (
		<header className={`header select-none ${isOnStreamingPage && isMobile() ? 'sticky top-0' : ''}`}>
			<div className='main-container'>
				<div className='header-wrapper pt-2 pb-2'>
					<div className='flex gap-x-4 items-center'>
						<Link href='/'>
							<p className='text-lg font-bold tracking-wide uppercase pointer-events-none text-gray-200'>
								Streaming App
							</p>
						</Link>
					</div>
				</div>
			</div>
		</header>
	);
};

export default Header;
