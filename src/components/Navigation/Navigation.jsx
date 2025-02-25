import { NavLink } from "react-router";
import { useContext } from "react";
import { UserContext } from "../../context/userContext.jsx";
import { PATHS } from "../../router/PATHS.js";
import s from "./Navigation.module.scss";

export const Navigation = () => {
  const { userData } = useContext(UserContext);

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

        <li>
          {!userData ? (
            <NavLink
              to="/login"
              className={({ isActive }) => (isActive ? s.active : "")}
            >
              Login
            </NavLink>
          ) : (
            <NavLink
              onClick={() => {
                sessionStorage.removeItem("userData");
              }}
            >
              Logout
            </NavLink>
          )}
        </li>
      </ul>
    </nav>
  );
};
