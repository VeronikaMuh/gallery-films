import { AppRoutes } from "@shared/routes";
import React from "react";
import { NavLink } from "react-router-dom";
import styles, { navlist } from "./NavBar.module.scss";

const links = {
  HOME: AppRoutes.HOME,
  FAVORITES: AppRoutes.FAVORITE,
};
export const NavBar: React.FC = () => {
  return (
    <nav className={styles.navbar}>
      <ul className={navlist}>
        {/* entries - для объектов метод возвращает массив, содержащий пары «ключ-значение» перечисляемых свойств. */}
        {Object.entries(links).map(([name, path]) => (
          <li key={name} className={styles.navItem}>
            <NavLink
              to={path}
              className={({ isActive }) => (isActive ? styles.active : "")}
            >
              {name}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};
