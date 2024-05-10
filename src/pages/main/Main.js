import React, { useEffect } from "react";
import TabButton from "../../components/tabbuttons/TabButton";
import Jobs from "../../components/jobs/Jobs";
import { postService } from "../../api/postService";
import { useDispatch, useSelector } from "react-redux";
import {
  filterGlobal,
  filterLoadingData,
  setJobFilters,
  setJobs,
} from "../../redux/slices/filterslice";
import Jobfilters from "../../components/jobfilters/Jobfilters";
import { useState } from "react";
import { Stack } from "@mui/material";
import { getSampleJdJSON } from "../../db/sampledata";

function Main() {
  const [page, setPage] = useState(1);
  const [totalCount, setTotalCount] = useState("");

  const getSearchKeywords = useSelector((state) => state.filters.counters);

  const dispatch = useDispatch();

  console.log("getSearchKeywords", getSearchKeywords);

  const fetchJobs = async (counter = 1) => {
    try {
      let jobresponse = await postService.getJobs(counter);
      dispatch(setJobs(jobresponse.jdList));
      setTotalCount(jobresponse.totalCount);

      // let jobresponse = getSampleJdJSON();
      // console.log("jobresponse>>>>", jobresponse);
      // dispatch(setJobs(jobresponse));
      // setTotalCount(jobresponse.length);

      dispatch(setJobFilters());
      dispatch(filterLoadingData());
    } catch (e) {
      console.error("Error fetching posts", e);
    }
  };

  const handleInfiniteScroll = async () => {
    try {
      if (
        window.innerHeight + document.documentElement.scrollTop + 1 >=
        document.documentElement.scrollHeight
      ) {
        setPage((prevPage) => prevPage + 1);
        console.log("handleInfiniteScroll");
      }
    } catch (error) {}
  };

  useEffect(() => {
    fetchJobs(page);

    return () => {};
  }, [page]);

  useEffect(() => {
    window.addEventListener("scroll", handleInfiniteScroll);
    return () => window.removeEventListener("scroll", handleInfiniteScroll);
  }, []);

  return (
    <>
      <Stack sx={{ p: [2, 5, 2, 5] }}>
        <TabButton />
        <Jobfilters />
        <Jobs totalCount={totalCount} />
      </Stack>
    </>
  );
}

export default Main;
