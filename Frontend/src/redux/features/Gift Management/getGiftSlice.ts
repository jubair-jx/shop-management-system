import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface FiltersState {
  filters: Record<string, string>; // Object to store filter key-value pairs
}

interface SetFilterPayload {
  key: string;
  value: string;
}

const initialState: FiltersState = {
  filters: {},
};

const filtersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    setFilter(state, action: PayloadAction<SetFilterPayload>) {
      const { key, value } = action.payload;
      state.filters[key] = value;
    },
    clearFilter(state, action: PayloadAction<string>) {
      const key = action.payload;
      delete state.filters[key];
    },
    clearAllFilters(state) {
      state.filters = {};
    },
  },
});

export const { setFilter, clearFilter, clearAllFilters } = filtersSlice.actions;

export default filtersSlice.reducer;
