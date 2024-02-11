import Header from '../../shared/view/Header/Header';
import useQueryRoles from '../repositories/useQueryRoles';
import UseModalReducer from '../usecase/UseModalReducer';
import useQueryRolesMenu from '../repositories/useQueryRolesMenu';
import AddModal from './presentation/Modal/ModalAdd';
import { useForm } from 'antd/es/form/Form';
import useMutateCreateRoles from '../repositories/useMutateCreateRoles';
import useQueryRolesDetail from '../repositories/useQueryRolesDetail';
import LoadingBoundary from '../../shared/view/LoadingBoundary/LoadingBoundary';
import ErrorBoundary from '../../shared/view/ErrorBoundary/ErrorBoundary';
import { AxiosError } from 'axios';
import useMutateEditRoles from '../repositories/useMutateEditRoles';
import useMutateDeleteRoles from '../repositories/useMutateDeleteRoles';
import { Button, Input } from 'antd';
import SwiftletTable from '../../shared/view/Table/SwiftletTable';
import { Role } from '../../../api/interfaces';
import UseGenerateColumns from '../usecase/useGenerateColumns';

const RolesContainer = () => {
	const [form] = useForm();
	const { openModal, closeModal, modalState } = UseModalReducer(form);

	const { data: rolesMenu } = useQueryRolesMenu();
	const {
		data,
		error,
		isLoading: loadingGetAll,
		setQueryRoles,
		refetch,
	} = useQueryRoles();

	const { mutate: mutateCreate } = useMutateCreateRoles(closeModal, refetch);
	const { isLoading: loadingGetDetail } = useQueryRolesDetail(modalState, form);
	const { mutate: mutateEdit } = useMutateEditRoles(closeModal, refetch);
	const { mutate: mutateDelete } = useMutateDeleteRoles(refetch);
	const { columns } = UseGenerateColumns(openModal, mutateDelete);

	return (
		<LoadingBoundary loading={loadingGetAll || loadingGetDetail}>
			<ErrorBoundary error={error as AxiosError} refetch={refetch}>
				<div>
					<AddModal
						submitModal={(val) => {
							if (modalState?.type == 'add') {
								return mutateCreate(val);
							}
							mutateEdit({ payload: val, id: modalState?.id as string });
						}}
						menuList={rolesMenu?.menus}
						form={form}
						closeModal={closeModal}
						modalState={modalState}
					/>
					<div className="my-[10px]">
						<Header
							button={
								<Button
									className="button-black h-[40px]"
									onClick={() => openModal!('add')}>
									Add New Roles
								</Button>
							}
							headerName="Roles"
						/>
					</div>
					<SwiftletTable<Role>
						filterComponents={<Input placeholder="Search roles" />}
						loading={loadingGetAll}
						columns={columns}
						data={data ? data.roles : []}
						metadata={data ? data.metadata : undefined}
						onPaginationChanges={setQueryRoles}
					/>
				</div>
			</ErrorBoundary>
		</LoadingBoundary>
	);
};

export default RolesContainer;
