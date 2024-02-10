import { RootRolesResponseI } from '../../../api/interfaces';

const useMapSelectData = (
	rolesData: RootRolesResponseI,
	warehouseData: any
) => {
	const rolesDataSelect = rolesData?.roles.map((role) => ({
		value: role.id,
		label: role.name,
	}));

	return {
		rolesSelectData: rolesDataSelect,
		warehouseSelectData: warehouseData,
	};
};

export default useMapSelectData;
