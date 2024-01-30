import { Table } from 'antd';
import Header from './presentation/Header/Header';
import UseGenerateColumns from '../usecase/UseGenerateColumns';

const RolesContainer = () => {
	const { columns } = UseGenerateColumns();
	return (
		<div>
			<div className="my-[10px]">
				<Header />
			</div>
			<Table columns={columns} />
		</div>
	);
};

export default RolesContainer;
