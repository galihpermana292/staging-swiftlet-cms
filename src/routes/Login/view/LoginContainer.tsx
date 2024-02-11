import { useForm } from 'antd/es/form/Form';
import FormLogin from './presentation/FormLogin';
import useMutateLogin from '../repositories/useMutateLogin';

const LoginContainer = () => {
	const [form] = useForm();
	const { mutate } = useMutateLogin();
	return (
		<div className="flex justify-center items-center h-screen ">
			<div className="w-[400px] p-[20px]">
				<p className="text-center my-[20px]">Login Dashboard</p>
				<div>
					<FormLogin form={form} onSubmit={mutate} />
				</div>
			</div>
		</div>
	);
};

export default LoginContainer;
