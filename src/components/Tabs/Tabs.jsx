import style from './Tabs.module.css';
import { useState } from 'react';
import { useSpring, animated } from '@react-spring/web';

const Tabs = () => {
  const tabs = [
    {
      id: 1,
      tabTopic: 'about',
      tabTitle: 'about me',
      tabImg: undefined,
      tabContent: [
        "I'm passionate about programming and designing intuitive website interfaces. ",
        "Currently training to become a frontenddeveloper, I'm diving deep into JavaScript and React with a relentless curiosity to master and optimize every line of code. ",
      ],
    },
    {
      id: 2,
      tabTopic: 'project',
      tabTitle: 'rock paper scissors',
      projectDate: new Date(2024, 2),
      projectLanguages: ['HTML', 'CSS', 'JavaScript'],
      tabImg: 'rock-paper-scissors.png',
      tabContent: ['\"Rock, paper, scissors\” game made during my training as a frontend developer at Interface3 (Brussels, Belgium). ', 'The user clicks on one of the images on the left, and the computer randomly selects one of the images with a small animation. '],
      githubProjectLink: 'https://github.com/Blacg13/IF3_PierrePapierCiseaux',
      liveProjectLink: 'https://www.whatbeatsrock.com/',
    },
    {
      id: 4,
      tabTopic: 'project',
      tabTitle: 'FestivalFlow',
      projectDate: new Date(2024, 10),
      projectLanguages: ['nodeJS', 'React', 'MongoDB', 'CSS'],
      tabImg: "festival-flow.png",
      tabContent: ['The ambition of this website is to streamline the management of exhibitors for a small festival in Wallonia, replacing spreadsheets, emails, and physical files. ', 'It centralizes contact management, contract tracking, and payment follow-ups while aiming to automate tasks like reminder emails. ', 'The key priorities are enabling contact, organizing data, and ensuring data communication. '],
      githubProjectLink: 'https://github.com/Blacg13/FestivalFlow',
      liveProjectLink: null,
    },
  ];
  // const tabCount = React.Children.count(children)
  // const [activatedTab, setActivateTab] = useState({})
  // const activateTab = (index) => {
  //   setActivateTab(index)
  //   if (!activateTab[index]) {
  //     const updateTabs = { ...activatedTab, [index]: true };
  //     setActivatedTabs(updatedTabs);

  //     if (Object.keys(updatedTabs).length === tabCount) {
  //       console.log('Tous les onglets ont été activés au moins une fois !');
  //   }
  // }
  // const [count, setCount] = useState(0)
  // const easterEgg = () => {
  //   setCount(count + 1)
  //   console.log("count: ", count);
  // }

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
            img={tab.tabImg}
            content={tab.tabContent}
            githubLink={tab.githubProjectLink}
            liveLink={tab.liveProjectLink}
            // onClick={() => activateTab(index)}
            // handleClick={easterEgg}
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
  img,
  content,
  githubLink,
  liveLink,
  // handleClick,
}) => {
  const [isActive, setActive] = useState(false);
  const [count, setCount] = useState(0)
  const handleClick = () => {
    setActive(!isActive)
    setCount(count + 1)
    console.log("easterEgg: ", count);
  };
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
