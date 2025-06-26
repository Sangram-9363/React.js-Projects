import { configureStore } from "@reduxjs/toolkit";
import ItemSlice from "./ItemSlice";
import FeachingStatusSlice from "./FetchingStatusSlice";
import BagSlice from "./BagSlice.js";

const myntraStore = configureStore({
  reducer: {
    items: ItemSlice.reducer,
    fetchStatus: FeachingStatusSlice.reducer,
    bag: BagSlice.reducer,
  },
});

export default myntraStore;
