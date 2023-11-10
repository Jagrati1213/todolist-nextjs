import React from "react";
import style from "./index.module.scss";
import {
  EditOutlined,
  BellOutlined,
  BulbOutlined,
  DeleteOutlined,
} from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Col, Menu } from "antd";
type MenuItem = Required<MenuProps>["items"][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: "group"
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
    type,
  } as MenuItem;
}
const items: MenuItem[] = [
  getItem("Notes", "notes", <BulbOutlined />),
  getItem("Reminders", "reminders", <BellOutlined />),
  getItem("Edit Labels", "editlabels", <EditOutlined />),
  getItem("Trash", "trash", <DeleteOutlined />),
];

function SideMenu({ collapsed }: { collapsed: boolean }) {
  return (
    <Col className={style.sideMenu}>
      <Menu
        defaultSelectedKeys={["notes"]}
        defaultOpenKeys={["notes"]}
        mode="inline"
        theme="light"
        inlineCollapsed={collapsed}
        items={items}
        onClick={(key) => {
          console.log(key);
        }}
      />
    </Col>
  );
}

export default SideMenu;
