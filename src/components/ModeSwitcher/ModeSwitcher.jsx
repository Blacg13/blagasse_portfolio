import style from './ModeSwitcher.module.css';
import { useRef, useState } from 'react';
const ModeSwitcher = () => {
  const HTML = useRef(document.documentElement);
  localStorage.setItem("theme", HTML.current.getAttribute("data-theme"));
  const switchTheme = () => {
    const currentTheme = HTML.current.getAttribute("data-theme");
    const newTheme = currentTheme === "dark" ? "light" : "dark";
    HTML.current.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
  }
  const [theme, setTheme] = useState(localStorage.getItem("theme"));
  const handleClick = () => {
    switchTheme();
    setTheme(theme === "dark" ? "light" : "dark");
  }
  return (
    <button className={style['mode-switcher']} onClick={handleClick}>
      <div className={HTML.current.getAttribute("data-theme") === "dark" ? style['moon'] : style['sun']}></div>
    </button>
  );
};
export default ModeSwitcher;
