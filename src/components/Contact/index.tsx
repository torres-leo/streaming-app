import Link from 'next/link';

export default function Contact({ message }: { message: string | undefined }) {
	return (
		<Link
			href={`https://wa.me/50588608870?text=${message}`}
			target='_blank'
			rel='noreferrer noopener'
			className='bg-green-500 hover:bg-green-600 rounded-lg py-2 px-4 border text-center text-sm md:text-base'>
			Adquirir
		</Link>
	);
}
