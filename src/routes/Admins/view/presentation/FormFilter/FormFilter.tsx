import { Form, Select } from 'antd';
import { FormFilterI } from '../../../model/interfaces';

const FormFilter = ({ form, rolesSelectData }: FormFilterI) => {
	return (
		<div>
			<Form form={form} labelAlign="left">
				<Form.Item name={'role'} label="Role" labelCol={{ span: 10 }}>
					<Select options={rolesSelectData} placeholder="Roles select" />
				</Form.Item>
				<Form.Item name={'status'} label="Status" labelCol={{ span: 10 }}>
					<Select
						placeholder="Status select"
						options={[
							{ value: 'active', label: 'Active' },
							{ value: 'inactive', label: 'Inactive' },
						]}
					/>
				</Form.Item>
			</Form>
		</div>
	);
};

export default FormFilter;
