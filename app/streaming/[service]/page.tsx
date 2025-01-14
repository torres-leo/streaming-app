import Link from 'next/link';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

import { cardsInfo } from '@/data/cards';
import { convertToDollar } from '@/src/utils';

import NotFound from '@/app/not-found';
import { DetailService } from '@/src/components/DetailService.tsx';
import Contact from '@/src/components/Contact';

type CardServiceProps = {
	params: { service: string };
};

export function generateMetadata({ params }: CardServiceProps) {
	const service = params.service;
	const card = cardsInfo.find((card) => card.slug === service);

	return {
		title: `Straming App - ${card?.title ?? 'Not Found'}`,
		description: `Contrata tu servicio de ${card?.title ?? ''} en Streaming App`,
	};
}

export default function CardServiceProps({ params }: CardServiceProps) {
	const { service } = params;

	const card = cardsInfo.find((card) => card.slug === service);
	const containsHTML = (str: string) => /<\/?[a-z][\s\S]*>/i.test(str);

	if (!card) {
		return <NotFound />;
	}

	const renderTitle = () => {
		return (
			<h1 className='service-title uppercase leading-[1.2] animate-fade-up'>
				<span className='text-transparent gradient animate-gradient'>{card.title}</span>
			</h1>
		);
	};

	const renderPricing = (
		<div className='flex flex-col items-center relative justify-center border border-white/80 w-full sm:w-1/2 mx-auto py-2.5 px-3 rounded-md bg-white/5'>
			<div className='animate-pulse absolute h-full w-full shadow-2xl shadow-amber-400/40'></div>
			<p className='text-3xl font-bold mb-2 tracking-wide text-gray-200'>Precio</p>
			<div className='flex gap-x-12 items-center justify-center text-amber-300 font-light'>
				<p className='text-2xl leading-[1.5] text-center'>
					Córdobas: <span className='text-gray-200 font-medium block'>C$ {card.price}</span>
				</p>
				<p className='text-2xl leading-[1.5] text-center'>
					Dólares: <span className='text-gray-200 font-medium block'>${convertToDollar(Number(card.price))}</span>
				</p>
			</div>
		</div>
	);

	const renderInfoIndividual = () => {
		if (card.category === 'individual' || card.category === 'cuenta completa')
			return (
				<div className='flex flex-col gap-y-8 animate-fade-up'>
					{renderPricing}

					<div>
						<Contact message={card.contactMessage} className='w-full sm:w-1/2 xl:w-2/5 block mb-8 mx-auto' />
						<ul className='flex gap-6 flex-wrap justify-center'>
							{card.info?.map((info) => (
								<DetailService key={info.value} type={info.type} text={info.value} />
							))}
						</ul>
					</div>
				</div>
			);

		return null;
	};

	const renderInfoDuos = () => {
		if (card.category === 'duos' || card.category === 'combos')
			return (
				<div className='flex flex-col gap-y-16 animate-fade-up'>
					{renderPricing}

					<div>
						<div
							className={`flex gap-x-4 items-center justify-evenly mb-8 lg:mb-10 ${
								!card.plan ? 'md:justify-end' : 'md:justify-between'
							}`}>
							{card.plan && (
								<h6 className='text-xl md:text-3xl underline underline-offset-8 capitalize text-white'>
									{card.plan} -{' '}
									<span className='max-xs:text-base text-xl text-amber-400 no-underline'>(cada cuenta)</span>
								</h6>
							)}
							<Contact message={card.contactMessage} />
						</div>
						<ul className='flex gap-6 flex-wrap justify-center'>
							{card.info?.map((info) => (
								<DetailService key={info.value} type={info.type} text={info.value} />
							))}
						</ul>
					</div>
				</div>
			);

		return null;
	};

	const renderNotes = () => {
		if (card.notes) {
			return (
				<div className='mt-2 grid grid-cols-1 md:grid-cols-2 text-center gap-y-3 md:gap-y-0 gap-x-8 animate-fade-up'>
					<div>
						<h2 className='text-3xl md:text-4xl text-center text-amber-500 font-semibold mb-3 md:mb-4'>Notas</h2>
						<ul className='flex gap-y-2 flex-wrap list-decimal list-inside'>
							{card.notes.map((note) => (
								<li key={note} className='text-lg text-left text-gray-300 leading-[1.2]'>
									{note}
								</li>
							))}
						</ul>
					</div>

					<div>
						<h3 className='text-3xl md:text-4xl text-center text-amber-500 font-semibold mb-3 md:mb-4'>Pasos</h3>
						<ul className='flex gap-y-2 flex-wrap list-decimal list-inside'>
							{card.steps?.map((step, idx) => (
								<li key={idx} className='text-lg text-left text-gray-300 leading-[1.2]'>
									{containsHTML(step) ? (
										<span
											className='underline underline-offset-2 text-blue-400'
											dangerouslySetInnerHTML={{ __html: step }}
										/>
									) : (
										step
									)}
								</li>
							))}
						</ul>
					</div>
				</div>
			);
		}
	};

	return (
		<div className='service'>
			<Link
				href='/'
				className='py-1.5 px-3 bg-red-600 hover:bg-red-700 rounded inline-flex text-center items-center gap-x-2 border'>
				<FontAwesomeIcon icon={faArrowLeft} />
				volver
			</Link>

			<div className='service-content'>
				<div className='service-image select-none'>
					<Image src={card.image.src} alt={card.image.alt} fill quality={70} loading='lazy' />
				</div>
				<div className='service-info'>
					{renderTitle()}
					{card?.subtitle && (
						<p className='text-center text-3xl md:text-[34px] tracking-wide text-amber-500 font-semibold mb-6 md:mb-10'>
							{card.subtitle}
						</p>
					)}
					{renderInfoIndividual()}
					{renderInfoDuos()}
					{renderNotes()}
				</div>
			</div>
		</div>
	);
}
