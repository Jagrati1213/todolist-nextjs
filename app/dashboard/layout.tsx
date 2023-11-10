import style from "./page.module.scss";
import { Col, Row } from "antd";
import { Dashboard } from "@/components/Dashboard";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      <Row className={style.main}>
        <Dashboard />
        <Col className={style.task_container}>{children}</Col>
      </Row>
    </section>
  );
}
