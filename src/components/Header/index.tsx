import Image from 'next/image';
import Link from 'next/link';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
	return (
		<header className='header'>
			<div className='main-container'>
				<div className='wrapper pt-2 pb-2'>
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

					{/* <div className='flex items-center gap-x-2'>
						<p className='font-bold tracking-wide text-sm'>Inicia sesión</p>
						<FontAwesomeIcon icon={faUser} className='text-sm' />
					</div> */}
				</div>
			</div>
		</header>
	);
};

export default Header;
