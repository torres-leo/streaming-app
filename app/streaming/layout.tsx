type LayoutProps = {
	children: React.ReactNode;
};

const layout = ({ children }: LayoutProps) => {
	return <div className='wrapper'>{children}</div>;
};

export default layout;
