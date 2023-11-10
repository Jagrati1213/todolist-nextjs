"use client";

import React, { useEffect } from "react";
import style from "./page.module.scss";
import { Col, Flex, Input, Row } from "antd";
import TaskList from "@/components/Dashboard/TaskList";
import { useRouter } from "next/navigation";

function dashboard() {
  const router = useRouter();
  const user = "ram";

  useEffect(() => {
    if (user !== null) {
      return router.push("/dashboard");
    } else {
      return router.push("/");
    }
  }, [user]);
  return (
    <section className={style.dashboard}>
      <Flex className="container" align={"center"} vertical>
        <Row gutter={[10, 10]} className={style.input_box}>
          <Col span={24}>
            <Input placeholder="Title" name="title" />
          </Col>
          <Col span={24} className={style.note}>
            <Input placeholder="Take a note..." name="note" />
          </Col>
          <Col span={24} className={style.button}>
            Close
          </Col>
        </Row>
      </Flex>
      <div className={style.taskList}>
        <TaskList />
      </div>
    </section>
  );
}

export default dashboard;
