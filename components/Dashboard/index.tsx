"use client";
import { Col } from "antd";
import React, { useState } from "react";
import Navbar from "./Navbar";
import SideMenu from "./SideMenu";
import style from "./index.module.scss";

export function Dashboard() {
  const [collapsed, setCollapsed] = useState(false);

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  return (
    <>
      <Col span={24} className={style.fixed_header}>
        <Navbar toggleCollapsed={toggleCollapsed} collapsed={collapsed} />
      </Col>
      <SideMenu collapsed={collapsed} />
    </>
  );
}
