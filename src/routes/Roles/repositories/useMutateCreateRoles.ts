import { AxiosError } from 'axios';
import { DashboardRolesAPI } from '../../../api/rolesServices';
import useErrorAxios from '../../shared/usecases/useErrorAxios';
import { useMutation } from 'react-query';
import { RootFormCreateRoleI } from '../model/intefaces';
import useMapFormAdd from '../usecase/useMapFormAdd';
import useSuccessAxios from '../../shared/usecases/useSuccessAxios';

const useMutateCreateRoles = (
	closeModal?: () => void,
	refetch?: () => void
) => {
	const { generateErrorMsg, showPopError } = useErrorAxios();
	const { showSuccessMessage } = useSuccessAxios();
	const mapResponseToPayloadRoles = useMapFormAdd();

	const createRoles = async (payload: RootFormCreateRoleI) => {
		const newData = mapResponseToPayloadRoles(payload);
		const data = await DashboardRolesAPI.creteRoles(newData);
		return data;
	};

	const handleError = (error: AxiosError) => {
		const msg = generateErrorMsg(error);
		showPopError(msg);
	};

	const { mutate, error, isLoading } = useMutation({
		mutationFn: (payload: RootFormCreateRoleI) => createRoles(payload),
		onError: handleError,
		onSuccess: () => {
			closeModal!();
			refetch!();
			showSuccessMessage('Roles successfully added!');
		},
	});
	return { mutate, error, isLoading };
};

export default useMutateCreateRoles;
