import Link from 'next/link';
import Image from 'next/image';

import { useGlobalStore } from '@/src/store/global';
import { dollarValue } from '@/src/utils';

import { Card } from '@/src/models';

const CardComponent = ({ item }: { item: Card }) => {
	const { cardList } = useGlobalStore();

	const renderPricing = (
		<p className=' text-xl text-amber-500 font-bold flex items-center justify-evenly w-full mb-2'>
			<span className='px-1 rounded-lg bg-black/10 border text-center w-[100px]'>C$ {item.price}</span>-
			<span className='px-1 rounded-lg bg-black/10 border text-center w-[100px]'>
				$ {(Number(item.price) / dollarValue).toFixed(2)}
			</span>
		</p>
	);

	return (
		<article className='border rounded-lg shadow bg-gray-800 border-gray-500'>
			<div
				className={`border-b-2 select-none border-gray-600 overflow-hidden relative ${
					cardList.length > 12 ? 'h-[230px]' : 'h-[220px]'
				}`}>
				<Image className='card__image' src={item.image.src} alt={item.image.alt} quality={70} loading='lazy' fill />
			</div>
			<div className={`card__body`}>
				<div className={`card__body--info ${item.subtitle ? 'mb-4' : 'mb-0'}`}>
					<div className={`flex flex-col items-start gap-y-2 w-full ${item.subtitle ? 'mb-2' : 'mb-4'}`}>
						<h4 className='text-base leading-6 md:text-lg md:leading-[22px] lg:text-xl font-semibold uppercase text-white/90 mb-3'>
							{item.title}
						</h4>
						{renderPricing}
					</div>

					{item.subtitle && (
						<p className='text-center text-lg text-nowrap underline underline-offset-8 pb-1.5 border-b'>
							{item.subtitle}
						</p>
					)}
				</div>

				<div className={`w-full`}>
					<Link
						href={`streaming/${item.slug}`}
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
								strokeLinecap='round'
								strokeLinejoin='round'
								strokeWidth='2'
								d='M1 5h12m0 0L9 1m4 4L9 9'
							/>
						</svg>
					</Link>
				</div>
			</div>
		</article>
	);
};

export default CardComponent;
