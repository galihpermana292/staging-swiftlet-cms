import React from 'react';

import { MenuItem } from '../model/types';
import { itemsData } from '../model/data';
import { useNavigate } from 'react-router-dom';

const UseGenerateItems = () => {
	const navigate = useNavigate();

	function getItem(
		label: React.ReactNode,
		key: React.Key,
		icon?: React.ReactNode,
		children?: MenuItem[]
	): MenuItem {
		return {
			key,
			icon,
			children,
			label,
		} as MenuItem;
	}

	const items: MenuItem[] = itemsData.map((data) => {
		let childrens: any = [];

		if (data.children.length) {
			data.children.forEach((child) => childrens.push(child));
			return getItem(data.label, data.key, data.icon, childrens);
		}

		return getItem(data.label, data.key, data.icon);
	});

	const handleClickMenu = (path: string) => {
		navigate(path);
	};

	return { items, handleClickMenu };
};

export default UseGenerateItems;
