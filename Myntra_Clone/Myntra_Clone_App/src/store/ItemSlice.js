import { createSlice } from "@reduxjs/toolkit";


const ItemSlice = createSlice({
    name: "items",
    initialState: [],
    reducers: {
        addInitialItems: (state,actions) => {
            return actions.payload;

        },
    },
});

export default ItemSlice;
export const itemActions = ItemSlice.actions;
