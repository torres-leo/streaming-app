const Section = ({
	children,
	title,
	customClass,
}: {
	children: React.ReactNode;
	title?: string;
	customClass: string;
}) => {
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
};

export default Section;
