import { Button, Col, Popconfirm, Row, TableProps, Tag } from 'antd';
import { Permission } from '../../../api/interfaces';

const UseGenerateColumns = (
	onOpenModal?: (modalType: 'edit' | 'add', id?: string | undefined) => void,
	onDelete?: any
) => {
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
					{permissions.map((permission: Permission, idx: number) => {
						return (
							<Tag key={idx}>
								{permission.menu.name.toUpperCase() +
									' ' +
									permission.action.toUpperCase()}
							</Tag>
						);
					})}
				</>
			),
		},
		{
			title: 'Actions',
			dataIndex: '',
			key: 'actions',
			render: ({ id }) => (
				<Row gutter={[12, 12]}>
					<Col>
						<Button
							className="button-black"
							onClick={() => {
								onOpenModal!('edit', id);
							}}>
							Edit
						</Button>
					</Col>
					<Col>
						<Popconfirm
							title="Delete this data"
							description="Are you sure to delete this data?"
							onConfirm={() => onDelete(id)}
							okText="Yes"
							cancelText="No">
							<Button className="button-border-black">Delete</Button>
						</Popconfirm>
					</Col>
				</Row>
			),
		},
	];

	return { columns };
};

export default UseGenerateColumns;
