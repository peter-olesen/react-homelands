import { NavLink } from "react-router";
import s from "./Logo.module.scss";

export const Logo = () => {
  return (
    // <NavLink to="/">
    <div className={s.Logo}>
      <h1>HomeLands</h1>
    </div>
    // </NavLink>
  );
};
