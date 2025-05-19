import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  tickets: [],
  loading: false,
  error: null,
};

const ticketsSlice = createSlice({
  name: "tickets",
  initialState,

  /* eslint-disable no-param-reassign */
  reducers: {
    fetchTicketsStart(state) {
      state.loading = true;
      state.error = null;
    },
    fetchTicketsSuccess(state, action) {
      state.loading = false;
      state.tickets = action.payload;
    },
    fetchTicketsFailure(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
  },
  /* eslint-enable no-param-reassign */
});

export const { fetchTicketsStart, fetchTicketsSuccess, fetchTicketsFailure } =
  ticketsSlice.actions;

export const fetchTickets = () => async (dispatch) => {
  dispatch(fetchTicketsStart());

  try {
    const { data } = await axios.get(
      "https://aviasales-test-api.kata.academy/search",
    );
    const { searchId } = data;

    let stop = false;
    let allTickets = [];

    /* eslint-disable no-await-in-loop */
    while (!stop) {
      try {
        const res = await axios.get(
          `https://aviasales-test-api.kata.academy/tickets?searchId=${searchId}`,
        );
        allTickets = [...allTickets, ...res.data.tickets];
        stop = res.data.stop;
      } catch (err) {
        if (err.response?.status !== 500) {
          dispatch(fetchTicketsFailure(err.message));
          return;
        }
      }
    }
    /* eslint-enable no-await-in-loop */

    dispatch(fetchTicketsSuccess(allTickets));
  } catch (error) {
    dispatch(fetchTicketsFailure(error.message));
  }
};

export const ticketsReducer = ticketsSlice.reducer;
