import { useReducer } from 'react';
import { Action, ModalReducerReturnI, ModalState } from '../model/intefaces';
import { FormInstance } from 'antd';
import { ModalTypeT } from '../../Admins/usecase/useModalReducer';
const OPEN_MODAL = 'OPEN_MODAL';
const CLOSE_MODAL = 'CLOSE_MODAL';

const modalReducer = (state: ModalState, action: Action) => {
	switch (action.type) {
		case OPEN_MODAL:
			return {
				isOpen: true,
				type: action.modalType,
				id: action.id,
			};
		case CLOSE_MODAL:
			return {
				...state,
				isOpen: false,
			};
		default:
			return state;
	}
};

/**
 * CUSTOM REDUCER
 *
 */

const initialState: ModalState = {
	isOpen: false,
	type: 'add',
	id: undefined,
};

const UseModalReducer = (form?: FormInstance<any>): ModalReducerReturnI => {
	const [modalState, dispatch] = useReducer(modalReducer, initialState);

	const openModal = (modalType: ModalTypeT, id?: string) => {
		if (modalType === 'add') form!.resetFields();
		dispatch({ type: 'OPEN_MODAL', modalType, id });
	};

	const closeModal = () => {
		dispatch({ type: 'CLOSE_MODAL' });
	};

	return { openModal, closeModal, modalState };
};

export default UseModalReducer;
