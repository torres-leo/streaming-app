import { Card } from '@/src/models';
import Image from 'next/image';

const CardComponent = ({ item }: { item: Card }) => {
	return (
		<article className='w-full border rounded-lg shadow bg-gray-800 border-gray-500'>
			<div className='border-b border-gray-600 overflow-hidden'>
				<Image
					className='card__image'
					src={item.image.cardImage ?? item.image.src}
					width={200}
					height={200}
					alt={item.image.alt}
					quality={100}
				/>
			</div>
			<div className={`card__body ${item.subtitle ? 'h-[150px]' : 'h-32'}`}>
				<div className='card__body--info'>
					<div className='flex  items-center justify-between mb-2 w-full'>
						<h4 className='text-base md:text-lg !leading-5 font-semibold uppercase text-white/90'>{item.title}</h4>
						<p className=' text-xl text-gray-400 font-bold '>C${item.price}</p>
					</div>

					<p className='text-center text-lg'>{item.subtitle ? item.subtitle : ''}</p>
				</div>

				<div className={`absolute ${item.subtitle ? 'bottom-4' : 'bottom-5'} `}>
					<a
						href='https://wa.me/50589923583?text=Hola%20quiero%20saber%20mas%20de%20este%20servicio%20de%20streaming'
						target='_blank'
						rel='noreferrer noopener'
						className='inline-flex outline-none items-center px-2.5 py-1.5 text-sm font-medium text-center text-white rounded-md focus:outline-none  bg-blue-600 hover:bg-blue-700 transition-all'>
						Leer más
						<svg
							className='rtl:rotate-180 w-3.5 h-3.5 ms-2'
							aria-hidden='true'
							xmlns='http://www.w3.org/2000/svg'
							fill='none'
							viewBox='0 0 14 10'>
							<path
								stroke='currentColor'
								stroke-linecap='round'
								stroke-linejoin='round'
								stroke-width='2'
								d='M1 5h12m0 0L9 1m4 4L9 9'
							/>
						</svg>
					</a>
				</div>
			</div>
		</article>
	);
};

export default CardComponent;
