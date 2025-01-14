import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faWhatsapp, faInstagram } from '@fortawesome/free-brands-svg-icons';

type SocialsProps = {
	className?: string;
	withBorder?: boolean;
	size?: string;
};

const socials = [
	{
		name: 'Facebook',
		url: 'https://www.facebook.com',
		icon: faFacebook,
		parentClass: 'border-blue-500 hover:border-white hover:scale-110 transition-all duration-300 ease-in-out',
		itemClass: 'hover:text-blue-500',
	},
	{
		name: 'Instagram',
		url: 'https://www.instagram.com/',
		icon: faInstagram,
		parentClass: 'border-pink-500 hover:border-white hover:scale-110 transition-all duration-300 ease-in-out',
		itemClass: 'hover:text-pink-500',
	},
	{
		name: 'WhatsApp',
		url: 'https://wa.me/1234567890',
		text: 'Hola,%0A%0AHe estado revisando su catálogo de servicios en la web y estoy interesado en obtener más información sobre algunos de ellos. ¿Podrían proporcionarme detalles adicionales o aclarar algunas dudas que tengo?',
		icon: faWhatsapp,
		parentClass: 'border-green-500 hover:border-white hover:scale-110 transition-all duration-300 ease-in-out',
		itemClass: 'hover:text-green-500',
	},
];

export default function Socials({ className, withBorder = true, size }: SocialsProps) {
	return (
		<ul className={`flex gap-x-4 items-center justify-center ${className}`}>
			{socials.map((social) => (
				<li key={social.name} className='text-white'>
					{social.name === 'WhatsApp' ? (
						<a
							href={`${social.url}?text=${social.text}`}
							target='_blank'
							rel='noreferrer noopener'
							className={`${social.parentClass} ${
								withBorder ? 'border-2 rounded-full p-1' : ''
							} flex items-center justify-center`}>
							<FontAwesomeIcon icon={social.icon} className={`${size ? size : 'w-6 !h-6'} ${social.itemClass}`} />
						</a>
					) : (
						<a
							href={social.url}
							target='_blank'
							rel='noreferrer noopener'
							className={`${social.parentClass} ${
								withBorder ? 'border-2 rounded-full p-1' : ''
							} flex items-center justify-center`}>
							<FontAwesomeIcon icon={social.icon} className={`${size ? size : 'w-6 !h-6'} ${social.itemClass}`} />
						</a>
					)}
				</li>
			))}
		</ul>
	);
}
