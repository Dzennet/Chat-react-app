import React from "react";
import s from "./SidebarDialog.module.css";
import { NavLink } from "react-router-dom";

function SidebarDialog({ title, icon, path }) {
  return (
    <NavLink
      activeClassName={s.active}
      className={s.sidebar__dialog__info_link}
      activeClassName={s.active}
      to={path}
    >
      <div className={s.sidebar__dialog}>
        <div className={s.sidebar__dialog__icon}>{icon}</div>
        <div className={s.sidebar__dialog__info}>
          <div className={s.sidebar__dialog__info_title}>{title}</div>
        </div>
      </div>
    </NavLink>
  );
}

export default SidebarDialog;
