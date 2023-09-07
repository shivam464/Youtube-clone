// slices/apiSlice.js

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  data: [],
  status: "idle",
  error: null,
};

export const fetchData = createAsyncThunk("fetchApiData", async () => {
  try {
    const response = await axios.get(
      "https://youtube138.p.rapidapi.com/home/",
      {
        params: { hl: "en", gl: "US" },
        headers: {
          "X-RapidAPI-Key":
            "23fa5e51a6msh9bd7d96ed683d67p13a38cjsnc9a06beffd4e",
          "X-RapidAPI-Host": "youtube138.p.rapidapi.com",
        },
      }
    );
    console.log("response", response.data);
    return response.data;
  } catch (error) {
    throw error;
  }
});

const apiSlice = createSlice({
  name: "api",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchData.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload;
      })
      .addCase(fetchData.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default apiSlice.reducer;
