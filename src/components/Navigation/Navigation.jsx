import { NavLink } from "react-router";
import s from "./Navigation.module.scss";

export const Navigation = () => {
  return (
    <nav className={s.Navigation}>
      <ul>
        <li>
          <NavLink to="/">Forside</NavLink>
        </li>
        <li>
          <NavLink to="/homes-for-sale">Boliger til salg</NavLink>
        </li>
        <li>
          <NavLink to="/login">Login</NavLink>
        </li>
      </ul>
    </nav>
  );
};
