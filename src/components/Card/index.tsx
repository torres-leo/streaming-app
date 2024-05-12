import { Card } from '@/src/models';
import { useGlobalStore } from '@/src/store/global';
import Image from 'next/image';

const CardComponent = ({ item }: { item: Card }) => {
	const { cardList } = useGlobalStore();

	return (
		<article className='border rounded-lg shadow bg-gray-800 border-gray-500'>
			<div
				className={`border-b select-none border-gray-600 overflow-hidden relative ${
					cardList.length > 12 ? 'h-[230px]' : 'h-[200px]'
				}`}>
				<Image
					className={`card__image 
					${item.title.toLocaleLowerCase() === 'iptv' && 'rounded-3xl scale-105 hover:scale-110'}
					`}
					// src={item.image.cardImage ?? item.image.src}
					src={item.image.src}
					alt={item.image.alt}
					quality={100}
					fill
				/>
			</div>
			{/* <div className={`card__body ${item.subtitle ? 'h-[160px]' : 'h-[135px]'}`}> */}
			<div className={`card__body`}>
				<div className={`card__body--info ${!item.subtitle && 'mb-0'}`}>
					<div className='flex flex-col items-start gap-y-2 w-full mb-4'>
						<h4 className='text-base leading-5 md:text-xl md:text-balance md:leading-[22px] font-semibold uppercase text-white/90'>
							{item.title}
						</h4>
						<p className=' text-xl text-amber-500 font-bold'>C${item.price}</p>
					</div>

					{item.subtitle && (
						<p className='text-center text-lg text-nowrap underline underline-offset-8 pb-1.5 border-b'>
							{item.subtitle}
						</p>
					)}
				</div>

				{/* <div className={`absolute ${item.subtitle ? 'bottom-4' : 'bottom-5'} `}> */}
				<div className={`w-full`}>
					<a
						href='https://wa.me/50589923583?text=Hola%20quiero%20saber%20mas%20de%20este%20servicio%20de%20streaming'
						target='_blank'
						rel='noreferrer noopener'
						className='inline-flex w-full justify-center outline-none items-center px-2.5 border border-white py-1.5 text-sm font-medium text-center text-white rounded-md focus:outline-none  bg-blue-500 hover:bg-blue-600 transition-all'>
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
