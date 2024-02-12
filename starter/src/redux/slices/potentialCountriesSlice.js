import {createSlice} from '@reduxjs/toolkit';


export const potentialCountriesSlice = createSlice({
  name: "potentialCountries",
  initialState: {
    value: [
      {
        name: { common: "America" },
      },
    ],
  },
  reducers: {
    setPotentialCountries: (state, action) => {
      state.value = action.payload;
    },
    deletePotentialCountries: (state) => {
      state.value = null;
    },
  },
});

export const {setPotentialCountries, deletePotentialCountries} = potentialCountriesSlice.actions
// The createSlice method of “@reduxjs/toolkit” will take whatever reducers you add to the “reducers” property of its argument and turn them into an “actions”. You can then use these actions anywhere in your application to manipulate global state.

export const selectPotentials = (state) => {
    return state.potentialCountries.value
} //This function defines how to read the state of potentialCountries. You will use this function elsewhere in your react app to read from state.

export default potentialCountriesSlice.reducer;