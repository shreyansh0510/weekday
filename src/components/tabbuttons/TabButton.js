import { Badge, Box, Tab, Tabs } from "@mui/material";
import zIndex from "@mui/material/styles/zIndex";
import React from "react";

const style = {
  tabs: {
    border: "1px solid black",
    mt: 1,
  },
  badge: {
    position: "relative",
    zIndex: 1,
    border: "1px solid black",
    m: 2,
  },
};

function TabButton() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <>
      <Tabs value={value} onChange={handleChange} centered sx={style.tabs}>
        <Badge badgeContent={4} color="primary" sx={style.badge}>
          <Tab label="Applied Jobs" />
        </Badge>
        <Tab label="Search Jobs" />
        <Tab label="Suggested Jobs" />
      </Tabs>
    </>
  );
}

export default TabButton;
