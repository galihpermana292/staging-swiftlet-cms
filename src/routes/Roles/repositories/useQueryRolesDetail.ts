import { useQuery } from 'react-query';

import { ModalState } from '../model/intefaces';
import { DashboardRolesAPI } from '../../../api/rolesServices';
import useMapRolesMenu from '../usecase/useMapRolesMenu';
import { FormInstance } from 'antd';

const useQueryRolesDetail = (
	modalState?: ModalState,
	form?: FormInstance<any>
) => {
	const { mapResponseToDefaultEditRoles } = useMapRolesMenu();
	const getDetail = async () => {
		try {
			const data = await DashboardRolesAPI.getDetailRoles(
				modalState!.id as string
			);
			const defaultValueModal = mapResponseToDefaultEditRoles(data);
			form!.setFieldsValue(defaultValueModal);
			return data;
		} catch (error) {
			throw error;
		}
	};

	const { data, error, isLoading, refetch } = useQuery({
		queryKey: ['roles-detail', modalState!.id],
		queryFn: getDetail,
		enabled: modalState!.id ? true : false,
	});

	return { data, error, isLoading, refetch };
};

export default useQueryRolesDetail;
