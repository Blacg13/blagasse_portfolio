import style from './Tabs.module.css';
import { useState } from 'react';
import { animated, useSpring } from '@react-spring/web';

const SecretTab = () => {
    const [isActive, setActive] = useState(false);
      // animations ----------------------------------
      const spin = useSpring({
        transform: `rotateY(${isActive ? 180 : 0}deg)`,
        config: { mass: 3, tension: 130, friction: 30 },
      });
      const fade = useSpring({
        opacity: isActive ? 1 : 0,
        display: isActive ? 'block' : 'none',
        transform: `translateY(${isActive ? 0 : 20}px)`,
        config: { mass: 5, tension: 150, friction: 50 },
        delay: isActive ? 200 : 0,
      });
    //------------------------------------------------

    return (
        <section id={"secretTab"} className={style["secret-tab"]}>
            <animated.div
          className={style['tab-spin-title']}
          style={spin}
          onClick ={() => setActive(!isActive)}
            >
          <div className={style['flip-card-container']}>
            <div
              className={
                isActive ? style['flip-card-recto'] : style['flip-card-verso']
              }
            >
              <h3>Gitignore</h3>
            </div>
          </div>
        </animated.div>
        <animated.div className={style['tab-content']} style={fade}>
          
          <p>hello world</p>
        </animated.div>
        </section>
    )
}
export default SecretTab;