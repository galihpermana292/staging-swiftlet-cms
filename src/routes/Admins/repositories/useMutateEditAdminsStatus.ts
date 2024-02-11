import { AxiosError } from 'axios';
import { DashboardAdminsAPI } from '../../../api/adminsServices';
import useErrorAxios from '../../shared/usecases/useErrorAxios';
import useSuccessAxios from '../../shared/usecases/useSuccessAxios';
import { useMutation } from 'react-query';

const useMutateUpdateAdminsStatus = (refetch?: () => void) => {
	const { generateErrorMsg, showPopError } = useErrorAxios();
	const { showSuccessMessage } = useSuccessAxios();

	const activateAdmins = async (id: string) => {
		const data = await DashboardAdminsAPI.activateAdmins(id);
		return data;
	};

	const deactivateAdmins = async (id: string) => {
		const data = await DashboardAdminsAPI.deactivateAdmins(id);
		return data;
	};

	const handleError = (error: AxiosError) => {
		const msg = generateErrorMsg(error);
		showPopError(msg);
	};

	const { mutate, error, isLoading } = useMutation({
		mutationFn: ({ status, id }: { status: string; id: string }) => {
			console.log(status, 'sss');
			if (status === 'active') {
				return deactivateAdmins(id);
			}

			return activateAdmins(id);
		},
		onError: handleError,
		onSuccess: () => {
			refetch!();
			showSuccessMessage('Admin status has successfully changed!');
		},
	});
	return { mutate, error, isLoading };
};

export default useMutateUpdateAdminsStatus;
