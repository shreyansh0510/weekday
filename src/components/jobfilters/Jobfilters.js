import { Grid, Stack, TextField } from "@mui/material";
import React, { useState } from "react";
import Filteroptions from "../filteroptions/Filteroptions";
import { useDispatch, useSelector } from "react-redux";
import { searchByName } from "../../redux/slices/filterslice";

function Jobfilters() {
  const filtersData = useSelector((state) => state.filters.jobfilters);

  const [company, setCompany] = useState("");

  const dispatch = useDispatch();

  const handleCompany = (e) => {
    console.log("handleCompany");
    setCompany(e.target.value);
    dispatch(searchByName(e.target.value));
  };

  return (
    <div style={{ textAlign: "center" }}>
      <Grid container sx={{ mt: 2, mb: 4, textAlign: "center" }} spacing={2}>
        {Object.entries(filtersData).map(([key, value]) => {
          return (
            <Filteroptions
              key={key}
              filterName={key}
              filterOptions={Array.from(value)}
            />
          );
        })}

        <Grid item xs={12} md={3}>
          <TextField
            id="outlined-basic"
            // label={company ? "Search Company Name" : ""}
            placeholder="Search Company Name"
            variant="outlined"
            value={company}
            onChange={handleCompany}
            sx={{ width: "100%" }}
            InputLabelProps={{ shrink: false }}
          />
        </Grid>
      </Grid>
    </div>
  );
}

export default Jobfilters;
