import { AxiosError } from 'axios';
import { message } from 'antd';

export interface RootErrorResponseI {
	message: string;
}

const useErrorAxios = () => {
	const generateErrorMsg = (error: AxiosError) => {
		const axiosError = error as AxiosError;
		const responseData = axiosError.response?.data as
			| RootErrorResponseI
			| undefined;

		const err = responseData ? responseData?.message : 'Ouch, an error happen!';

		return err ? err : '404 Not Found Server Error';
	};

	const showPopError = (error: string) => {
		message.error(error);
	};

	return { generateErrorMsg, showPopError };
};

export default useErrorAxios;
