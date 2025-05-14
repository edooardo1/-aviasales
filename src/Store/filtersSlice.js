import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  all: true,
  noTransfers: true,
  oneTransfer: true,
  twoTransfers: true,
  threeTransfers: true,
};

const filtersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    toggleFilter(state, action) {
      const filter = action.payload;

      if (filter === "all") {
        const newValue = !state.all;
        return Object.fromEntries(
          Object.keys(state).map((key) => [key, newValue]),
        );
      }

      const updatedState = {
        ...state,
        [filter]: !state[filter],
      };

      const allFilters = Object.entries(updatedState).filter(
        ([key]) => key !== "all",
      );
      const allChecked = allFilters.every(([, value]) => value === true);

      return {
        ...updatedState,
        all: allChecked,
      };
    },
  },
});

export const { toggleFilter } = filtersSlice.actions;
export default filtersSlice.reducer;
