import { Button, Col, Form, FormInstance, Row } from 'antd';
import { GeneralSelectI } from '../../../model/interfaces';
import UserPasswordForm from './UserPasswordForm';
import { ModalState } from '../../../../Roles/model/intefaces';
import UserGeneralForm from './UserGeneralForm';

export interface UserFormI {
	roleData: GeneralSelectI[];
	warehouseData: GeneralSelectI[];
	closeModal?: () => void;
	submitModal?: (value: any) => void;
	form?: FormInstance<any>;
	modalState?: ModalState;
}

const UserForm = ({
	roleData,
	warehouseData,
	closeModal,
	submitModal,
	form,
	modalState,
}: UserFormI) => {
	return (
		<Form layout="vertical" onFinish={submitModal} form={form}>
			{['add', 'edit'].includes(modalState?.type as string) && (
				<UserGeneralForm roleData={roleData} warehouseData={warehouseData} />
			)}

			{['add', 'password'].includes(modalState?.type as string) && (
				<UserPasswordForm />
			)}
			<Form.Item>
				<Row justify={'end'} gutter={[12, 12]}>
					<Col>
						<Button className="button-border-black" onClick={closeModal}>
							Cancel
						</Button>
					</Col>
					<Col>
						<Button className="button-black" htmlType="submit">
							Add New
						</Button>
					</Col>
				</Row>
			</Form.Item>
		</Form>
	);
};

export default UserForm;
