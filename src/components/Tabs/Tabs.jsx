import style from './Tabs.module.css';
import { useState } from 'react';
import { useSpring, animated } from '@react-spring/web';

const Tabs = () => {
  const tabs = [
    {
      id: 1,
      tabTopic: 'about',
      tabTitle: 'about me',
      tabContent: [
        "I'm passionate about programming and designing intuitive website interfaces",
        "Currently training to become a frontenddeveloper, I'm diving deep into JavaScript and React with a relentless curiosity to master and optimize every line of code.",
      ],
    },
    {
      id: 2,
      tabTopic: 'project',
      tabTitle: 'rock paper scissors',
      projectDate: new Date(2024, 2),
      projectLanguages: ['HTML', 'CSS', 'JavaScript'],
      tabContent: ['bloub', 'blabb'],
      githubProjectLink: 'https://github.com/Blacg13/IF3_PierrePapierCiseaux',
      liveProjectLink: 'https://www.whatbeatsrock.com/',
    },
    {
      id: 3,
      tabTopic: 'project',
      tabTitle: 'Integrity Project',
      projectDate: new Date(2025, 1),
      projectLanguages: ['WordPress', 'React', 'Scss'],
      tabContent: ['bloub', 'blabb'],
      githubProjectLink: null,
      liveProjectLink: 'https://www.integrityproject.be/',
    },
    {
      id: 4,
      tabTopic: 'project',
      tabTitle: 'FestivalFlow',
      projectDate: new Date(2024, 10),
      projectLanguages: ['nodeJS', 'React', 'MongoDB', 'CSS'],
      tabContent: ['bloub', 'blabb'],
      githubProjectLink: 'https://github.com/Blacg13/FestivalFlow',
      liveProjectLink: null,
    },
    {
      id: 5,
      tabTopic: 'about',
      tabTitle: 'gitignore',
      tabContent: ['bloub', 'blabb'],
      githubProjectLink: null,
      liveProjectLink: null,
    },
  ];

  return (
    <>
      {tabs.map((tab) => {
        return (
          <Tab
            key={tab.id}
            tabId={tab.tabTitle + tab.id}
            topic={tab.tabTopic}
            title={tab.tabTitle}
            date={tab.projectDate}
            language={tab.projectLanguages}
            content={tab.tabContent}
            githubLink={tab.githubProjectLink}
            liveLink={tab.liveProjectLink}
          />
        );
      })}
    </>
  );
};
export default Tabs;

const Tab = ({
  tabId,
  topic,
  title,
  // date,
  // language,
  content,
  githubLink,
  liveLink,
}) => {
  const [isActive, setActive] = useState(false);
  const spin = useSpring({
    transform: `rotateY(${isActive ? 180 : 0}deg)`,
    config: { mass: 3, tension: 130, friction: 30 },
  });
  const fade = useSpring({
    opacity: isActive ? 1 : 0,
    display: isActive ? 'block' : 'none',
    transform: `translateY(${isActive ? 0 : 20}px)`,
    config: { mass: 1, tension: 200, friction: 20 },
    delay: isActive ? 100 : 0,
  });
  return (
    <section id={`${tabId}_${topic}`} className={style[`${topic}`]}>
      <animated.div
        className={style['tab-spin-title']}
        style={spin}
        onClick={() => setActive(!isActive)}
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
        <p>{content}</p>
        <div className={style['tab-links']}>
          <a href={githubLink} target='_blank' rel='noopener noreferrer'>
            See the code on github
          </a>
          <a href={liveLink} target='_blank' rel='noopener noreferrer'>
            See the hosted site
          </a>
        </div>
      </animated.div>
    </section>
  );
};
