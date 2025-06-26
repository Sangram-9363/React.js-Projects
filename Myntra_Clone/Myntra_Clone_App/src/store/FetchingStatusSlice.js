import { createSlice } from "@reduxjs/toolkit";

const FeachingStatusSlice = createSlice({
    name: 'feachingStatus',
    initialState: {
        fetchDone: false,
        currentlyFeatching: false,
    },
    reducers: {
        MARKFEATCHDONE: (state) => {
            state.fetchDone = true
        },
        FEATCHINGSTARTED: (state) => {
            state.currentlyFeatching = true
        },
        FEATCHINGFINISHED: (state) => {
            state.currentlyFeatching = false
        }
    }
})

export default FeachingStatusSlice;
export const FeachingStatusActions = FeachingStatusSlice.actions