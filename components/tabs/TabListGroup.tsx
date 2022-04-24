import React from "react";
import { TabList, Tabs, Tab, TabPanels, TabPanel } from "@chakra-ui/react";

type TabListGroupProps = {
  tabGroupNames: string[];
  tabPanels: React.ReactNode[];
};

const TabListGroup: React.FC<TabListGroupProps> = ({ tabGroupNames, tabPanels }) => {
  return (
    <Tabs>
      <TabList>
        {tabGroupNames.map((tabItem, index) => {
          return <Tab key={index}>{tabItem}</Tab>;
        })}
      </TabList>
      <TabPanels>
        {tabPanels.map((panel, index) => {
          return <TabPanel key={index}>{panel}</TabPanel>;
        })}
      </TabPanels>
    </Tabs>
  );
};

export default TabListGroup;
