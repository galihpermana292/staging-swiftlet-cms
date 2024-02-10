import { Admins } from '../../../../api/interfaces';
import { GeneralSelectI } from '../interfaces';

export const dummyUserData: Admins[] = [
	{
		id: '1',
		email: 'user1@example.com',
		role_name: 'Admin',
		name: 'admin user 1',
		status: 'active',
		warehouse_id: '1',
	},
	{
		id: '2',
		email: 'user2@example.com',
		role_name: 'User',
		name: 'admin user 2',
		status: 'active',
		warehouse_id: '2',
	},
	{
		id: '3',
		email: 'user3@example.com',
		role_name: 'Editor',
		name: 'admin user 3',
		status: 'active',
		warehouse_id: '3',
	},
];

export const initialWarehouseSelectData: GeneralSelectI[] = [
	{
		value: 'warehouse 1',
		label: 'Warehouse 1',
	},
	{
		value: 'warehouse 2',
		label: 'Warehouse 2',
	},
	{
		value: 'warehouse 3',
		label: 'Warehouse 3',
	},
];
