import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import Footerr from "../footer/footer";
import { Navbar } from "../components/navbar";

export default function TabsWrappedLabel() {
  const [value, setValue] = React.useState("one");

  const TabPanel = ({ value, index, children }) => {
    return (
      <div role="tabpanel" hidden={value !== index}>
        {value === index && <div>{children}</div>}
      </div>
    );
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%", backgroundColor: "rgba(0, 109, 171, 0.20)" }}>
      <Tabs
        value={value}
        onChange={handleChange}
        aria-label="wrapped label tabs example"
      >
        <Tab value="one" label="Item reviews" wrapped />
        <Tab value="two" label="Item Two" />
        <Tab value="three" label="Item Three" />
        <Tab value={value} label="four">
          {/* <Footerr /> */}
          <Navbar />
        </Tab>
      </Tabs>
      <TabPanel value={value} index="one">
        {/* Content for the "Item reviews" tab */}
        <p>This is the content for the "Item reviews" tab.</p>
        <Footerr />
      </TabPanel>

      <TabPanel value={value} index="two">
        {/* Content for the "Item Two" tab */}
        <p>This is the content for the "Item Two" tab.</p>
      </TabPanel>

      <TabPanel value={value} index="three">
        {/* Content for the "Item Three" tab */}
        <p>This is the content for the "Item Three" tab.</p>
      </TabPanel>

      <TabPanel value={value} index="four">
        {/* Content for the "Item 4" tab, using the Footerr component */}
      </TabPanel>
    </Box>
  );
}
