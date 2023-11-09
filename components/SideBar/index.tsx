import React from "react";
import Profile from "./Profile";
import style from "./index.module.scss";
function SideBar() {
  return (
    <section className={style.sidebar}>
      <Profile />
    </section>
  );
}

export default SideBar;
