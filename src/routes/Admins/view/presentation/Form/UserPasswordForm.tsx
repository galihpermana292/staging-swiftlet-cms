import { Form, Input } from 'antd';

const UserPasswordForm = () => {
	return (
		<>
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
			<Form.Item
				name="confirm"
				label="Confirm Password"
				dependencies={['password']}
				hasFeedback
				rules={[
					{
						required: true,
						message: 'Please confirm your password!',
					},
					({ getFieldValue }) => ({
						validator(_, value) {
							if (!value || getFieldValue('password') === value) {
								return Promise.resolve();
							}
							return Promise.reject(
								new Error('The new password that you entered do not match!')
							);
						},
					}),
				]}>
				<Input.Password placeholder="Confirm Password" />
			</Form.Item>
		</>
	);
};

export default UserPasswordForm;
