import { ApiClass } from './api';
import {
	RootAdminsDetailResponseI,
	RootAdminsPayloadI,
	RootAdminsResponseI,
	RootGeneralResponseI,
} from './interfaces';

class DashboardAdminsServices extends ApiClass {
	constructor(baseURL?: string, config?: Record<string, any>) {
		super(baseURL, config);
	}

	public async getAllAdmins(query: string): Promise<RootAdminsResponseI> {
		try {
			const token = JSON.parse(localStorage.getItem('token')!);

			const { data } = await this.axiosInstance.get<RootAdminsResponseI>(
				`/admins${query ? `?${query}` : ''}`,
				{ headers: { Authorization: `Bearer ${token}` } }
			);
			return data;
		} catch (error) {
			throw error;
		}
	}

	public async getDetailRoles(id: string): Promise<RootAdminsDetailResponseI> {
		try {
			const token = JSON.parse(localStorage.getItem('token')!);

			const { data } = await this.axiosInstance.get<RootAdminsDetailResponseI>(
				`/admins/${id}`,
				{ headers: { Authorization: `Bearer ${token}` } }
			);
			return data;
		} catch (error) {
			throw error;
		}
	}

	public async createAdmins(
		payload: RootAdminsPayloadI
	): Promise<RootGeneralResponseI> {
		try {
			const token = JSON.parse(localStorage.getItem('token')!);
			const { data } = await this.axiosInstance.post<RootGeneralResponseI>(
				'/admins',
				payload,
				{
					headers: {
						Authorization: `Bearer ${token}`,
					},
				}
			);
			return data;
		} catch (error) {
			throw error;
		}
	}

	public async editAdmins(
		payload: RootAdminsPayloadI,
		id: string
	): Promise<RootGeneralResponseI> {
		try {
			const token = JSON.parse(localStorage.getItem('token')!);
			const { data } = await this.axiosInstance.put<RootGeneralResponseI>(
				`/admins/${id}`,
				payload,
				{
					headers: {
						Authorization: `Bearer ${token}`,
					},
				}
			);
			return data;
		} catch (error) {
			throw error;
		}
	}

	public async deleteAdmins(id: string): Promise<RootGeneralResponseI> {
		try {
			const token = JSON.parse(localStorage.getItem('token')!);
			const { data } = await this.axiosInstance.delete<RootGeneralResponseI>(
				`/admins/${id}`,
				{
					headers: {
						Authorization: `Bearer ${token}`,
					},
				}
			);
			return data;
		} catch (error) {
			throw error;
		}
	}

	public async editAdminsPassword(
		payload: { password: string },
		id: string
	): Promise<RootGeneralResponseI> {
		try {
			const token = JSON.parse(localStorage.getItem('token')!);
			const { data } = await this.axiosInstance.patch<RootGeneralResponseI>(
				`/admins/${id}/password`,
				payload,
				{
					headers: {
						Authorization: `Bearer ${token}`,
					},
				}
			);
			return data;
		} catch (error) {
			throw error;
		}
	}

	public async deactivateAdmins(id: string): Promise<RootGeneralResponseI> {
		try {
			const token = JSON.parse(localStorage.getItem('token')!);
			const { data } = await this.axiosInstance.patch<RootGeneralResponseI>(
				`/admins/${id}/deactivate`,
				{},
				{
					headers: {
						Authorization: `Bearer ${token}`,
					},
				}
			);
			return data;
		} catch (error) {
			throw error;
		}
	}

	public async activateAdmins(id: string): Promise<RootGeneralResponseI> {
		try {
			const token = JSON.parse(localStorage.getItem('token')!);
			const { data } = await this.axiosInstance.patch<RootGeneralResponseI>(
				`/admins/${id}/reactivate`,
				{},
				{
					headers: {
						Authorization: `Bearer ${token}`,
					},
				}
			);
			return data;
		} catch (error) {
			throw error;
		}
	}
}

export const DashboardAdminsAPI = new DashboardAdminsServices();
