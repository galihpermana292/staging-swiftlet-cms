import { MenuProps } from 'antd';
import { UseGenerateButtonActionsI } from '../model/interfaces';

const UseGenerateButtonActions = ({
	handleStatus,
	handleChangePassword,
}: UseGenerateButtonActionsI) => {
	const items: MenuProps['items'] = [
		{
			label: 'Deactivate',
			key: '1',
			onClick: handleStatus,
		},
		{
			label: 'Change Password',
			key: '2',
			onClick: handleChangePassword,
		},
	];

	const menuProps = {
		items,
	};
	return menuProps;
};

export default UseGenerateButtonActions;
