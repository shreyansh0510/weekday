import React from "react";
import {
  Autocomplete,
  Chip,
  Divider,
  Grid,
  IconButton,
  Stack,
  TextField,
  makeStyles,
} from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import "../../App.css";

import CloseIcon from "@mui/icons-material/Close";

import { useDispatch } from "react-redux";
import {
  filterAll,
  filterGlobal,
  filterbyexp,
  filterbylocation,
  filterbyrole,
  filterbysalary,
} from "../../redux/slices/filterslice";
import { useState } from "react";

const getLabel = (name) => {
  if (name === "job role") {
    return "Roles";
  } else if (name === "min exp") {
    return "Min Years of Experience";
  } else if (name === "location") {
    return "Location";
  } else {
    return "Min Base Pay Salary";
  }
};

const styles = {
  autocomplete: {
    "& .MuiAutocomplete-input": {},
    "& .MuiAutocomplete-inputRoot": {},
    "& .MuiOutlinedInput-root": {},
    "& .MuiInputBase-root": {},
    "& .MuiOutlinedInput-input": {},
  },
};

function Filteroptions({ filterName, filterOptions }) {
  const [value, setValue] = React.useState(filterOptions[0]);
  const [inputValue, setInputValue] = React.useState("");

  const dispatch = useDispatch();

  const handleChange = (event, filterData) => {
    // console.log("handleChange", filterData);
    setValue(filterData.newValue);

    dispatch(filterGlobal(filterData));

    // if (filterData.filterName === "job role") {
    //   dispatch(filterbyrole(filterData.value));
    // } else if (filterData.filterName === "location") {
    //   dispatch(filterbylocation(filterData.value));
    // } else if (filterData.filterName === "min exp") {
    //   dispatch(filterbyexp(filterData.value));
    // } else {
    //   dispatch(filterbysalary(filterData.value));
    // }
  };

  return (
    <>
      <Grid item xs={12} md={3}>
        <Autocomplete
          multiple={
            filterName === "job role" || filterName === "location"
              ? true
              : false
          }
          id="tags"
          // sx={styles.autocomplete}
          popupIcon={
            <>
              <Divider orientation="vertical" variant="fullWidth" flexItem />
              <KeyboardArrowDownIcon fontSize="medium" />
            </>
          }
          autoHighlight
          value={value}
          onChange={(event, value) =>
            handleChange(event, { filterName, value })
          }
          inputValue={inputValue}
          onInputChange={(event, newInputValue) => {
            setInputValue(newInputValue);
          }}
          options={filterOptions}
          getOptionLabel={(filterOptions) => filterOptions}
          filterSelectedOptions={false}
          renderInput={(params) => (
            <>
              <TextField
                {...params}
                label={value ? getLabel(filterName) : ""}
                placeholder={getLabel(filterName)}
                InputLabelProps={{ shrink: false }}
              />
            </>
          )}
          renderTags={(tagValue, getTagProps) =>
            tagValue?.map((option, index) => (
              <Chip
                label={option}
                {...getTagProps({ index })}
                sx={{
                  borderRadius: 0,
                  textTransform: "capitalize",
                  color: "red",
                  padding: -10,
                  margin: 10,
                }}
                deleteIcon={<CloseIcon style={{ fontSize: 16 }} />}
              />
            ))
          }
        />
      </Grid>
    </>
  );
}

export default Filteroptions;
