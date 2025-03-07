import style from './ModeSwitcher.module.css';
import { useRef, useState } from 'react';
import { useSpring, animated } from '@react-spring/web';
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
  // animations ----------------------------------
    const transition = useSpring({
      transform: `translateX(${HTML.current.getAttribute("data-theme") === "dark" ? 0.05 : 1.6}em)`,
      config: { mass: 1, tension: 130, friction: 30 },
    });
  //------------------------------------------------
  return (
    <button 
      className={HTML.current.getAttribute("data-theme") === "dark" ? style['mode-dark'] : style['mode-light']}
      onClick={handleClick}>
      <animated.div style={transition} ></animated.div>
    </button>
  );
};
export default ModeSwitcher;
