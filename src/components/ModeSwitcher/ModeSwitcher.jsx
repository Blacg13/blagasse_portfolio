import style from './ModeSwitcher.module.css';
import { useRef } from 'react';
const ModeSwitcher = () => {
  const HTML = useRef(document.documentElement);
  const switchTheme = () => {
    const currentTheme = HTML.current.getAttribute("data-theme");
    const newTheme = currentTheme === "dark" ? "light" : "dark";
    HTML.current.setAttribute("data-theme", newTheme);
  }
  return (
    <button className={style['mode-switcher']} onClick={switchTheme}>
      <label>
      <input type="checkbox"/>
      <span className={style.slider}></span>
      </label>
    </button>
  );
};
export default ModeSwitcher;
