import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios'

export const fetchAsyncLaunches = createAsyncThunk(
  "launches/fetchAsyncLaunches",
  async () => {
    const response = await axios.get('https://api.spacexdata.com/v3/launches?limit=50&offset=50');
    return response.data.sort((a, b) => parseFloat(b.launch_year) - parseFloat(a.launch_year));
  }
);

export const fetchAsyncRocket = createAsyncThunk(
  "launches/fetchAsyncRocket",
  async (term) => {
    let response = await axios.get('https://api.spacexdata.com/v3/launches?limit=50&offset=50');

    return response.data.filter((i) => {
      return i.rocket.rocket_name.match(term);
    });
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
    [fetchAsyncRocket.fulfilled]: (state, { payload }) => {
      console.log("fetchAsyncRocket Fetched Successfully!");
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