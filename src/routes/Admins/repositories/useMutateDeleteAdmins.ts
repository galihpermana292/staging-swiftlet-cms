import { AxiosError } from 'axios';
import { DashboardAdminsAPI } from '../../../api/adminsServices';
import useErrorAxios from '../../shared/usecases/useErrorAxios';
import useSuccessAxios from '../../shared/usecases/useSuccessAxios';
import { useMutation } from 'react-query';

const useMutateDeleteAdmins = (refetch?: () => void) => {
	const { generateErrorMsg, showPopError } = useErrorAxios();
	const { showSuccessMessage } = useSuccessAxios();

	const deleteRoles = async (id: string) => {
		const data = await DashboardAdminsAPI.deleteAdmins(id);
		return data;
	};

	const handleError = (error: AxiosError) => {
		const msg = generateErrorMsg(error);
		showPopError(msg);
	};

	const { mutate, error, isLoading } = useMutation({
		mutationFn: (id: string) => deleteRoles(id),
		onError: handleError,
		onSuccess: () => {
			refetch!();
			showSuccessMessage('Admins has successfully deleted!');
		},
	});
	return { mutate, error, isLoading };
};

export default useMutateDeleteAdmins;
