import React, { useReducer, useEffect } from "react";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import Content from "./components/Content/Content";
import ThemeContext from "./components/Theme/Theme";
import "./App.css";
const reducer = (theme, action) => {
  switch (action.type) {
    case "light":
      return { theme: "dark" };
    case "dark":
      return { theme: "light" };
    default:
      return theme;
  }
};
function App() {
  const menus = ["Eat", "Code", "Sleep", "Repeat", ""];
  const footerMenu = menus.filter((menu) => Boolean(menu));
  const [theme, setTheme] = useReducer(reducer, "light");

  function windowScroll() {
    return window.pageYOffset || window.scrollY;
  }
  function changeHeaderHeight(timeStamp) {
    let height = windowScroll();
    const headerElement = document.querySelector("header");

    if (height > 250) {
      headerElement.classList.add("header-shrink");
    }
    if (height < 250) {
      headerElement.classList.remove("header-shrink");
    }
  }
  const handleWindowScroll = () =>
    window.requestAnimationFrame(changeHeaderHeight);
  useEffect(() => {
    window.addEventListener("scroll", handleWindowScroll);
    return () => window.removeEventListener("scroll", handleWindowScroll);
  });
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div className="App">
        <header className="header">
          <NavBar menus={menus} />
        </header>
        <main className="clearfix">
          <Content />
        </main>
        <Footer menus={footerMenu} />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
