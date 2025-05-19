import { configureStore } from "@reduxjs/toolkit";

import { ticketsReducer } from "./ticketsSlice";
import { filtersReducer } from "./filtersSlice";
import sortReducer from "./sortSlice";

const store = configureStore({
  reducer: {
    tickets: ticketsReducer,
    filters: filtersReducer,
    sort: sortReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
  devTools: true,
});

export default store;
