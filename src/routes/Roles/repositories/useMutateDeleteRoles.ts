import { AxiosError } from 'axios';
import { DashboardRolesAPI } from '../../../api/rolesServices';
import useErrorAxios from '../../shared/usecases/useErrorAxios';
import { useMutation } from 'react-query';
import useSuccessAxios from '../../shared/usecases/useSuccessAxios';

const useMutateDeleteRoles = (refetch?: () => void) => {
	const { generateErrorMsg, showPopError } = useErrorAxios();
	const { showSuccessMessage } = useSuccessAxios();

	const deleteRoles = async (id: string) => {
		const data = await DashboardRolesAPI.deleteRoles(id);
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
			showSuccessMessage('Roles has successfully deleted!');
		},
	});
	return { mutate, error, isLoading };
};

export default useMutateDeleteRoles;
