import { ApiClass } from './api';
import {
	RootCreateRolesResponseI,
	RootLoginPayloadI,
	RootLoginResponseI,
	RootRolesDetailResponseI,
	RootRolesMenuResponseI,
	RootRolesPayloadI,
	RootRolesResponseI,
} from './interfaces';

class DashboardRolesServices extends ApiClass {
	constructor(baseURL?: string, config?: Record<string, any>) {
		super(baseURL, config);
	}
	public async login(payload: RootLoginPayloadI): Promise<RootLoginResponseI> {
		try {
			const { data } = await this.axiosInstance.post<RootLoginResponseI>(
				'/authentications/login',
				payload
			);
			return data;
		} catch (error) {
			throw error;
		}
	}

	public async getAllRoles(query: string): Promise<RootRolesResponseI> {
		try {
			const token = JSON.parse(localStorage.getItem('token')!);

			const { data } = await this.axiosInstance.get<RootRolesResponseI>(
				`/roles${query ? `?${query}` : ''}`,
				{ headers: { Authorization: `Bearer ${token}` } }
			);
			return data;
		} catch (error) {
			throw error;
		}
	}

	public async getRolesMenu(): Promise<RootRolesMenuResponseI> {
		try {
			const token = JSON.parse(localStorage.getItem('token')!);

			const { data } = await this.axiosInstance.get<RootRolesMenuResponseI>(
				`/roles/menu`,
				{ headers: { Authorization: `Bearer ${token}` } }
			);
			return data;
		} catch (error) {
			throw error;
		}
	}

	public async getDetailRoles(id: string): Promise<RootRolesDetailResponseI> {
		try {
			const token = JSON.parse(localStorage.getItem('token')!);

			const { data } = await this.axiosInstance.get<RootRolesDetailResponseI>(
				`/roles/${id}`,
				{ headers: { Authorization: `Bearer ${token}` } }
			);
			return data;
		} catch (error) {
			throw error;
		}
	}

	public async creteRoles(
		payload: RootRolesPayloadI
	): Promise<RootCreateRolesResponseI> {
		try {
			const token = JSON.parse(localStorage.getItem('token')!);
			const { data } = await this.axiosInstance.post<RootCreateRolesResponseI>(
				'/roles',
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

	public async editRoles(
		payload: RootRolesPayloadI,
		id: string
	): Promise<RootCreateRolesResponseI> {
		try {
			const token = JSON.parse(localStorage.getItem('token')!);
			const { data } = await this.axiosInstance.put<RootCreateRolesResponseI>(
				`/roles/${id}`,
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

	public async deleteRoles(id: string): Promise<RootCreateRolesResponseI> {
		try {
			const token = JSON.parse(localStorage.getItem('token')!);
			const { data } =
				await this.axiosInstance.delete<RootCreateRolesResponseI>(
					`/roles/${id}`,
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

export const DashboardRolesAPI = new DashboardRolesServices();
