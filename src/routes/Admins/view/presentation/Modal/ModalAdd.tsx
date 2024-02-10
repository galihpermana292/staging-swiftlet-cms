import { FormInstance, Modal } from 'antd';
import UserForm from '../Form/UserForm';
import { ModalState } from '../../../../Roles/model/intefaces';
import { GeneralSelectI } from '../../../model/interfaces';

interface AddModalUserI {
	closeModal: () => void;
	modalState: ModalState;
	submitModal: (value: any) => void;
	form: FormInstance<any>;
	loading: boolean;
	roleData: GeneralSelectI[];
	warehouseData: GeneralSelectI[];
}
const AddModal = ({
	closeModal,
	modalState,
	submitModal,
	form,
	roleData,
	warehouseData,
	loading,
}: AddModalUserI) => {
	return (
		<div>
			<Modal
				title={modalState?.type === 'edit' ? 'Edit Admin' : 'Add Admins'}
				open={modalState?.isOpen}
				footer={null}
				onCancel={closeModal}>
				<UserForm
					roleData={roleData}
					warehouseData={warehouseData}
					submitModal={submitModal}
					closeModal={closeModal}
					form={form}
				/>
			</Modal>
		</div>
	);
};

export default AddModal;
