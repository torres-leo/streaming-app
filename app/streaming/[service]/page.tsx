import Link from 'next/link';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

import { Card } from '@/src/models';
import { cardsInfo } from '@/data/cards';

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
		title: `Pez Straming - ${card?.title ?? 'Not Found'}`,
		description: `Contrata tu servicio de ${card?.title ?? ''} en Pez Streaming`,
	};
}

export default function CardServiceProps({ params }: CardServiceProps) {
	const { service } = params;

	const card = cardsInfo.find((card) => card.slug === service);

	if (!card) {
		return <NotFound />;
	}

	const renderTitle = () => {
		if (card.category === 'individual')
			return (
				<h1 className='service-title'>
					Cuenta <span className='text-transparent gradient animate-gradient'>{card.title}</span>
				</h1>
			);
		if (card.category === 'duos')
			return (
				<h1 className='service-title'>
					<span className='text-transparent gradient animate-gradient'>{card.title}</span>
				</h1>
			);
		if (card.category === 'combos')
			return (
				<h1 className='service-title'>
					<span className='text-transparent gradient animate-gradient'>{card.title}</span>
				</h1>
			);
	};

	const renderInfoIndividual = () => {
		if (card.category === 'individual')
			return (
				<div className='flex flex-col gap-y-16'>
					<div>
						<div
							className={`flex gap-x-4 items-center justify-evenly mb-8 lg:mb-10 ${
								!card.plan1 ? 'md:justify-end' : 'md:justify-between'
							}`}>
							{card.plan1 && (
								<h6 className='text-xl md:text-3xl underline underline-offset-8 capitalize'>{card.plan1}</h6>
							)}
							<Contact message={card.contactMessage1} />
						</div>
						<ul className='flex gap-6 flex-wrap justify-center'>
							{card.info1?.map((info) => (
								<DetailService key={info.value} type={info.type} text={info.value} />
							))}
						</ul>
					</div>

					{card.info2 && (
						<div>
							<div className='flex gap-x-4 items-center justify-evenly md:justify-between mb-8 lg:mb-10'>
								<h6 className='text-xl md:text-3xl underline underline-offset-8 capitalize'>{card.plan2}</h6>
								<Contact message={card.contactMessage2} />
							</div>
							<ul className='flex gap-6 flex-wrap justify-center'>
								{card.info2?.map((info) => (
									<DetailService key={info.value} type={info.type} text={info.value} />
								))}
							</ul>
						</div>
					)}
				</div>
			);

		return null;
	};

	const renderInfoDuos = () => {
		if (card.category === 'duos')
			return (
				<div className='flex flex-col gap-y-16'>
					<div>
						<div
							className={`flex gap-x-4 items-center justify-evenly mb-8 lg:mb-10 ${
								!card.plan1 ? 'md:justify-end' : 'md:justify-between'
							}`}>
							{card.plan1 && (
								<h6 className='text-xl md:text-3xl underline underline-offset-8 capitalize'>
									{card.plan1} -{' '}
									<span className='max-xs:text-base text-xl text-amber-400 no-underline'>(cada cuenta)</span>
								</h6>
							)}
							<Contact message={card.contactMessage1} />
						</div>
						<ul className='flex gap-6 flex-wrap justify-center'>
							{card.info1?.map((info) => (
								<DetailService key={info.value} type={info.type} text={info.value} />
							))}
						</ul>
					</div>

					{card.info2 && (
						<div>
							<div className='flex gap-x-4 items-center justify-evenly md:justify-between mb-8 lg:mb-10'>
								<h6 className='text-xl md:text-3xl underline underline-offset-8 capitalize'>{card.plan2}</h6>
								<Contact message={card.contactMessage2} />
							</div>
							<ul className='flex gap-6 flex-wrap justify-center'>
								{card.info2?.map((info) => (
									<DetailService key={info.value} type={info.type} text={info.value} />
								))}
							</ul>
						</div>
					)}
				</div>
			);

		return null;
	};

	const renderInfoCombos = () => {
		if (card.category === 'combos')
			return (
				<div className='flex flex-col gap-y-16'>
					<div>
						<div
							className={`flex gap-x-4 items-center justify-evenly mb-8 lg:mb-10 ${
								!card.plan1 ? 'md:justify-end' : 'md:justify-between'
							}`}>
							{card.plan1 && (
								<h6 className='text-xl md:text-3xl underline underline-offset-8 capitalize'>
									{card.plan1} -{' '}
									<span className='max-xs:text-base text-xl text-amber-400 no-underline'>(cada cuenta)</span>
								</h6>
							)}
							<Contact message={card.contactMessage1} />
						</div>
						<ul className='flex gap-6 flex-wrap justify-center'>
							{card.info1?.map((info) => (
								<DetailService key={info.value} type={info.type} text={info.value} />
							))}
						</ul>
					</div>

					{card.info2 && (
						<div>
							<div className='flex gap-x-4 items-center justify-evenly md:justify-between mb-8 lg:mb-10'>
								<h6 className='text-xl md:text-3xl underline underline-offset-8 capitalize'>{card.plan2}</h6>
								<Contact message={card.contactMessage2} />
							</div>
							<ul className='flex gap-6 flex-wrap justify-center'>
								{card.info2?.map((info) => (
									<DetailService key={info.value} type={info.type} text={info.value} />
								))}
							</ul>
						</div>
					)}
				</div>
			);

		return null;
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
					<Image src={card.image.src} alt={card.image.alt} fill quality={85} loading='lazy' />
				</div>
				<div className='service__info'>
					{renderTitle()}

					{card?.subtitle && (
						<p className='text-center text-3xl tracking-wide text-amber-500 font-semibold mb-6 md:mb-10'>
							{card.subtitle}
						</p>
					)}

					{renderInfoIndividual()}
					{renderInfoDuos()}
					{renderInfoCombos()}
				</div>
			</div>
		</div>
	);
}
