import { useState } from 'react';
import Tab from "./Tab.jsx"
import SecretTab from "./SecretTab.jsx"
import tabs from "./tabs.js"

const Tabs = () => {
  const sortedTabs = tabs.sort((a, b) => {
    if (!a.projectDate) return -1; 
    if (!b.projectDate) return 1;  
    return b.projectDate - a.projectDate; 
  });

  const [haveClicked, setHaveClicked] = useState(new Set())
  const [isUnfolded, setUnfolded] = useState(false)
  const handleActivation = (childId) => {
    setHaveClicked((prev) => {
      const newSet = new Set(prev);
      newSet.add(childId);
      return newSet;
    });
    if (haveClicked.size === tabs.length - 1) {
      setUnfolded(true)
      return isUnfolded
    }
  };
  
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
            onActivate={handleActivation}
          />
        );
      })}
      <SecretTab disclosure={isUnfolded} />
    </>
  );
};
export default Tabs;
