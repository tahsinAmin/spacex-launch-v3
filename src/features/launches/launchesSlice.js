import {createSlice} from '@reduxjs/toolkit'
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
});

export const { addLaunches } = launchSlice.actions;
export const getAlllaunches = (state) => state.launches.launches;
export default launchSlice.reducer;