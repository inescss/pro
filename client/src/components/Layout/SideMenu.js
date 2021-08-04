import React, { useState } from 'react';

import { Layout, Menu } from 'antd';
import {
  HomeOutlined,
  // LogoutOutlined,
  LockOutlined, 
  TeamOutlined,
  SnippetsOutlined,
} from '@ant-design/icons';


import { Link, useLocation } from 'react-router-dom';


const { Sider } = Layout;

const SideMenu = () => {
  const [collapsed, setCollapsed] = useState(false);
  const location = useLocation();
  const SubMenu = Menu.SubMenu;

  const onCollapse = (collapsed) => setCollapsed(collapsed);
  return (
    <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
      <div className="logo" />
      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={[location.pathname]}
      >
        <Menu.Item key="/">
          <HomeOutlined />
          <span>Home</span>
          <Link to="/"></Link>
        </Menu.Item>

        <Menu.Item key="/Job">
        <TeamOutlined />
          <span>Job</span>
          <Link to="/Job"></Link>
        </Menu.Item>

        <Menu.Item key="/login">
          <LockOutlined />
          <span>Login</span>
          <Link to="/login"></Link>
        </Menu.Item>
        {/* <Menu.Item key="/logout">
         <LogoutOutlined />
          <span>Logout</span>
          <Link to="/Logout"></Link>
        </Menu.Item> */}
        <SubMenu
              key='sub1'
              title={
                <span>
                  <SnippetsOutlined />
                  <span>Register</span>
                </span>
              }>
        <Menu.Item key="/Register Employee">
        <span>Register Employee</span>
        <Link to="/registerEmployee"></Link>
        </Menu.Item>
        <Menu.Item key="/Register Company">
        <span>Register Company</span>
        <Link to="/registerCompany"></Link>
        </Menu.Item>
        
          </SubMenu>
          

          
        
        
      </Menu>
    </Sider>
  );
};

export default SideMenu;