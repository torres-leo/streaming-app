import Image from 'next/image';
import Marquee from 'react-fast-marquee';
import HomeInfo from '@/data/Home.json';

import Section from './components/SectionContainer';
import HboText from '@/app/components/svgs/hbo';
import Tabs from './components/Tabs';

export default function Home() {
	const renderImages = () => {
		return HomeInfo.MARQUEE.map((item) => {
			if (item.alt === 'HBO MAX')
				return (
					<div key={crypto.randomUUID()} className='marquee-element relative'>
						<Image
							className='marquee-image mr-0'
							src={item.src}
							alt={item.alt}
							width={200}
							height={200}
							quality={100}
						/>
						<HboText customClass='absolute top-0 flex justify-center items-center h-full mx-auto w-full scale-[.3]' />
					</div>
				);

			if (item.secondary)
				return (
					<div key={crypto.randomUUID()} className='marquee-element relative'>
						<Image
							className='marquee-image mr-0'
							src={item.src}
							alt={item.alt}
							width={200}
							height={200}
							quality={100}
						/>
						<Image
							className='absolute top-0 content-center h-full w-full z-10 block opacity-[.35]'
							src={item.secondary}
							width={200}
							height={200}
							quality={100}
							alt={item.alt}
						/>
					</div>
				);

			return (
				<Image
					className='marquee-image'
					key={crypto.randomUUID()}
					src={item.src}
					alt={item.alt}
					width={200}
					height={200}
					quality={100}
				/>
			);
		});
	};

	return (
		<>
			<Section customClass='marquee mb-20'>
				<h1 className='text-center mb-10 text-balance text-3xl leading-10 md:text-4xl md:leading-[1.3] lg:text-5xl lg:leading-[1.3] font-bold max-w-[750px] mx-auto text-white/85'>
					Contrata los mejores servicios de Streaming al mejor precio!
				</h1>
				<div className='relative'>
					<Marquee speed={30} autoFill>
						{renderImages()}
					</Marquee>

					<div className='absolute top-0 blur-xl'>
						<Marquee speed={30} autoFill>
							{renderImages()}
						</Marquee>
					</div>
				</div>
			</Section>

			<Section customClass='streaming' title='Servicios de Streaming'>
				<Tabs info={HomeInfo.TABS} />
			</Section>
		</>
	);
}
