import style from './Tabs.module.css';
import { useState } from 'react';
import { useSpring, animated } from '@react-spring/web';
import tech from "./tech.js"

const Tab = ({
    tabId,
    topic,
    title,
    techUsed,
    img,
    content,
    githubLink,
    liveLink,
    onActivate,
  }) => {
    const [isActive, setActive] = useState(false);
    const [hasClicked, setHasClicked] = useState(false)
    const handleClick = () => {
      setActive(!isActive)
      if (!hasClicked) {
        setHasClicked(true)
        onActivate(tabId)
      }    
    };
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
    console.log("techUsed: ", techUsed);
    
    return (
      <section 
      id={`${tabId}_${topic}`} 
      className={hasClicked ? style[`${topic}-clicked`] : style[`${topic}`]} 
      >
        <animated.div
          className={style['tab-spin-title']}
          style={spin}
          onClick ={handleClick}
        >
          <div className={style['flip-card-container']}>
            <div
              className={
                isActive ? style['flip-card-recto'] : style['flip-card-verso']
              }
            >
              <h3>{title}</h3>
            </div>
          </div>
        </animated.div>
        <animated.div className={style['tab-content']} style={fade}>
          {img ? <img src={`/src/assets/img/${img}`} alt={`view of ` + title} /> : null}
          <div className={style['tab-tech']}>
          {techUsed ? techUsed.map((techItem) => {
            console.log(techItem)
            return (
              <div key={techItem}>
                {tech.filter((tech) => tech.title === techItem).map((tech) => {
                  return (
                    <img
                      key={tech.id}
                      src={tech.img}
                      alt={tech.title}
                    />
                  );
                })}
              <p>{techItem}</p>
              </div>
            );
          }) : null}
          </div>
          <p>{content}</p>
          <div className={style['tab-links']}>
            {githubLink ? <a href={githubLink} target='_blank' rel='noopener noreferrer'>
              See the code on github
            </a> : null }
            {liveLink ? <a href={liveLink} target='_blank' rel='noopener noreferrer'>
              See the hosted site
            </a> : null}
          </div>
        </animated.div>
      </section>
    );
  };
  export default Tab;