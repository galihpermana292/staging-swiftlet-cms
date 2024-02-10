import { useQuery } from 'react-query';
import { DashboardRolesAPI } from '../../../api/rolesServices';
import useErrorAxios from '../../shared/usecases/useErrorAxios';
import { AxiosError } from 'axios';
import useMapRolesMenu from '../usecase/useMapRolesMenu';

const useQueryRolesMenu = () => {
	const { generateErrorMsg, showPopError } = useErrorAxios();
	const { mapMenuToTree } = useMapRolesMenu();
	const getRolesMenu = async () => {
		try {
			const data = await DashboardRolesAPI.getRolesMenu();
			const newMenus = mapMenuToTree(data.menus);
			return { ...data, menus: newMenus };
		} catch (error) {
			const msg = generateErrorMsg(error as AxiosError);
			showPopError(msg);
			throw error;
		}
	};

	const { data, error, isLoading, refetch } = useQuery({
		queryKey: ['menu-roles'],
		queryFn: getRolesMenu,
		retry: false,
	});

	return { data, error, isLoading, refetch };
};

export default useQueryRolesMenu;
