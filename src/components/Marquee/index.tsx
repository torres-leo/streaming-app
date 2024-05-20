import Image from 'next/image';
import Marquee from 'react-fast-marquee';
import HboText from '@/src/components/svgs/hbo';

type MarqueeImagesProps = {
	src: string;
	alt: string;
	secondary?: string;
};

export default function MarqueeImages({ info }: { info: MarqueeImagesProps[] }) {
	const renderImages = () => {
		return info.map((item) => {
			if (item.alt === 'MAX')
				return (
					<div key={crypto.randomUUID()} className='marquee-element relative'>
						<Image
							className='marquee-image mr-0'
							src={item.src}
							alt={item.alt}
							width={200}
							height={200}
							quality={70}
							loading='lazy'
						/>
						<HboText customClass='absolute top-0 flex justify-center items-center h-full mx-auto w-full scale-[.3]' />
					</div>
				);

			if (item.secondary)
				return (
					<div key={crypto.randomUUID()} className='marquee-element relative'>
						<Image className='marquee-image mr-0' src={item.src} alt={item.alt} width={200} height={200} quality={70} />
						<Image
							className='absolute top-0 content-center h-full w-full z-10 block opacity-[.35]'
							src={item.secondary}
							width={200}
							height={200}
							quality={70}
							alt={item.alt}
							loading='lazy'
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
					quality={70}
					loading='lazy'
				/>
			);
		});
	};

	return (
		<div className='relative select-none'>
			<Marquee speed={30} autoFill className=''>
				{renderImages()}
			</Marquee>

			<div className='absolute select-none top-0 blur-xl'>
				<Marquee speed={30} autoFill>
					{renderImages()}
				</Marquee>
			</div>
		</div>
	);
}
