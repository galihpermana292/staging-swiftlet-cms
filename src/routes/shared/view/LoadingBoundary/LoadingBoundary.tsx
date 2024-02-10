import { Spin } from 'antd';

interface LoadingBoundaryI {
	loading: boolean;
	children: React.ReactNode;
}

const LoadingBoundary = ({ loading, children }: LoadingBoundaryI) => {
	if (loading) {
		return (
			<div className="h-[80vh] justify-center items-center bg-white  flex">
				<Spin />
			</div>
		);
	}
	return children;
};

export default LoadingBoundary;
