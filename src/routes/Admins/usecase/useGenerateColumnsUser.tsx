import { DownOutlined } from '@ant-design/icons';
import {
	Button,
	Col,
	Dropdown,
	Popconfirm,
	Row,
	Space,
	TableProps,
	Tag,
} from 'antd';
import UseGenerateButtonActions from './useGenerateButtonAction';

const UseGenerateColumnUser = (
	onOpenModal?: (modalType: 'edit' | 'add', id?: string | undefined) => void,
	onDelete?: any
) => {
	const items = UseGenerateButtonActions({});

	const columns: TableProps<any>['columns'] = [
		{
			title: 'Name',
			dataIndex: 'name',
			key: 'name',
			render: (text) => <a>{text}</a>,
		},
		{
			title: 'Email',
			dataIndex: 'email',
			key: 'email',
			render: (text) => <a>{text}</a>,
		},
		{
			title: 'Role Name',
			dataIndex: 'role_name',
			key: 'role_name',
			render: (text) => <a>{text}</a>,
		},
		{
			title: 'Warehouse ID',
			dataIndex: 'warehouse_id',
			key: 'warehouse_id',
			render: (text) => <a>{text}</a>,
		},
		{
			title: 'Status',
			dataIndex: 'status',
			key: 'status',
			render: (text: string) => <Tag className="capitalize">{text}</Tag>,
		},
		{
			title: 'Actions',
			dataIndex: '',
			key: 'actions',
			render: ({ id }) => (
				<Row gutter={[12, 12]}>
					<Col>
						<Button
							className="button-border-black"
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
					<Col>
						<Dropdown menu={items}>
							<Button className="button-black">
								<Space>
									Actions
									<DownOutlined />
								</Space>
							</Button>
						</Dropdown>
					</Col>
				</Row>
			),
		},
	];

	return { columns };
};

export default UseGenerateColumnUser;
