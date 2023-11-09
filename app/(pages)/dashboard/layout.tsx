import SideBar from "@/components/SideBar";
import style from "./page.module.scss";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className={style.layout}>
      <SideBar />
      <div>{children}</div>
    </main>
  );
}
