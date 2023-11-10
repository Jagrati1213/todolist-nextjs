"use client";
import React from "react";
import { Card, List } from "antd";
import style from "./index.module.scss";

function TaskList() {
  const data = [
    {
      title: "Title 1",
    },
    {
      title: "Title 2",
    },
    {
      title: "Title 3",
    },
    {
      title: "Title 4",
    },
    {
      title: "Title 4",
    },
  ];

  return (
    <>
      <List
        className={style.lists}
        grid={{ gutter: 16, column: 4, xs: 1, sm: 1, md: 2, xl: 4, lg: 3 }}
        dataSource={data}
        renderItem={(item) => (
          <List.Item>
            <Card title={item.title}>Card content</Card>
          </List.Item>
        )}
      />
    </>
  );
}

export default TaskList;
