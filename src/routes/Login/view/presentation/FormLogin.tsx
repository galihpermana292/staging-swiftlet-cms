import { Button, Form, Input } from 'antd';
import { FormLoginI } from '../../model/interfaces';

const FormLogin = ({ form }: FormLoginI) => {
	return (
		<Form layout="vertical" form={form}>
			<Form.Item name={'email'} label="Email">
				<Input placeholder="Input your email" />
			</Form.Item>
			<Form.Item name={'password'} label="Password">
				<Input placeholder="Input your password" />
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
