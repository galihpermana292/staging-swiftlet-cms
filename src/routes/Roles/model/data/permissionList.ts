import { RootPermissionsListI } from '../intefaces';

export const permissionsList: RootPermissionsListI[] = [
	{
		title: 'Inbound',
		value: 'inbound',
		key: 'inbound',
		children: [
			{
				title: 'Inbound Write',
				value: 'inbound-write',
				key: 'inbound-write',
			},
			{
				title: 'Inbound Read',
				value: 'inbound-read',
				key: 'inbound-read',
			},
		],
	},
	{
		title: 'Outbound',
		value: 'outbound',
		key: 'outbound',
		children: [
			{
				title: 'Outbound Write',
				value: 'outbound-write',
				key: 'outbound-write',
			},
			{
				title: 'Outbound Read',
				value: 'outbound-read',
				key: 'outbound-read',
			},
		],
	},
	{
		title: 'Cleansing',
		value: 'cleansing',
		key: 'cleansing',
		children: [
			{
				title: 'Cleansing Write',
				value: 'cleansing-write',
				key: 'cleansing-write',
			},
			{
				title: 'Cleansing Read',
				value: 'cleansing-read',
				key: 'cleansing-read',
			},
		],
	},
];
