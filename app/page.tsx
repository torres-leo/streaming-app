import HomeInfo from '@/data/Home.json';

import Section from '@/src/components/SectionContainer';
import Tabs from '@/src/components/Tabs';
import MarqueeImages from '@/src/components/Marquee';

export default function Home() {
	return (
		<>
			<Section customClass=' mb-20'>
				<h1 className='text-center mb-10 text-balance text-2xl leading-9 md:text-4xl md:leading-[1.3] lg:text-5xl lg:leading-[1.3] font-bold max-w-[750px] mx-auto text-white/85'>
					Contrata los mejores servicios de Streaming al mejor precio!
				</h1>

				<MarqueeImages info={HomeInfo.MARQUEE} />
			</Section>

			<Section customClass='streaming' title='Servicios de Streaming'>
				<Tabs elements={HomeInfo.TABS} />
			</Section>
		</>
	);
}
