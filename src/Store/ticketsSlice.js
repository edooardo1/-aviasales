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
  reducers: {
    fetchTicketsStart(state) {
      return {
        ...state,
        loading: true,
        error: null,
      };
    },
    fetchTicketsSuccess(state, action) {
      return {
        ...state,
        loading: false,
        tickets: action.payload,
      };
    },
    fetchTicketsFailure(state, action) {
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    },
  },
});

export const { fetchTicketsStart, fetchTicketsSuccess, fetchTicketsFailure } =
  ticketsSlice.actions;

export const fetchTickets = () => async (dispatch) => {
  try {
    dispatch(fetchTicketsStart());

    const searchRes = await axios.get(
      "https://aviasales-test-api.kata.academy/search",
    );
    const { searchId } = searchRes.data;

    const ticketsRes = await axios.get(
      `https://aviasales-test-api.kata.academy/tickets?searchId=${searchId}`,
    );
    dispatch(fetchTicketsSuccess(ticketsRes.data.tickets));
  } catch (error) {
    dispatch(fetchTicketsFailure(error.message));
  }
};

export const ticketsReducer = ticketsSlice.reducer;
