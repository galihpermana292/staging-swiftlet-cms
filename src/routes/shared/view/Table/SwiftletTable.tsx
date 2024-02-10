import { Table } from 'antd';
import { SwiftletTabelI } from '../../models/interfaces';

interface SwiftletTableProps<T> extends SwiftletTabelI {
	data?: T[]; // Make the data prop dynamic
}

const SwiftletTable = <T extends object>({
	columns,
	data,
	metadata,
	onPaginationChanges,
	loading,
	filterComponents,
}: SwiftletTableProps<T>) => {
	return (
		<div>
			<div className="max-w-[300px] mb-[20px]">{filterComponents}</div>
			<div>
				<Table
					loading={loading}
					columns={columns}
					dataSource={data}
					pagination={{
						total: metadata ? metadata.total_items : 10,
						pageSize: metadata ? metadata.limit : 10,
						onChange(page) {
							onPaginationChanges((state) => ({ ...state, page }));
						},
						current: metadata ? metadata.current_page : 1,
					}}
				/>
			</div>
		</div>
	);
};

export default SwiftletTable;
