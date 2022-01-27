import React, { useState, useEffect } from "react";
import { Layout, Menu, Button, Typography, Divider } from "antd";
import {} from "antd";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";
import {
  DesktopOutlined,
  FileOutlined,
  TeamOutlined,
  UserOutlined,
} from "@ant-design/icons";
import {} from "antd";

import NavbarAdmin from "./NavbarAdmin";
import AdminCards from "../AdminCards";
import TableAdmin from "./TableAdmin";
import Admin from "./Admin";

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;
const { Title } = Typography;

function LayoutAdmin() {
  const { collapsed, setCollapsed } = useState(true);
  const [login, setLogin] = useState(false);

  const toggleCollapse = (e) => {
    setCollapsed(!collapsed);
    console.log(collapsed);
  };

  return (
    <>
      {login ? (
        <Redirect to="/login" />
      ) : (
        <Layout style={{ minHeight: "100vh" }}>
          <Router>
            <Sider
              collapsible
              collapsed={collapsed}
              onCollapse={() => toggleCollapse()}
            >
              <div className="logo" />
              <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline">
                <Menu.Item></Menu.Item>
                <Menu.Item key="1" icon={<DesktopOutlined />}>
                  <Link to="/admin">Dashboard</Link>
                </Menu.Item>
                <Menu.Item key="2" icon={<DesktopOutlined />}>
                  <Link to="/clients">Clients</Link>
                </Menu.Item>
                <SubMenu key="sub2" icon={<TeamOutlined />} title="Members">
                  <Menu.Item key="6">Total</Menu.Item>
                  <Menu.Item key="8">Hundai</Menu.Item>
                </SubMenu>
                <Menu.Item key="9" icon={<FileOutlined />}>
                  Sign Out
                </Menu.Item>
              </Menu>
            </Sider>
            <Layout className="site-layout">
              <Header
                className="site-layout-background"
                style={{ padding: "0rem 0", background: "#F0F2F5" }}
              >
                <NavbarAdmin />
              </Header>
              <Content style={{ margin: "0 16px" }}>
                <div
                  className="site-layout-background"
                  style={{ padding: 24, minHeight: 1000, background: "#fff" }}
                >
                  <Title>Admin Dashboard</Title> <Divider />
                  <Switch>
                    <Route path="/admin">
                      <AdminCards />
                    </Route>
                    <Route path="/clients">
                      <Admin />
                    </Route>
                  </Switch>
                </div>
              </Content>
              <Footer style={{ textAlign: "center" }}>
                Ant Design ©2018 Created by Ant UED
              </Footer>
            </Layout>
          </Router>
        </Layout>
      )}
    </>
  );
}

export default LayoutAdmin;
