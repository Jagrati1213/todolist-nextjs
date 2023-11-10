import React from "react";
import { Space, Avatar } from "antd";
import { MenuOutlined, CloseOutlined, UserOutlined } from "@ant-design/icons";
import style from "./index.module.scss";

interface MenuTypes {
  collapsed?: boolean;
  toggleCollapsed?: () => void;
}
function Navbar({ collapsed, toggleCollapsed }: MenuTypes) {
  return (
    <header className={style.navbar}>
      <Space>
        <div className={style.MenuIcon} onClick={toggleCollapsed}>
          {collapsed ? <MenuOutlined /> : <CloseOutlined />}
        </div>
        <div className={style.logo}>TakeNote</div>
      </Space>
      <div className="profile">
        <Avatar shape="circle" size={"large"} icon={<UserOutlined />} />
      </div>
    </header>
  );
}

export default Navbar;
