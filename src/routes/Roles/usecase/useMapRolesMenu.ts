import { Menu, RootRolesDetailResponseI } from '../../../api/interfaces';

const useMapRolesMenu = () => {
	function mapMenuToTree(menuItems: Menu[]): any[] {
		return menuItems.map((menuItem) => {
			const value = menuItem.name.toLowerCase();
			const id = menuItem.id;
			const children: any[] = [
				{
					title: `${value} manage`,
					value: `${value}-${id}-manage`,
					key: `${value}-${id}-manage`,
				},
				{
					title: `${value} staff`,
					value: `${value}-${id}-staff`,
					key: `${value}-${id}-staff`,
				},
			];

			return {
				title: value,
				value: value + '-' + id,
				key: value + '-' + id,
				children,
			};
		});
	}

	const mapResponseToDefaultEditRoles = (data: RootRolesDetailResponseI) => {
		const { role } = data;
		const { name, permissions } = role;
		const newPermissions = permissions.map((permission) => {
			const value =
				permission.action === 'manage'
					? permission.menu.name + '-' + permission.menu.id
					: permission.menu.name + '-' + permission.menu.id + '-staff';

			return value;
		});

		return { name, permissions: newPermissions };
	};

	return { mapMenuToTree, mapResponseToDefaultEditRoles };
};
export default useMapRolesMenu;
