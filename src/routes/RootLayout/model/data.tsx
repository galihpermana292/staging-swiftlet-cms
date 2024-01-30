import {
	DesktopOutlined,
	FileOutlined,
	// PieChartOutlined,
	TeamOutlined,
	// UserOutlined,
} from '@ant-design/icons';
import { ItemsDataI } from './types';

export const itemsData: ItemsDataI[] = [
	{
		label: 'Dashboard',
		key: '/home',
		children: [],
		icon: <DesktopOutlined />,
	},
	{
		label: 'Roles',
		key: '/roles',
		children: [],
		icon: <FileOutlined />,
	},
	{
		label: 'Admins',
		key: '/admins',
		children: [],
		icon: <TeamOutlined />,
	},
];
