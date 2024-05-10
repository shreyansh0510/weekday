import { CallToActionOutlined, SatelliteAlt } from "@mui/icons-material";
import { createSlice } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";

// const rolefilter = (state, action) => {

//   if (state.searchKeywords.rolkeywords.length > 0) {
//     let filteredData = state.data.filter((item) =>
//       state.searchKeywords.rolkeywords.includes(item.jobRole.toLowerCase())
//     );
//     state.filteredData = filteredData;
//   } else {
//     console.log("clear role filters");
//     state.searchKeywords.rolkeywords = [];
//   }
// };

// const locationfilter = (state, action) => {
//   console.log(">>>>>>>>>locationfilter");

//   if (state.searchKeywords.lockeywords.length > 0) {
//     let filteredData = state.data.filter((item) =>
//       state.searchKeywords.lockeywords.includes(item.location.toLowerCase())
//     );
//     state.filteredData = filteredData;
//   } else {
//     console.log("locationfilter else");
//     rolefilter(state, state.searchKeywords.rolkeywords);
//   }
// };

// const expfilter = (state, action) => {
//   console.log(">>>>>>>>>expfilter");

//   if (state.searchKeywords.lockeywords.length > 0) {
//     let minsalary = Math.min(action.payload.keywords);
//     let filteredData = state.data.filter((item) => item.minExp >= minsalary);
//     state.filteredData = filteredData;
//   }
// };

// const salaryfilter = (state, action) => {
//   console.log(">>>>>>>>>salaryfilter");

//   let minsalary = Math.min(action.payload.keywords);
//   let filteredData = state.data.filter((item) => item.minJdSalary >= minsalary);
//   state.filteredData = filteredData;
// };

let initialState = {
  data: [],
  filteredData: [],
  testData: [],

  // current selected filter
  selectedFilter: "",

  // checks if no  search keyword present in all 4
  counters: {
    rolecounter: [],
    expcounter: [],
    locationcounter: [],
    salarycounter: [],
  },
  searchAll: "",

  // used to checks other 3 except 1 ie. selected filter
  otherCounters: {
    rolecounter: [],
    expcounter: [],
    locationcounter: [],
    salarycounter: [],
  },
  threeSearch: "",

  jobfilters: {
    "job role": [],
    "min exp": [],
    location: [],
    "min salary": [],
  },
};

const filterslice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    setJobs: (state, action) => {
      state.data = action.payload;
      state.filteredData = action.payload;
      // state.testData = action.payload;
    },

    setJobFilters: (state, action) => {
      console.log("setJobFilters", action);
      // set roles
      let roles = [];
      state.data?.filter(
        (item) => item.jobRole !== null && roles.push(item.jobRole)
      );
      state.jobfilters["job role"] = Array.from(new Set(roles)).sort();

      //   set min exp
      let experiences = [];
      state.data?.filter(
        (item) => item.minExp !== null && experiences.push(item.minExp)
      );
      state.jobfilters["min exp"] = Array.from(new Set(experiences)).sort(
        (a, b) => a - b
      );

      //   set location
      let locations = [];
      state.data?.filter(
        (item) => item.location !== null && locations.push(item.location)
      );
      state.jobfilters["location"] = Array.from(new Set(locations)).sort();

      //   set salary
      let salaries = [];
      state.data?.filter(
        (item) => item.minJdSalary !== null && salaries.push(item.minJdSalary)
      );
      state.jobfilters["min salary"] = Array.from(new Set(salaries)).sort(
        (a, b) => a - b
      );
    },

    // filterbyrole: (state, action) => {
    //   // console.log("job");
    //   // console.log("action", action);
    //   // let extractData = state.testData.filter((item) =>
    //   //   action.payload.value.includes(item.jobRole.toLowerCase())
    //   // );
    //   // state.testData = extractData;
    // },

    // filterbylocation: (state, action) => {
    //   console.log("location");
    //   console.log("action", action);
    //   if (action.payload.length) {
    //     let extractData = state.data.filter((item) =>
    //       action.payload.includes(item.location.toLowerCase())
    //     );
    //     state.filteredData = extractData;
    //   } else {
    //     state.filteredData = state.data;
    //   }
    // },

    // filterbyexp: (state, action) => {
    //   console.log("exp");
    //   console.log("action", action);
    //   let extractData = state.testData.filter(
    //     (item) => item.minExp >= action.payload.value
    //   );
    //   state.testData = extractData;
    // },

    // filterbysalary: (state, action) => {
    //   console.log("salary");
    //   console.log("action", action);
    //   if (!isNaN(action.payload)) {
    //     let extractData = state.data.filter(
    //       (item) => item.minJdSalary >= action.payload
    //     );
    //     state.filteredData = extractData;
    //   } else {
    //     state.filteredData = state.data;
    //   }
    // },

    searchByName: (state, action) => {
      let tempData = state.testData.length > 0 ? state.testData : state.data;

      if (action.payload !== "") {
        let result = tempData.filter((item) =>
          item.companyName.toLowerCase().includes(action.payload.toLowerCase())
        );
        state.filteredData = result;
      } else {
        state.filteredData = state.searchAll ? state.data : tempData;
      }
    },

    // **********************filterGlobal**********************

    filterGlobal: (state, action) => {
      console.log("filterGlobal", action);
      //  SET CURRENT FILTER ie  state.selectedFilter
      //  SET 4 SEARCH BAR KEYWORDS ACCORDINGLY ie state.counters.counter_name
      if (action.payload.filterName === "job role") {
        state.selectedFilter = "rolecounter";
        state.counters.rolecounter = action.payload.value;
      } else if (action.payload.filterName === "min exp") {
        // console.log("else if min exp", action.payload.value);
        state.selectedFilter = "expcounter";
        state.counters.expcounter = action.payload.value
          ? [action.payload.value]
          : [];
      } else if (action.payload.filterName === "location") {
        state.selectedFilter = "locationcounter";
        state.counters.locationcounter = action.payload.value;
      } else {
        state.selectedFilter = "salarycounter";
        state.counters.salarycounter = action.payload.value
          ? [action.payload.value]
          : [];
      }

      // SEARCH BAR : NO KEYWORDS = true
      state.searchAll = Object.values(state.counters).every(
        (array) => array.length === 0
      );
      // console.log("searchAll", searchAll);

      // 3 SEARCH BAR : NO KEYWORDS
      // CURRENT SEARCH BAR PRESENT
      state.threeSearch = Object.keys(state.counters)
        .filter((key) => key !== state.selectedFilter)
        .every((key) => state.counters[key].length === 0);

      //  ON BASIS OF ALL SEARCH BARS AND 3 SEARCH BARS
      //  ASSIGN state.test (state.data or state.filtered)

      if (state.searchAll === true && state.threeSearch === true) {
        // all 4 search bar empty
        state.testData = state.data;
      } else if (state.searchAll === false && state.threeSearch === true) {
        console.log("else if >>");
        state.testData = state.data;
      } else {
        state.testData = state.filteredData;
      }

      // ---------------------------------------------------------------------------------

      // filters : job role
      if (action.payload.filterName === "job role") {
        let selectedroles = state.counters.rolecounter;

        // if role selected
        if (Array.from(selectedroles).length > 0) {
          let result = state.testData.filter((item) =>
            Array.from(selectedroles).includes(item.jobRole.toLowerCase())
          );
          state.filteredData = result ? result : [];
        } else {
          // if no role selected
          state.filteredData = state.data;
          // state.testData = state.data;
        }
      }

      // filters : location
      if (action.payload.filterName === "location") {
        let selectedLocation = state.counters.locationcounter;

        // if location selected
        if (Array.from(selectedLocation).length > 0) {
          let result = state.testData.filter((item) =>
            Array.from(selectedLocation).includes(item.location.toLowerCase())
          );
          state.filteredData = result ? result : [];
        } else {
          // if no role selected
          state.filteredData = state.data;
          // state.testData = state.data;
        }
      }

      // filters : min exp
      if (action.payload.filterName === "min exp") {
        let selectedexp = state.counters.expcounter;

        // if exp selected
        if (selectedexp.length > 0) {
          console.log("selectedexp: true");
          let result = state.testData.filter(
            (item) => selectedexp >= item.minExp && selectedexp <= item.maxExp
          );
          state.filteredData = result ? result : [];
        } else {
          console.log("selectedexp: false");

          // if no exp selected
          state.filteredData = state.data;
        }
      }

      //filter : min salary
      if (action.payload.filterName === "min salary") {
        let selectedsal = state.counters.salarycounter;

        // if salary selected
        if (selectedsal.length > 0) {
          console.log("selectedsal", Number(selectedsal[0]));
          let result = state.testData.filter(
            (item) =>
              Number(selectedsal[0]) >= item.minJdSalary &&
              Number(selectedsal[0]) <= item.maxJdSalary
          );
          state.filteredData = result ? result : [];
        } else {
          console.log("selectedexp: false");
          state.filteredData = state.data;
        }
      }
    },

    filterLoadingData: (state, action) => {
      // role
      // location
      // salary
      // exp

      let tempdata = state.filteredData;

      if (state.counters.rolecounter.length > 0) {
        let result = tempdata.filter((item) =>
          state.counters.rolecounter.includes(item.jobRole.toLowerCase())
        );
        state.filteredData = result ? result : [];
      }

      if (state.counters.locationcounter.length > 0) {
        let result = tempdata.filter((item) =>
          state.counters.locationcounter.includes(item.location.toLowerCase())
        );
        state.filteredData = result ? result : [];
      }

      if (Array.from(state.counters.expcounter).length > 0) {
        let value = Array.from(state.counters.expcounter);
        let result = tempdata.filter(
          (item) => item.minExp <= value && value <= item.maxExp
        );
        state.filteredData = result ? result : [];
      }

      if (Array.from(state.counters.salarycounter).length > 0) {
        let value = Array.from(state.counters.salarycounter);
        let result = tempdata.filter(
          (item) => item.minJdSalary <= value && value <= item.maxJdSalary
        );
        state.filteredData = result ? result : [];
      }
    },
  },
});

export const {
  setJobs,
  setJobFilters,
  filterbyrole,
  filterbyexp,
  filterbylocation,
  filterbysalary,
  filterGlobal,
  searchByName,
  filterAll,
  filterLoadingData,
} = filterslice.actions;

export default filterslice.reducer;
