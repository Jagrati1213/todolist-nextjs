import React from "react";
import { Space, Avatar } from "antd";
import { MenuOutlined, UserOutlined } from "@ant-design/icons";
import style from "./index.module.scss";

function Navbar() {
  return (
    <header className={style.navbar}>
      <Space>
        <div className={style.MenuIcon}>
          <MenuOutlined />
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
