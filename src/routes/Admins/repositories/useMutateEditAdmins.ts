import { AxiosError } from 'axios';
import { DashboardAdminsAPI } from '../../../api/adminsServices';
import { RootAdminsPayloadI } from '../../../api/interfaces';
import useErrorAxios from '../../shared/usecases/useErrorAxios';
import useSuccessAxios from '../../shared/usecases/useSuccessAxios';
import { useMutation } from 'react-query';

const useMutateEditAdmins = (closeModal?: () => void, refetch?: () => void) => {
	const { generateErrorMsg, showPopError } = useErrorAxios();
	const { showSuccessMessage } = useSuccessAxios();

	const editRoles = async (payload: RootAdminsPayloadI, id: string) => {
		const data = await DashboardAdminsAPI.editAdmins(payload, id);
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
			payload: RootAdminsPayloadI;
			id: string;
		}) => editRoles(payload, id),
		onError: handleError,
		onSuccess: () => {
			closeModal!();
			refetch!();
			showSuccessMessage('Admin has successfully edited!');
		},
	});
	return { mutate, error, isLoading };
};

export default useMutateEditAdmins;
