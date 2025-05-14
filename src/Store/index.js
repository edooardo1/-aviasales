import { configureStore } from "@reduxjs/toolkit";

import filtersReducer from "./filtersSlice";
import sortReducer from "./sortSlice";

export default configureStore({
  reducer: {
    filters: filtersReducer,
    sort: sortReducer,
  },
});
