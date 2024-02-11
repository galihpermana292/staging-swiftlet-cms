import { Form, Input, Select } from 'antd';
import { UserFormI } from './UserForm';

const UserGeneralForm = ({ roleData, warehouseData }: UserFormI) => {
	return (
		<>
			<Form.Item
				name={'name'}
				label="Name"
				rules={[
					{
						required: true,
						message: 'Please input your name',
					},
				]}>
				<Input placeholder="Name" />
			</Form.Item>
			<Form.Item
				name={'email'}
				label="Email"
				rules={[
					{
						required: true,
						message: 'Please input your email',
					},
				]}>
				<Input placeholder="Email" />
			</Form.Item>
			<Form.Item
				name={'role'}
				label="Select Role"
				rules={[
					{
						required: true,
						message: 'Please input your role',
					},
				]}>
				<Select options={roleData} placeholder="Select Roles" />
			</Form.Item>
			<Form.Item
				name={'warehouse_id'}
				label="Warehouse ID"
				rules={[
					{
						required: true,
						message: 'Please input your warehouse',
					},
				]}>
				<Select options={warehouseData} placeholder="Select Warehouse ID" />
			</Form.Item>
		</>
	);
};

export default UserGeneralForm;
