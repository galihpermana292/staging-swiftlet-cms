import { Button, Col, Form, FormInstance, Input, Row, Select } from 'antd';
import { GeneralSelectI } from '../../../model/interfaces';

interface UserFormI {
	roleData: GeneralSelectI[];
	warehouseData: GeneralSelectI[];
	closeModal: () => void;
	submitModal: (value: any) => void;
	form: FormInstance<any>;
}

const UserForm = ({
	roleData,
	warehouseData,
	closeModal,
	submitModal,
	form,
}: UserFormI) => {
	return (
		<Form layout="vertical" onFinish={submitModal} form={form}>
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
			<Form.Item
				name={'password'}
				label="Password"
				rules={[
					{
						required: true,
						message: 'Please input your password',
					},
				]}>
				<Input.Password placeholder="Password" />
			</Form.Item>
			<Form.Item>
				<Row justify={'end'} gutter={[12, 12]}>
					<Col>
						<Button className="button-border-black" onClick={closeModal}>
							Cancel
						</Button>
					</Col>
					<Col>
						<Button className="button-black" htmlType="submit">
							Add New
						</Button>
					</Col>
				</Row>
			</Form.Item>
		</Form>
	);
};

export default UserForm;
