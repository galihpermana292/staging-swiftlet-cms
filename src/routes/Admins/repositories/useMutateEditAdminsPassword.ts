import { AxiosError } from 'axios';
import { DashboardAdminsAPI } from '../../../api/adminsServices';
import useErrorAxios from '../../shared/usecases/useErrorAxios';
import useSuccessAxios from '../../shared/usecases/useSuccessAxios';
import { useMutation } from 'react-query';

const useMutateEditPasswordAdmins = (
	closeModal?: () => void,
	refetch?: () => void
) => {
	const { generateErrorMsg, showPopError } = useErrorAxios();
	const { showSuccessMessage } = useSuccessAxios();

	const editRoles = async (payload: { password: string }, id: string) => {
		const data = await DashboardAdminsAPI.editAdminsPassword(payload, id);
		return data;
	};

	const handleError = (error: AxiosError) => {
		const msg = generateErrorMsg(error);
		showPopError(msg);
	};

	const { mutate, error, isLoading } = useMutation({
		mutationFn: ({
			payload,
			id,
		}: {
			payload: { password: string };
			id: string;
		}) => editRoles(payload, id),
		onError: handleError,
		onSuccess: () => {
			closeModal!();
			refetch!();
			showSuccessMessage('Admin password has successfully edited!');
		},
	});
	return { mutate, error, isLoading };
};

export default useMutateEditPasswordAdmins;
