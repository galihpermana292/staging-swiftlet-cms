import { Button, Form, Input } from 'antd';
import { FormLoginI } from '../../model/interfaces';

const FormLogin = ({ form, onSubmit }: FormLoginI) => {
	return (
		<Form layout="vertical" form={form} onFinish={onSubmit}>
			<Form.Item
				name={'email'}
				label="Email"
				rules={[
					{
						type: 'email',
						message: 'The input is not valid E-mail!',
					},
					{
						required: true,
						message: 'Please input your E-mail!',
					},
				]}>
				<Input placeholder="Input your email" />
			</Form.Item>
			<Form.Item
				name={'password'}
				label="Password"
				rules={[
					{
						required: true,
						message: 'Please input your password!',
					},
				]}>
				<Input.Password placeholder="Input your password" />
			</Form.Item>
			<Form.Item>
				<Button htmlType="submit" type="primary" className="bg-blue-500 w-full">
					Log In
				</Button>
			</Form.Item>
		</Form>
	);
};

export default FormLogin;
