type LayoutProps = {
	children: React.ReactNode;
};

const layout = ({ children }: LayoutProps) => {
	return <div className='wrapper max-w-[1000px] w-full mx-auto'>{children}</div>;
};

export default layout;
