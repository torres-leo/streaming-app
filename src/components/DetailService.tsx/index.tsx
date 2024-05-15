import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faCalendarCheck,
	faClock,
	faGlobeAmericas,
	faLaptop,
	faMobile,
	faRotateBackward,
	faTablet,
	faTv,
	faUser,
	faUserLock,
	faUsers,
	faCircleDown,
	faRectangleAd,
	faBan,
	faWifi3,
} from '@fortawesome/free-solid-svg-icons';
import { faYoutube, faSpotify } from '@fortawesome/free-brands-svg-icons';

const Live = ({ className }: { className?: string }) => {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			viewBox='0 0 24 24'
			fill='none'
			stroke='currentColor'
			stroke-width='2'
			stroke-linecap='round'
			stroke-linejoin='round'
			className={className}>
			<path stroke='none' d='M0 0h24v24H0z' fill='none' />
			<path d='M15 10l4.553 -2.276a1 1 0 0 1 1.447 .894v6.764a1 1 0 0 1 -1.447 .894l-4.553 -2.276v-4z' />
			<path d='M3 6m0 2a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2h-8a2 2 0 0 1 -2 -2z' />
			<path d='M7 12l4 0' />
			<path d='M9 10l0 4' />
		</svg>
	);
};

const QualityHD = ({ className }: { className?: string }) => {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			viewBox='0 0 24 24'
			fill='none'
			stroke='currentColor'
			stroke-width='2'
			stroke-linecap='round'
			stroke-linejoin='round'
			className={className}>
			<path stroke='none' d='M0 0h24v24H0z' fill='none' />
			<path d='M3 5m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z' />
			<path d='M14 9v6h1a2 2 0 0 0 2 -2v-2a2 2 0 0 0 -2 -2h-1z' />
			<path d='M7 15v-6' />
			<path d='M10 15v-6' />
			<path d='M7 12h3' />
		</svg>
	);
};

const LockPassword = ({ className }: { className?: string }) => {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			viewBox='0 0 24 24'
			fill='none'
			stroke='currentColor'
			stroke-width='2'
			stroke-linecap='round'
			stroke-linejoin='round'
			className={className}>
			<path stroke='none' d='M0 0h24v24H0z' fill='none' />
			<path d='M12 3c7.2 0 9 1.8 9 9s-1.8 9 -9 9s-9 -1.8 -9 -9s1.8 -9 9 -9z' />
			<path d='M8 11m0 1a1 1 0 0 1 1 -1h6a1 1 0 0 1 1 1v3a1 1 0 0 1 -1 1h-6a1 1 0 0 1 -1 -1z' />
			<path d='M10 11v-2a2 2 0 1 1 4 0v2' />
		</svg>
	);
};

const QualityIcon = ({ className }: { className?: string }) => {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			viewBox='0 0 24 24'
			fill='none'
			stroke='currentColor'
			stroke-width='2'
			stroke-linecap='round'
			stroke-linejoin='round'
			className={className}>
			<path stroke='none' d='M0 0h24v24H0z' fill='none' />
			<path d='M3 5m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z' />
			<path d='M7 9v2a1 1 0 0 0 1 1h1' />
			<path d='M10 9v6' />
			<path d='M14 9v6' />
			<path d='M17 9l-2 3l2 3' />
			<path d='M15 12h-1' />
		</svg>
	);
};

const TemplateIcon = ({ className }: { className?: string }) => {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			viewBox='0 0 24 24'
			fill='none'
			stroke='currentColor'
			stroke-width='2'
			stroke-linecap='round'
			stroke-linejoin='round'
			className={className}>
			<path stroke='none' d='M0 0h24v24H0z' fill='none' />
			<path d='M4 4m0 1a1 1 0 0 1 1 -1h14a1 1 0 0 1 1 1v2a1 1 0 0 1 -1 1h-14a1 1 0 0 1 -1 -1z' />
			<path d='M4 12m0 1a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v6a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z' />
			<path d='M14 12l6 0' />
			<path d='M14 16l6 0' />
			<path d='M14 20l6 0' />
		</svg>
	);
};

type DetailServiceProps = {
	type: string;
	text: string;
};

export const DetailService = ({ type, text }: DetailServiceProps) => {
	const renderIcon = () => {
		switch (type) {
			case 'access':
				return <FontAwesomeIcon icon={faGlobeAmericas} className='text-xl md:text-2xl 2xl:text-4xl' />;
			case 'account':
				return <FontAwesomeIcon icon={faUser} className='text-xl md:text-2xl 2xl:text-4xl' />;
			case 'audio':
				return <FontAwesomeIcon icon={faSpotify} className='text-xl md:text-2xl 2xl:text-4xl' />;
			case 'credentials':
				return <FontAwesomeIcon icon={faUserLock} className='text-xl md:text-2xl 2xl:text-4xl' />;
			case 'device':
				return <FontAwesomeIcon icon={faUser} className='text-xl md:text-2xl 2xl:text-4xl' />;
			case 'devices':
				return (
					<div className='flex flex-wrap gap-2 items-center justify-center'>
						<FontAwesomeIcon icon={faMobile} className='text-xl 2xl:text-2xl' />
						<FontAwesomeIcon icon={faLaptop} className='text-xl 2xl:text-2xl' />
						<FontAwesomeIcon icon={faTv} className='text-xl 2xl:text-2xl' />
						<FontAwesomeIcon icon={faTablet} className='text-xl 2xl:text-2xl' />
					</div>
				);
			case 'download':
				return <FontAwesomeIcon icon={faCircleDown} className='text-xl md:text-2xl 2xl:text-4xl' />;
			case 'duration':
				return <FontAwesomeIcon icon={faClock} className='text-xl md:text-2xl 2xl:text-4xl' />;
			case 'live':
				return <Live className='w-20 h-8 md:h-10' />;
			case 'multiple':
				return <FontAwesomeIcon icon={faUsers} className='text-xl md:text-2xl 2xl:text-4xl' />;
			case 'noads':
				return (
					<>
						<FontAwesomeIcon icon={faRectangleAd} className='text-xl text-white md:text-2xl 2xl:text-4xl' />
						<FontAwesomeIcon icon={faBan} className='absolute text-black/55 text-xl md:text-2xl 2xl:text-4xl' />
					</>
				);
			case 'password':
				return <LockPassword className='w-20 h-8 md:h-10' />;
			case 'profile':
				return <FontAwesomeIcon icon={faUser} className='text-xl md:text-2xl 2xl:text-4xl' />;
			case 'quality':
				return <QualityIcon className='w-20 h-8 md:h-10' />;
			case 'qualitys':
				return (
					<div className='flex items-center'>
						<QualityIcon className='w-10 h-8 md:h-10' />
						<QualityHD className='w-10 h-8 md:h-10' />
					</div>
				);
			case 'renewable':
				return <FontAwesomeIcon icon={faRotateBackward} className='text-xl md:text-2xl 2xl:text-4xl' />;
			case 'template':
				return <TemplateIcon className='w-20 h-8 md:h-10' />;
			case 'warranty':
				return <FontAwesomeIcon icon={faCalendarCheck} className='text-xl md:text-2xl 2xl:text-4xl' />;
			case 'wifi':
				return <FontAwesomeIcon icon={faWifi3} className='text-xl md:text-2xl 2xl:text-4xl' />;
			case 'yt':
				return (
					<FontAwesomeIcon
						icon={faYoutube}
						className='text-xl md:text-2xl 2xl:text-4xl text-red-500 bg-white rounded'
					/>
				);
			case 'yt-music':
				return (
					<div className='flex gap-x-1 items-center'>
						<FontAwesomeIcon
							icon={faYoutube}
							className='text-xl md:text-2xl 2xl:text-4xl text-red-500 bg-white rounded'
						/>
						<p className='font-bold text-sm'>Music</p>
					</div>
				);

			default:
				return <></>;
		}
	};

	return (
		<li className='flex flex-col items-center max-w-[130px] w-full border rounded-lg bg-blue-600'>
			<span className='h-10 2xl:h-14 flex items-center justify-center bg-white/30 w-full'>{renderIcon()}</span>
			<div className='bg-blue-700 w-full rounded-b-lg h-[calc(100%-40px)] 2xl:h-[calc(100%-56px)]'>
				<p
					className={`px-2 py-2 max-xs:text-xs max-xs:tracking-wide text-base text-center h-full flex justify-center items-center ${
						text.length >= 20 ? 'text-xs' : ''
					}`}>
					{text}
				</p>
			</div>
		</li>
	);
};
