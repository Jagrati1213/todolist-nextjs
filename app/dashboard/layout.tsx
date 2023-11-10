import Navbar from "@/components/Navbar";
import SideMenu from "@/components/SideMenu";
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
        <div className={style.task_container}>{children}</div>
      </Row>
    </section>
  );
}
