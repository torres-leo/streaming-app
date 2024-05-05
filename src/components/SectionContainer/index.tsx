type SectionProps = {
	children: React.ReactNode;
	title?: string;
	customClass: string;
};

export default function Section({ children, title, customClass }: SectionProps) {
	const renderTitle = () => {
		if (!title) return;

		return <h2 className='primary-title'>{title}</h2>;
	};

	return (
		<section className={`section ${customClass}`}>
			{renderTitle()}
			<div className='section__wrapper'>{children}</div>
		</section>
	);
}
