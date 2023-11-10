import React from "react";
import { Space, Avatar, Dropdown, Button } from "antd";
import { MenuOutlined, CloseOutlined, UserOutlined } from "@ant-design/icons";
import type { MenuProps } from "antd";
import style from "./index.module.scss";

interface MenuTypes {
  collapsed?: boolean;
  toggleCollapsed?: () => void;
}

function Navbar({ collapsed, toggleCollapsed }: MenuTypes) {
  const items: MenuProps["items"] = [
    {
      key: "1",
      label: <span>Jagrati gupta</span>,
    },
    {
      key: "2",
      label: <Button>Sign Out</Button>,
    },
  ];
  return (
    <header className={style.navbar}>
      <Space>
        <div className={style.MenuIcon} onClick={toggleCollapsed}>
          {collapsed ? <MenuOutlined /> : <CloseOutlined />}
        </div>
        <div className={style.logo}>TakeNote</div>
      </Space>
      <div className="profile">
        <Dropdown menu={{ items }} placement="bottomLeft">
          <Avatar shape="circle" size={"large"} icon={<UserOutlined />} />
        </Dropdown>
      </div>
    </header>
  );
}

export default Navbar;
