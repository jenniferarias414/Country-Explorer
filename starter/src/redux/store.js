import {configureStore} from '@reduxjs/toolkit';
import displayedCountryReducer from './slices/displayCountrySlice.js';

import potentialCountriesReducer from './slices/potentialCountriesSlice.js';


export default configureStore({
    reducer: {
        potentialCountries: potentialCountriesReducer,
        displayedCountry: displayedCountryReducer
    },
});