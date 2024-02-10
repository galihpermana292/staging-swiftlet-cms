import { FormInstance } from 'antd';
import { ColumnsType } from 'antd/es/table';

export interface HeaderI {
	openModal?: (modalType: 'edit' | 'add') => void;
}

export interface UseGenerateButtonActionsI {
	handleStatus?: any;
	handleChangePassword?: any;
}

export type RootResponseUserT = {
	id: string;
	email: string;
	role_name: string;
	name: string;
};

export interface TableUsersI {
	data: RootResponseUserT[];
	columns: ColumnsType<any>;
	form: FormInstance<any>;
}

export interface FilterPopoverI {
	children: React.ReactNode;
}

export interface FormFilterI {
	form: FormInstance<any>;
	rolesSelectData: GeneralSelectI[];
}

export interface GeneralSelectI {
	value: string | number;
	label: string;
}
