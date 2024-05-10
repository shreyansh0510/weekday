// data: [],
//   filteredData: [],
//   testData: [],

//   // current selected filter
//   selectedFilter: "",

//   // checks if no  search keyword present in all 4
//   counters: {
//     rolecounter: [],
//     expcounter: [],
//     locationcounter: [],
//     salarycounter: [],
//   },
//   searchAll: "",

//   // used to checks other 3 except 1 ie. selected filter
//   otherCounters: {
//     rolecounter: [],
//     expcounter: [],
//     locationcounter: [],
//     salarycounter: [],
//   },
//   threeSearch: "",

// const filterslice = createSlice({
//     name: "filters",
//     initialState,
//     reducers: {
//       setJobs: (state, action) => {
//         state.data = action.payload;
//         state.filteredData = action.payload;
//         // state.testData = action.payload;
//       },

//       filterbyrole: (state, action) => {
//         // console.log("job");
//         // console.log("action", action);
//         // let extractData = state.testData.filter((item) =>
//         //   action.payload.value.includes(item.jobRole.toLowerCase())
//         // );
//         // state.testData = extractData;
//       },

//       // filterbylocation: (state, action) => {
//       //   console.log("location");
//       //   console.log("action", action);
//       //   if (action.payload.length) {
//       //     let extractData = state.data.filter((item) =>
//       //       action.payload.includes(item.location.toLowerCase())
//       //     );
//       //     state.filteredData = extractData;
//       //   } else {
//       //     state.filteredData = state.data;
//       //   }
//       // },

//       // filterbyexp: (state, action) => {
//       //   console.log("exp");
//       //   console.log("action", action);
//       //   let extractData = state.testData.filter(
//       //     (item) => item.minExp >= action.payload.value
//       //   );
//       //   state.testData = extractData;
//       // },

//       // filterbysalary: (state, action) => {
//       //   console.log("salary");
//       //   console.log("action", action);
//       //   if (!isNaN(action.payload)) {
//       //     let extractData = state.data.filter(
//       //       (item) => item.minJdSalary >= action.payload
//       //     );
//       //     state.filteredData = extractData;
//       //   } else {
//       //     state.filteredData = state.data;
//       //   }
//       // },

//       // searchByName: (state, action) => {
//       //   console.log("searchByName", action);
//       //   if (action.payload !== "") {
//       //     let extractData = state.data.filter((data) =>
//       //       data.companyName.toLowerCase().includes(action.payload.toLowerCase())
//       //     );
//       //     state.filteredData = extractData;
//       //   } else {
//       //     state.filteredData = state.data;
//       //   }
//       // },

//       // **********************filterGlobal**********************

//       filterGlobal: (state, action) => {
//         //  SET CURRENT FILTER ie  state.selectedFilter
//         //  SET 4 SEARCH BAR KEYWORDS ACCORDINGLY ie state.counters.counter_name
//         if (action.payload.filterName === "job role") {
//           state.selectedFilter = "rolecounter";
//           state.counters.rolecounter = action.payload.value;
//         } else if (action.payload.filterName === "min exp") {
//           state.selectedFilter = "expcounter";
//           state.counters.expcounter = action.payload.value;
//         } else if (action.payload.filterName === "location") {
//           state.selectedFilter = "locationfilter";
//           state.counters.locationcounter = action.payload.value;
//         } else {
//           state.selectedFilter = "salaryfilter";
//           state.counters.salarycounter = action.payload.value;
//         }

//         // SEARCH BAR : NO KEYWORDS = true
//         state.searchAll = Object.values(state.counters).every(
//           (array) => array.length === 0
//         );
//         // console.log("searchAll", searchAll);

//         // 3 SEARCH BAR : NO KEYWORDS
//         // CURRENT SEARCH BAR PRESENT
//         state.threeSearch = Object.keys(state.counters)
//           .filter((key) => key !== state.selectedFilter)
//           .every((key) => state.counters[key].length === 0);

//         //  ON BASIS OF ALL SEARCH BARS AND 3 SEARCH BARS
//         //  ASSIGN state.test (state.data or state.filtered)

//         if (state.searchAll === true) {
//           // all 4 search bar empty
//           state.testData = state.data;
//         } else if (state.searchAll === true && state.threeSearch === false) {
//           state.testData = state.data;
//         } else {
//           if (state.threeSearch === true) {
//             // all 4 search bar not empty
//             state.testData = state.data;
//           } else {
//             state.testData = state.filteredData;
//           }
//         }

//         // ---------------------------------------------------------------------------------

//         // filters : job role
//         if (action.payload.filterName === "job role") {
//           let selectedroles = state.counters.rolecounter;
//           selectedroles = action.payload.value;
//           console.log("rolecounter1", selectedroles);

//           // if role selected
//           if (Array.from(selectedroles).length > 0) {
//             let extractData = state.testData.filter((item) =>
//               Array.from(selectedroles).includes(item.jobRole.toLowerCase())
//             );
//             state.filteredData = extractData;
//             state.testData = extractData;
//           } else {
//             // if no role selected
//             state.filteredData = state.data;
//             // state.testData = state.data;
//           }
//         }

//         // filters : min exp
//         if (action.payload.filterName === "min exp") {
//           let selectedexp = state.counters.expcounter;
//           selectedexp = action.payload.value;
//           console.log("expcounter", selectedexp);

//           // if exp selected
//           if (!isNaN(selectedexp) && selectedexp !== null) {
//             console.log("isnan");
//             let extractData = state.testData.filter(
//               (item) => selectedexp >= item.minExp && selectedexp <= item.maxExp
//             );
//             state.filteredData = extractData;
//             // state.testData = extractData;
//           } else {
//             // if no exp selected
//             state.filteredData = state.data;
//             state.testData = state.data;
//           }
//         }
//       },
//     },
//   });
