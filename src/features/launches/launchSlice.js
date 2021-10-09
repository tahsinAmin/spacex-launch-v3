import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios'

export const fetchAsyncLaunches = createAsyncThunk(
  "launches/fetchAsyncLaunches",
  async () => {

    const response = await axios.get('https://api.spacexdata.com/v3/launches?limit=10');
    return response.data;
  }
);

const initialState = {
   launches: []
}

const launchSlice = createSlice({
  name: "launches",
  initialState,
  reducers: {
    addLaunches: (state, { payload }) => {
      state.launches = payload;
    },
  },
  extraReducers: {
    [fetchAsyncLaunches.pending]: () => {
      console.log("Pending");
    },
    [fetchAsyncLaunches.fulfilled]: (state, { payload }) => {
       console.log("Fetched Successfully!");
       return { ...state, launches:payload }
    },
    [fetchAsyncLaunches.rejected]:() => {
       console.log("Rejected!");
    },
  }
});

export const { addLaunches } = launchSlice.actions;
export const getAllLaunches = (state) => state.launches.launches;
export default launchSlice.reducer;