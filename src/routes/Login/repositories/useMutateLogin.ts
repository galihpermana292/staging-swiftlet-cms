import { useMutation } from 'react-query';
import { DashboardRolesAPI } from '../../../api/rolesServices';
import { RootLoginPayloadI } from '../../../api/interfaces';
import { AxiosError } from 'axios';
import useErrorAxios from '../../shared/usecases/useErrorAxios';
import { useNavigate } from 'react-router-dom';

const useMutateLogin = () => {
	const { generateErrorMsg, showPopError } = useErrorAxios();
	const navigate = useNavigate();

	const login = async (payload: RootLoginPayloadI) => {
		const data = await DashboardRolesAPI.login(payload);
		return data;
	};

	const handleError = (error: AxiosError) => {
		const msg = generateErrorMsg(error);
		showPopError(msg);
	};

	const { mutate, error, isLoading } = useMutation({
		mutationFn: (payload: RootLoginPayloadI) => login(payload),
		onError: handleError,
		onSuccess: (response) => {
			const { token, admin } = response;
			localStorage.setItem('token', JSON.stringify(token));
			localStorage.setItem('admin', JSON.stringify(admin));
			navigate('/home');
		},
	});
	return { mutate, error, isLoading };
};

export default useMutateLogin;
