import React from "react";
import "./NavBar.css";
export default function NavBar({ menus }) {
  const menuList = menus.map((menu, i) => (
    <li key={`key${menu}-${i}`}>
      <a href="#">{menu}</a>
    </li>
  ));

  return (
    <nav className="menu">
      <h1>
        <a href="#">Animated-Header</a>
      </h1>
      <ul className="menu-list">{menuList}</ul>
    </nav>
  );
}
