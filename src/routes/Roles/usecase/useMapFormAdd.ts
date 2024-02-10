import { RootFormCreateRoleI } from '../model/intefaces';

const useMapFormAdd = () => {
	const mapResponseToPayloadRoles = (data: RootFormCreateRoleI) => {
		const { name, permissions } = data;

		const newPermissions = permissions.map((permission) => {
			const splittedData = permission.split('-');
			const menu_id = splittedData[1];
			const action = splittedData.length === 3 ? splittedData[2] : 'manage';

			return {
				menu_id,
				action,
			};
		});

		return {
			name,
			permissions: newPermissions,
		};
	};

	return mapResponseToPayloadRoles;
};

export default useMapFormAdd;
