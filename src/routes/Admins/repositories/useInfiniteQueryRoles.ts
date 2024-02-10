import { useState } from 'react';
import { useInfiniteQuery } from 'react-query';
import useConvertQuery from '../../shared/usecases/useConvertQuery';
import { DashboardRolesAPI } from '../../../api/rolesServices';

const useInfiniteQueryRoles = () => {
	const [queryRoles, setQueryRoles] = useState({
		limit: 5,
		page: 1,
	});

	const { objectToQueryParams } = useConvertQuery();

	const getRoles = async (pageParams: number) => {
		try {
			const queryParams = objectToQueryParams({
				limit: queryRoles.limit,
				page: pageParams,
			});
			const data = await DashboardRolesAPI.getAllRoles(queryParams);
			const { roles } = data;

			const newRoles = roles.map((role) => ({ ...role, key: role.id }));
			return { ...data, roles: newRoles };
		} catch (error) {
			throw error;
		}
	};

	const { data, isSuccess, hasNextPage, fetchNextPage, isFetchingNextPage } =
		useInfiniteQuery('todos', ({ pageParam = 1 }) => getRoles(pageParam), {
			getNextPageParam: (lastPage, allPages) => {
				const nextPage =
					lastPage.roles.length === queryRoles.limit
						? allPages.length + 1
						: undefined;
				return nextPage;
			},
		});

	return {
		data,
		isSuccess,
		hasNextPage,
		fetchNextPage,
		isFetchingNextPage,
		setQueryRoles,
	};
};

export default useInfiniteQueryRoles;
