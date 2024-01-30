import { useForm } from 'antd/es/form/Form';
import FormLogin from './presentation/FormLogin';

const LoginContainer = () => {
	const [form] = useForm();
	return (
		<div className="flex justify-center items-center h-screen ">
			<div className="w-[400px] p-[20px]">
				<p className="text-center my-[20px]">Login Dashboard</p>
				<div>
					<FormLogin form={form} />
				</div>
			</div>
		</div>
	);
};

export default LoginContainer;
