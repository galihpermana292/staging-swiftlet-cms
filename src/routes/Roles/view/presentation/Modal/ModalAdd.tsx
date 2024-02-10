import { Modal } from 'antd';
import { AddModalI } from '../../../model/intefaces';
import RolesForm from '../Form/RolesForm';

const AddModal = ({
	submitModal,
	closeModal,
	modalState,
	form,
	menuList,
	loading,
}: AddModalI) => {
	return (
		<div>
			<Modal
				title={modalState?.type === 'edit' ? 'Edit Roles' : 'Add Roles'}
				open={modalState?.isOpen}
				footer={null}
				onCancel={closeModal}>
				<RolesForm
					loading={loading}
					menuList={menuList}
					submitModal={submitModal}
					closeModal={closeModal}
					form={form}
				/>
			</Modal>
		</div>
	);
};

export default AddModal;
