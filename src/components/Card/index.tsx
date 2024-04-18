import { Card } from '@/src/models/tab';
import Image from 'next/image';

const Card = ({ item }: { item: Card }) => {
	return (
		<div className='w-full border rounded-lg shadow bg-gray-800 border-gray-500'>
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
			<div className='card__body'>
				<div className='card__body--info'>
					<h4 className='text-2xl font-semibold uppercase text-white/90'>{item.title}</h4>
					<p className=' text-xl text-gray-400 font-bold'>
						<span>C$</span>
						{item.price}
					</p>
				</div>
				<a
					href='#'
					className='inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white rounded-lg focus:ring-4 focus:outline-none  bg-blue-600 hover:bg-blue-700 focus:ring-blue-800'>
					Read more
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
	);
};

export default Card;
