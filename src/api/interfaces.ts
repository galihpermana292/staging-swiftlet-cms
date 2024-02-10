/**
 * Payload
 */

export interface RootLoginPayloadI {
	email: string;
	password: string;
}

export interface RootRolesPayloadI {
	name: string;
	permissions: PermissionPayload[];
}

export interface PermissionPayload {
	menu_id: string;
	action: string;
}

/**
 * Response
 */

export interface RootLoginResponseI {
	message: string;
	admin: Admin;
	token: string;
	trace_id: string;
}

export interface RootGeneralResponseI {
	message: string;
	trace_id: string;
}

export interface RootRolesResponseI {
	message: string;
	roles: Role[];
	metadata?: Metadata;
	trace_id: string;
}

export interface RootCreateRolesResponseI {
	roles: Role;
	message: string;
	trace_id: string;
}
export interface RootRolesMenuResponseI {
	message: string;
	menus: Menu[];
	trace_id: string;
}

export interface RootRolesDetailResponseI {
	message: string;
	role: Role;
	trace_id: string;
}

export interface RootAdminsResponseI {
	message: string;
	admins: Admins[];
	metadata?: Metadata;
	trace_id: string;
}

export interface RootAdminsPayloadI {
	name: string;
	email: string;
	password: string;
	role_id: string;
	warehouse_id: string;
}

export interface RootAdminsDetailResponseI {
	trace_id: string;
	admin: AdminWithRoleI[];
	metadata?: Metadata;
}

export interface RootAdminsDetailPayloadI {
	role_id: string;
	warehouse_id: string;
}

/**
 * Object
 */

export interface AdminWithRoleI extends Role {}

export interface Admins {
	id: string;
	name: string;
	email: string;
	role_name: string;
	status: string;
	warehouse_id: string;
}

export interface Metadata {
	total_items: number;
	total_pages: number;
	current_page: number;
	limit: number;
	next_page: any;
	previous_page: any;
}

export interface Admin {
	id: string;
	name: string;
	email: string;
	warehouse_id: string;
	role: Role;
	status: string;
	created_at: string;
	updated_at: string;
}

export interface Role {
	id: string;
	name: string;
	permissions: Permission[];
}

export interface Permission {
	id: string;
	action: string;
	menu: Menu;
	role: string;
	created_at: string;
	updated_at: string;
}

export interface Menu {
	id: string;
	name: string;
	created_at: string;
	updated_at: string;
}
