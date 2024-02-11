import { useForm } from 'antd/es/form/Form';
import LoadingBoundary from '../../shared/view/LoadingBoundary/LoadingBoundary';
import ErrorBoundary from '../../shared/view/ErrorBoundary/ErrorBoundary';
import AddModal from './presentation/Modal/ModalAdd';
import SwiftletTable from '../../shared/view/Table/SwiftletTable';
import { Button, Input } from 'antd';
import Header from '../../shared/view/Header/Header';
import FilterPopover from './presentation/FilterPopover/FilterPopover';
import FormFilter from './presentation/FormFilter/FormFilter';
import { AxiosError } from 'axios';
import { Admins } from '../../../api/interfaces';
import useQueryAdmins from '../repositories/useQueryAdmins';
import UseGenerateColumnUser from '../usecase/useGenerateColumnsUser';
import useQueryRoles from '../../Roles/repositories/useQueryRoles';
import useMapSelectData from '../usecase/useMapSelectData';
import { initialWarehouseSelectData } from '../model/data/dummyUsers';
import useMutateCreateAdmins from '../repositories/useMutateCreateAdmins';
import useQueryAdminsDetail from '../repositories/useQueryAdminsDetail';
import useMutateDeleteAdmins from '../repositories/useMutateDeleteAdmins';
import useMutateEditAdmins from '../repositories/useMutateEditAdmins';
import UseModalReducer from '../usecase/useModalReducer';
import useMutateEditPasswordAdmins from '../repositories/useMutateEditAdminsPassword';
import useMutateUpdateAdminsStatus from '../repositories/useMutateEditAdminsStatus';

const AdminsContainer = () => {
	const [form] = useForm();
	const { openModal, closeModal, modalState } = UseModalReducer(form);

	const { data: rolesData } = useQueryRoles(1000, 1);
	const { rolesSelectData, warehouseSelectData } = useMapSelectData(
		rolesData!,
		initialWarehouseSelectData
	);

	const {
		data,
		error,
		isLoading: loadingGetAll,
		setQueryAdmins,
		queryAdmins,
		refetch,
	} = useQueryAdmins();

	const { mutate: mutateCreate } = useMutateCreateAdmins(closeModal, refetch);
	const { isLoading: loadingGetDetail } = useQueryAdminsDetail(
		modalState,
		form
	);

	const { mutate: mutateDelete } = useMutateDeleteAdmins(refetch);
	const { mutate: mutateEdit } = useMutateEditAdmins(closeModal, refetch);
	const { mutate: mutatePassword } = useMutateEditPasswordAdmins(
		closeModal,
		refetch
	);
	const { mutate: mutateStatus } = useMutateUpdateAdminsStatus(refetch);

	const { columns } = UseGenerateColumnUser(
		openModal,
		mutateDelete,
		mutateStatus
	);

	return (
		<LoadingBoundary loading={loadingGetAll || loadingGetDetail}>
			<ErrorBoundary error={error as AxiosError} refetch={refetch}>
				<div>
					<AddModal
						submitModal={(val) => {
							if (modalState?.type === 'add') {
								return mutateCreate(val);
							}
							if (modalState?.type === 'password') {
								return mutatePassword({
									payload: val,
									id: modalState?.id as string,
								});
							}
							mutateEdit({ payload: val, id: modalState?.id as string });
						}}
						roleData={rolesSelectData}
						warehouseData={warehouseSelectData}
						loading={loadingGetAll}
						form={form}
						closeModal={closeModal!}
						modalState={modalState!}
					/>
					<div className="my-[10px]">
						<Header
							button={
								<Button
									className="button-black h-[40px]"
									onClick={() => openModal!('add')}>
									Add New Admins
								</Button>
							}
							headerName="Admins"
						/>
					</div>
					<SwiftletTable<Admins>
						filterComponents={
							<div className="flex h-[80px] gap-[10px]">
								<div className="max-w-[300px] mb-[20px] h-[80px] flex items-center">
									<Input
										placeholder="Search admins"
										value={queryAdmins.search}
										onChange={(e) =>
											setQueryAdmins((val) => ({
												...val,
												search: e.target.value,
											}))
										}
									/>
								</div>
								<div className="h-[80px] flex items-center">
									<FilterPopover>
										<FormFilter form={form} rolesSelectData={rolesSelectData} />
									</FilterPopover>
								</div>
							</div>
						}
						columns={columns}
						data={data?.admins}
						loading={loadingGetAll}
						metadata={data ? data.metadata : undefined}
						onPaginationChanges={setQueryAdmins}
					/>
				</div>
			</ErrorBoundary>
		</LoadingBoundary>
	);
};

export default AdminsContainer;
