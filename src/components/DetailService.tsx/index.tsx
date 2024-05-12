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
} from '@fortawesome/free-solid-svg-icons';

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

type DetailServiceProps = {
	type: string;
	text: string;
};

export const DetailService = ({ type, text }: DetailServiceProps) => {
	const renderIcon = () => {
		switch (type) {
			case 'access':
				return <FontAwesomeIcon icon={faGlobeAmericas} className='md:text-2xl 2xl:text-4xl' />;
			case 'account':
				return <FontAwesomeIcon icon={faUser} className='md:text-2xl 2xl:text-4xl' />;
			case 'credentials':
				return <FontAwesomeIcon icon={faUserLock} className='md:text-2xl 2xl:text-4xl' />;
			case 'device':
				return <FontAwesomeIcon icon={faUser} className='md:text-2xl 2xl:text-4xl' />;
			case 'devices':
				return (
					<div className='flex flex-wrap gap-2 items-center justify-center'>
						<FontAwesomeIcon icon={faMobile} className='text-xl 2xl:text-2xl' />
						<FontAwesomeIcon icon={faLaptop} className='text-xl 2xl:text-2xl' />
						<FontAwesomeIcon icon={faTv} className='text-xl 2xl:text-2xl' />
						<FontAwesomeIcon icon={faTablet} className='text-xl 2xl:text-2xl' />
					</div>
				);
			case 'duration':
				return <FontAwesomeIcon icon={faClock} className='md:text-2xl 2xl:text-4xl' />;
			case 'multiple':
				return <FontAwesomeIcon icon={faUsers} className='md:text-2xl 2xl:text-4xl' />;
			case 'profile':
				return <FontAwesomeIcon icon={faUser} className='md:text-2xl 2xl:text-4xl' />;
			case 'quality':
				return <QualityIcon className='w-20 h-10' />;
			case 'renewable':
				return <FontAwesomeIcon icon={faRotateBackward} className='md:text-2xl 2xl:text-4xl' />;
			case 'warranty':
				return <FontAwesomeIcon icon={faCalendarCheck} className='md:text-2xl 2xl:text-4xl' />;

			default:
				return <></>;
		}
	};

	return (
		<li className='flex flex-col items-center max-w-[140px] xl:max-w-[130px] w-full border rounded-lg bg-blue-600'>
			<span className='h-10 2xl:h-14 flex items-center justify-center bg-white/30 w-full'>{renderIcon()}</span>
			<div className='bg-blue-700 w-full rounded-b-lg h-[calc(100%-40px)] 2xl:h-[calc(100%-56px)]'>
				<p
					className={`px-2 py-2 text-center h-full flex justify-center items-center ${
						text.length >= 20 ? 'text-xs' : ''
					}`}>
					{text}
				</p>
			</div>
		</li>
	);
};
