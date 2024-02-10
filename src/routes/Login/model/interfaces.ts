import { FormInstance } from 'antd';
import { AxiosError } from 'axios';
import { UseMutateFunction } from 'react-query';
import { RootLoginPayloadI, RootLoginResponseI } from '../../../api/interfaces';

export interface FormLoginI {
	form: FormInstance<any>;
	onSubmit: UseMutateFunction<
		RootLoginResponseI,
		AxiosError<unknown, any>,
		RootLoginPayloadI,
		unknown
	>;
}
