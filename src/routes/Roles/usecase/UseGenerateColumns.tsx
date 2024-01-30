import { TableProps, Tag } from 'antd';

const UseGenerateColumns = () => {
	const columns: TableProps<any>['columns'] = [
		{
			title: 'Role Name',
			dataIndex: 'name',
			key: 'name',
			render: (text) => <a>{text}</a>,
		},
		{
			title: 'Role Permissions',
			dataIndex: 'permissions',
			key: 'permissions',
			render: (_, { permissions }) => (
				<>
					{permissions.map((permission: any, idx: number) => {
						return <Tag key={idx}>{permission.menu.name.toUpperCase()}</Tag>;
					})}
				</>
			),
		},
	];

	return { columns };
};

export default UseGenerateColumns;
