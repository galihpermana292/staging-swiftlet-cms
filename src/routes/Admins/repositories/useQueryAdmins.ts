import { useState } from 'react';
import { useQuery } from 'react-query';
import useConvertQuery from '../../shared/usecases/useConvertQuery';
import { DashboardAdminsAPI } from '../../../api/adminsServices';
import { useDebounce } from '@uidotdev/usehooks';

const useQueryAdmins = () => {
	const [queryAdmins, setQueryAdmins] = useState<{
		limit: number;
		page: number;
		search?: string;
	}>({
		limit: 5,
		page: 1,
		search: '',
	});

	const { objectToQueryParams } = useConvertQuery();
	const queries = useDebounce(queryAdmins, 1000);

	const getAdmins = async () => {
		try {
			const queryParams = objectToQueryParams(queryAdmins);
			const data = await DashboardAdminsAPI.getAllAdmins(queryParams);
			const { admins } = data;

			const newAdmins = admins.map((admin) => ({ ...admin, key: admin.id }));
			return { ...data, admins: newAdmins };
		} catch (error) {
			throw error;
		}
	};

	const { data, error, isLoading, refetch } = useQuery({
		queryKey: ['admins', { ...queries }],
		queryFn: getAdmins,
	});

	return { data, error, isLoading, refetch, setQueryAdmins, queryAdmins };
};

export default useQueryAdmins;
