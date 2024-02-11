import { ColumnsType } from 'antd/es/table';
import { Metadata } from '../../../api/interfaces';
import React, { ReactNode } from 'react';

export interface SwiftletTabelI {
	columns: ColumnsType<any>;
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
