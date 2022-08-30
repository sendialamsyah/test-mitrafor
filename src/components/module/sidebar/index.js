import { Layout, Menu } from "antd";
import { Link } from "react-router-dom";
import {
  HomeOutlined,
  UserOutlined,
  ContactsOutlined,
} from "@ant-design/icons";
import React from "react";
import styles from "./sidebar.module.css";
const { Content, Sider } = Layout;

const Sidebar = ({ children }) => {
  return (
    <Layout>
      <Sider className={styles.sider}>
        <Menu theme="dark" mode="inline">
          <Menu.Item>
            <Link to="/">
              <HomeOutlined /> Home
            </Link>
          </Menu.Item>
          <Menu.Item>
            <Link to="/about">
              <UserOutlined /> About
            </Link>
          </Menu.Item>
          <Menu.Item>
            <Link to="/contact">
              <ContactsOutlined /> Contact
            </Link>
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout>
        <Content>{children}</Content>
      </Layout>
    </Layout>
  );
};

export default Sidebar;
