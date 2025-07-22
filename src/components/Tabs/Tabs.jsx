import Tab from "./Tab.jsx"
import tabs from "./tabs.js"

const Tabs = () => {
  const sortedTabs = tabs.sort((a, b) => {
    if (!a.projectDate) return -1; 
    if (!b.projectDate) return 1;  
    return b.projectDate - a.projectDate; 
  });

  
  return (
    <>
      {sortedTabs.map((tab) => {        
        return (
          <Tab
            key={tab.id}
            tabId={tab.tabTitle + tab.id}
            topic={tab.tabTopic}
            title={tab.tabTitle}
            date={tab.projectDate}
            techUsed={tab.projectLanguages}
            img={tab.tabImg}
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
