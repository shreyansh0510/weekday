import { Badge, Tab, Tabs } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";

const style = {
  tabs: {
    mt: 1,
    color: "red",
  },
  badge: {
    position: "relative",
    borderRadius: 10,
    top: 10,
    right: 5,
    p: -1,
    fontWeight: 600,
  },
  tab: {
    textTransform: "capitalize",
    // fontSize: 18,
    color: "var(--secondary-color)",
  },
};

function TabButton() {
  const [value, setValue] = React.useState(1);
  const handleChange = (event, value) => {
    setValue(value);
  };

  let count = useSelector((state) => state.filters.filteredData.length);

  return (
    <>
      <Tabs value={value} onChange={handleChange} centered sx={style.tabs}>
        <Tab label="Applied Jobs" sx={style.tab} disableRipple />

        <Tab label="Search Jobs" sx={style.tab} disableRipple />
        <Badge badgeContent={count} color="primary" sx={style.badge}></Badge>

        <Tab label="Suggested Jobs" sx={style.tab} disableRipple />
      </Tabs>
    </>
  );
}

export default TabButton;
