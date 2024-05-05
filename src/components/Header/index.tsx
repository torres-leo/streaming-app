'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { isMobile } from '@/src/utils';

const Header = () => {
	const path = usePathname();

	const isOnStreamingPage = path.includes('streaming');

	return (
		<header className={`header ${isOnStreamingPage && isMobile() ? 'sticky top-0' : ''}`}>
			<div className='main-container'>
				<div className='header-wrapper pt-2 pb-2'>
					<div className='flex gap-x-4 items-center'>
						<Link
							href='/'
							className='border-[2px] border-yellow-300/50 hover:border-[2px] hover:border-yellow-300/70 rounded-full inline-block transition hover:scale-105'>
							<Image
								src='/images/pez-streaming.webp'
								alt='logo'
								className='size-10 block bg-cover object-cover rounded-full'
								quality={100}
								width={100}
								height={100}
							/>
						</Link>

						{path === '/' && <p className='text-lg font-bold tracking-wide uppercase'>Pez Streaming</p>}
					</div>

					{path !== '/' && (
						<Link href='/' className='text-lg font-semibold tracking-wide uppercase'>
							Inicio
						</Link>
					)}
				</div>
			</div>
		</header>
	);
};

export default Header;
