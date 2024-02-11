import React, { useState } from 'react';

import { Layout, Menu, theme } from 'antd';
import UseGenerateItems from '../usecase/useGenerateItems';
import { Outlet } from 'react-router-dom';
import CustomHeader from './presentation/CustomHeader/CustomHeader';
import CustomLogoSidebar from './presentation/CustomLogoSidebar/CustomLogoSidebar';
import GuardRoute from '../usecase/useGuard';

const { Content, Footer, Sider } = Layout;

const RootLayout: React.FC = () => {
	const [collapsed, setCollapsed] = useState(false);
	const {
		token: { colorBgContainer, borderRadiusLG },
	} = theme.useToken();

	const { items, handleClickMenu } = UseGenerateItems();

	return (
		<GuardRoute>
			<Layout style={{ minHeight: '100vh' }}>
				<Sider
					theme="light"
					className=""
					collapsible
					collapsed={collapsed}
					onCollapse={(value) => setCollapsed(value)}>
					<CustomLogoSidebar />
					<Menu
						className="min-h-screen"
						theme="light"
						defaultSelectedKeys={['/home']}
						mode="inline"
						items={items}
						onClick={({ key }) => handleClickMenu(key)}
					/>
				</Sider>
				<Layout>
					<CustomHeader />
					<Content style={{ margin: '0 16px' }}>
						<div
							style={{
								padding: 24,
								minHeight: '100vh',
								background: colorBgContainer,
								borderRadius: borderRadiusLG,
								marginTop: 20,
								marginBottom: 20,
							}}>
							<Outlet />
						</div>
					</Content>
					<Footer style={{ textAlign: 'center', background: colorBgContainer }}>
						Swiftlet Dashboard
					</Footer>
				</Layout>
			</Layout>
		</GuardRoute>
	);
};

export default RootLayout;
