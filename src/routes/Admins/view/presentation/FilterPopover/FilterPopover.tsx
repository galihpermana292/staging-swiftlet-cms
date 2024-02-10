import { Button, Divider, Popover, Typography } from 'antd';
import { FilterPopoverI } from '../../../model/interfaces';

const FilterPopover = ({ children }: FilterPopoverI) => {
	return (
		<Popover
			placement="bottomLeft"
			title={
				<div>
					<div className="title flex items-center justify-between">
						<Typography.Text>Filter</Typography.Text>
						<Button type="text">Clear Filter</Button>
					</div>
				</div>
			}
			content={
				<div className="min-w-[250px]">
					<div>{children}</div>
					<Divider className="footer-divider" />
					<div className="">
						<Button type="primary" className="button-black w-full">
							Apply Filter
						</Button>
					</div>
				</div>
			}
			trigger="click">
			<Button type="default" color="black">
				<div>Filter</div>
			</Button>
		</Popover>
	);
};

export default FilterPopover;
