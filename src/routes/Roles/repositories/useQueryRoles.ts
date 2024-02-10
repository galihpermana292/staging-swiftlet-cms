import { useState } from 'react';
import { useQuery } from 'react-query';
import { DashboardRolesAPI } from '../../../api/rolesServices';
import useConvertQuery from '../../shared/usecases/useConvertQuery';

const useQueryRoles = (limit: number = 5, page: number = 1) => {
	const [queryRoles, setQueryRoles] = useState({
		limit: limit,
		page: page,
	});

	const { objectToQueryParams } = useConvertQuery();

	const getRoles = async () => {
		try {
			const queryParams = objectToQueryParams(queryRoles);
			const data = await DashboardRolesAPI.getAllRoles(queryParams);
			const { roles } = data;

			const newRoles = roles.map((role) => ({ ...role, key: role.id }));
			return { ...data, roles: newRoles };
		} catch (error) {
			throw error;
		}
	};

	const { data, error, isLoading, refetch } = useQuery({
		queryKey: ['roles', queryRoles.limit, queryRoles.page],
		queryFn: getRoles,
	});

	return { data, error, isLoading, refetch, setQueryRoles };
};

export default useQueryRoles;
