import { Input, Table } from 'antd';
import { TableUsersI } from '../../../model/interfaces';
import FilterPopover from '../FilterPopover/FilterPopover';
import FormFilter from '../FormFilter/FormFilter';

const TableUsers = ({ columns, data, form }: TableUsersI) => {
	return (
		<div className="h-[80px]">
			<div className="flex h-[80px] gap-[10px]">
				<div className="max-w-[300px] mb-[20px] h-[80px] flex items-center">
					<Input placeholder="Search users" />
				</div>
				<div className="h-[80px] flex items-center">
					<FilterPopover>
						<FormFilter form={form} />
					</FilterPopover>
				</div>
			</div>
			<Table columns={columns} dataSource={data} />
		</div>
	);
};

export default TableUsers;
