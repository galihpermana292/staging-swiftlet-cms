import { Button, Col, Form, Input, Row, TreeSelect } from 'antd';
import { RolesFormI } from '../../../model/intefaces';

const RolesForm = ({ form, closeModal, submitModal, menuList }: RolesFormI) => {
	return (
		<div>
			<Form form={form} onFinish={submitModal} layout="vertical">
				<Form.Item
					name={'name'}
					label="Role Name"
					rules={[
						{
							required: true,
							message: 'Please input your role name',
						},
					]}>
					<Input placeholder="Role name" />
				</Form.Item>
				<Form.Item
					name={'permissions'}
					label="Select Permission"
					rules={[
						{
							required: true,
							message: 'Please input your role',
						},
					]}>
					<TreeSelect
						treeData={menuList}
						treeCheckable={true}
						showCheckedStrategy="SHOW_PARENT"
						placeholder="Select Permission"
						className="tree-custom"
					/>
				</Form.Item>
				<Form.Item>
					<Row justify={'end'} gutter={[12, 12]}>
						<Col>
							<Button className="button-border-black" onClick={closeModal}>
								Cancel
							</Button>
						</Col>
						<Col>
							<Button htmlType="submit" className="button-black">
								Submit
							</Button>
						</Col>
					</Row>
				</Form.Item>
			</Form>
		</div>
	);
};

export default RolesForm;
