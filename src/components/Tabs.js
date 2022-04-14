import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

export default () => (
  <Tabs>
    <TabList>
      <Tab>Title 1</Tab>
      <Tab>Title 2</Tab>
    </TabList>

    <TabPanel>
      <h2>The first Tab!</h2>
    </TabPanel>
    <TabPanel>
      <h2>A second, sneaky tab...</h2>
    </TabPanel>
  </Tabs>
);