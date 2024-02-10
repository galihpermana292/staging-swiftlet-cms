import { AxiosError } from 'axios';
import { DashboardRolesAPI } from '../../../api/rolesServices';
import useErrorAxios from '../../shared/usecases/useErrorAxios';
import { useMutation } from 'react-query';
import { RootFormCreateRoleI } from '../model/intefaces';
import useMapFormAdd from '../usecase/useMapFormAdd';
import useSuccessAxios from '../../shared/usecases/useSuccessAxios';

const useMutateEditRoles = (closeModal?: () => void, refetch?: () => void) => {
	const { generateErrorMsg, showPopError } = useErrorAxios();
	const { showSuccessMessage } = useSuccessAxios();
	const mapResponseToPayloadRoles = useMapFormAdd();

	const editRoles = async (payload: RootFormCreateRoleI, id: string) => {
		const newData = mapResponseToPayloadRoles(payload);
		const data = await DashboardRolesAPI.editRoles(newData, id);
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
			payload: RootFormCreateRoleI;
			id: string;
		}) => editRoles(payload, id),
		onError: handleError,
		onSuccess: () => {
			closeModal!();
			refetch!();
			showSuccessMessage('Roles has successfully edited!');
		},
	});
	return { mutate, error, isLoading };
};

export default useMutateEditRoles;
