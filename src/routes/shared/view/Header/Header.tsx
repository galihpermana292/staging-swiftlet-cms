import { HeaderI } from '../../../Roles/model/intefaces';

const Header = ({ headerName, button }: HeaderI) => {
	return (
		<div className="flex justify-between">
			<h1 className="heading-table-text">{headerName}</h1>
			{button}
		</div>
	);
};

export default Header;
