import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import Footerr from "../footer/footer";
import { Navbar } from "../components/navbar";
import { Review } from "./insideTabComponents/review";
import { Question } from "./insideTabComponents/question";
import { Fquestion } from "./insideTabComponents/fquestion";

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
    <Box
      sx={{
        width: "100%",
        marginTop: "80px",
        backgroundColor: "rgba(0, 109, 171, 0.20)",
        marginBottom: "80px",
      }}
    >
      <Tabs
        value={value}
        onChange={handleChange}
        aria-label="wrapped label tabs example"
        sx={{
          marginLeft: "70px",
        }}
      >
        <Tab value="one" label="Item reviews" wrapped />
        <Tab value="two" label="Q&A" />
        <Tab value="three" label="FAQ" />
        <Tab value="foour" label="Contact" />
      </Tabs>
      <div
        style={{
          marginTop: "45px",

          backgroundColor: "#FAFAFA",
        }}
      >
        <div style={{ marginLeft: "75px" }}>
          <TabPanel value={value} index="one">
            <Review />
          </TabPanel>

          <TabPanel value={value} index="two">
            <Question />
          </TabPanel>

          <TabPanel value={value} index="three">
            {/* Content for the "Item Three" tab */}
            <Fquestion />
          </TabPanel>
        </div>
      </div>
    </Box>
  );
}
