import { AxiosError } from 'axios';
import { RootAdminsPayloadI } from '../../../api/interfaces';
import useErrorAxios from '../../shared/usecases/useErrorAxios';
import useSuccessAxios from '../../shared/usecases/useSuccessAxios';
import { useMutation } from 'react-query';
import { DashboardAdminsAPI } from '../../../api/adminsServices';

const useMutateCreateAdmins = (
	closeModal?: () => void,
	refetch?: () => void
) => {
	const { generateErrorMsg, showPopError } = useErrorAxios();
	const { showSuccessMessage } = useSuccessAxios();

	const createAdmins = async (payload: RootAdminsPayloadI) => {
		const data = await DashboardAdminsAPI.createAdmins(payload);
		return data;
	};

	const handleError = (error: AxiosError) => {
		const msg = generateErrorMsg(error);
		showPopError(msg);
	};

	const { mutate, error, isLoading } = useMutation({
		mutationFn: (payload: RootAdminsPayloadI) => createAdmins(payload),
		onError: handleError,
		onSuccess: () => {
			closeModal!();
			refetch!();
			showSuccessMessage('Admin successfully added!');
		},
	});
	return { mutate, error, isLoading };
};

export default useMutateCreateAdmins;
