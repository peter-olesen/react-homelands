import { NavLink } from "react-router";
import { PATHS } from "../../router/PATHS.js";
import s from "./Navigation.module.scss";

export const Navigation = () => {
  return (
    <nav className={s.Navigation}>
      <ul>
        {PATHS.map((item) => {
          return (
            <li key={item.id}>
              <NavLink
                to={item.path}
                className={({ isActive }) => (isActive ? s.active : "")}
              >
                {item.name}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
