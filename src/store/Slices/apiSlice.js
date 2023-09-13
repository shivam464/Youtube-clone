// slices/apiSlice.js

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchData = createAsyncThunk("fetchApiData", async () => {
  try {
    const params = {
      part: "snippet,contentDetails,statistics,status,statistics,topicDetails",
      // part: "snippet,fileDetails,contentDetails,id,statistics,topicDetails",
      // You can specify additional parts as needed
      chart: "mostPopular", // Ge,t the most popular videos
      maxResults: 20, // Number of results to retrieve (adjust as needed)
      key: "AIzaSyDElmCWonR6xKu01WNopa-YC2n8AGhQr1E",
    };
    const response = await axios.get(
      "https://www.googleapis.com/youtube/v3/videos",
      {
        params: params,
        // headers: {
        //   "X-RapidAPI-Key":
        //     "23fa5e51a6msh9bd7d96ed683d67p13a38cjsnc9a06beffd4e",
        //   "X-RapidAPI-Host": "youtube138.p.rapidapi.com",
        // },
      }
    );
    console.log("response", response);
    return response.data;
  } catch (error) {
    throw error;
  }
});
const initialState = {
  data: [],
  status: "null",
  error: null,
};
const apiSlice = createSlice({
  name: "api",
  initialState,
  reducers: {},

  extraReducers: {
    [fetchData.fulfilled]: (state, action) => {
      //If we have to totally replace the existing array:
      // state.data = action.payload;
      // state.todos = state.data.concat(action.payload);
      console.log("action.payload", action.payload);
      const { data } = state;
      if (data.length > 0) {
        state.data = state.data.concat(action.payload);
      } else {
        state.data = action.payload;
      }
      //if we want to add the json to an existing array
      // let updatedData = state.data.concat(action.payload);
      // state.data = updatedData;
      state.status = "succeeded";
    },
    [fetchData.pending]: (state) => {
      state.status = "loading";
    },
    [fetchData.rejected]: (state, action) => {
      state.status = "Failed";
      state.error = action.error.message;
    },
  },

  // extraReducers: (builder) => {
  //   builder
  //     .addCase(fetchData.pending, (state) => {
  //       state.status = "loading";
  //     })
  //     .addCase(fetchData.fulfilled, (state, action) => {
  //       state.status = "succeeded";
  //       state.data = action.payload;
  //     })
  //     .addCase(fetchData.rejected, (state, action) => {
  //       state.status = "failed";
  //       state.error = action.error.message;
  //     });
  // },
});

export default apiSlice.reducer;
