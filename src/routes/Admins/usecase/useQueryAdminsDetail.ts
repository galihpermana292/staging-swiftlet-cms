import { FormInstance } from 'antd';
import { DashboardAdminsAPI } from '../../../api/adminsServices';
import { ModalState } from '../../Roles/model/intefaces';
import { useQuery } from 'react-query';

const useQueryAdminsDetail = (
	modalState?: ModalState,
	form?: FormInstance<any>
) => {
	const getDetail = async () => {
		try {
			const data = await DashboardAdminsAPI.getDetailRoles(
				modalState!.id as string
			);

			form!.setFieldsValue(data.admin);
			return data;
		} catch (error) {
			throw error;
		}
	};

	const { data, error, isLoading, refetch } = useQuery({
		queryKey: ['admin-detail', modalState!.id],
		queryFn: getDetail,
		enabled: modalState!.id ? true : false,
	});

	return { data, error, isLoading, refetch };
};

export default useQueryAdminsDetail;
