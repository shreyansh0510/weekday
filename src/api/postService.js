import axios from "axios";

const url = "https://api.weekday.technology/adhoc/getSampleJdJSON";

export const postService = {
  getJobs: async (counter) => {
    try {
      const response = await axios.post(url, {
        limit: 10 * counter,
        offset: 0,
      });
      return response.data;
    } catch (e) {
      console.log("error");
    }
  },
};
