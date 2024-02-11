import { FormInstance } from 'antd';
import { ColumnsType } from 'antd/es/table';
import { Metadata, Role } from '../../../api/interfaces';
import { ModalTypeT } from '../../Admins/usecase/useModalReducer';

export interface TableRolesI {
	columns: ColumnsType<any>;
	data?: Role[];
	metadata?: Metadata;
	onPaginationChanges: React.Dispatch<
		React.SetStateAction<{
			limit: number;
			page: number;
		}>
	>;
	loading?: boolean;
}

export interface ModalReducerReturnI {
	modalState?: ModalState;
	openModal?: (modalType: ModalTypeT, id?: string) => void;
	closeModal?: () => void;
}

export type ModalState = {
	isOpen: boolean;
	type: ModalTypeT;
	queryRoutes?: string;
	id?: string;
};

export type Action =
	| { type: 'OPEN_MODAL'; modalType: ModalTypeT; id?: string }
	| { type: 'CLOSE_MODAL' };

export interface RootFormCreateRoleI {
	name: string;
	permissions: string[];
}

/**
 * Components
 */

export interface MenuItem {
	title: string;
	value: string;
	key: string;
	children?: MenuItem[];
}

export interface AddModalI extends ModalReducerReturnI {
	openModal?: (modalType: ModalTypeT) => void;
	submitModal: (value: RootFormCreateRoleI) => void;
	form: FormInstance<any>;
	menuList?: MenuItem[];
	loading?: boolean;
}
export interface ModalContainerI extends ModalReducerReturnI {
	submitModal?: (value: RootFormCreateRoleI) => void;
}
export interface HeaderI extends ModalReducerReturnI {
	headerName: string;
	button: React.ReactNode;
}

export interface RolesFormI {
	form: FormInstance<any>;
	closeModal?: () => void;
	submitModal: (value: any) => void;
	menuList?: MenuItem[];
	loading?: boolean;
}
