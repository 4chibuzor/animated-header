import React from "react";
import "./Footer.css";
export default function Footer({ menus }) {
  const menuList = menus.map((menu, i) => (
    <li key={`key${menu}-${i}`}>
      <a href="#">{menu}</a>
    </li>
  ));
  return (
    <footer className="footer">
      <h5>
        <a href="#">Animated-Header</a>
      </h5>
      <ul className="menuList">{menuList}</ul>
    </footer>
  );
}
