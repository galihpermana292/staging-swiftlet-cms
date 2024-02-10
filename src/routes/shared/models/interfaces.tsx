import { ColumnsType } from 'antd/es/table';
import { Metadata, Role } from '../../../api/interfaces';
import React, { ReactNode } from 'react';

export interface SwiftletTabelI {
	columns: ColumnsType<any>;
	// data?: Role[];
	metadata?: Metadata;
	onPaginationChanges: React.Dispatch<
		React.SetStateAction<{
			limit: number;
			page: number;
			search?: string;
		}>
	>;
	loading?: boolean;
	filterComponents: ReactNode;
}
