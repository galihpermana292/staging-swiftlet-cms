import { createBrowserRouter } from 'react-router-dom';

import RootLayout from '../routes/RootLayout/view/RootLayout.tsx';
import RolesContainer from '../routes/Roles/view/RolesContainer.tsx';
import AdminsContainer from '../routes/Admins/view/AdminsContainer.tsx';
import HomeContainer from '../routes/Home/view/HomeContainer.tsx';
import LoginContainer from '../routes/Login/view/LoginContainer.tsx';

export const router = createBrowserRouter([
	{
		path: '/',
		element: <RootLayout />,
		children: [
			{
				path: 'home',
				element: <HomeContainer />,
			},
			{
				path: 'roles',
				element: <RolesContainer />,
			},
			{
				path: 'admins',
				element: <AdminsContainer />,
			},
		],
	},
	{
		path: '/login',
		element: <LoginContainer />,
	},
]);
