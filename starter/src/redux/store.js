import {configureStore} from '@reduxjs/toolkit';

import potentialCountriesReducer from './slices/potentialCountriesSlice.js';


export default configureStore({
    reducer: {
        potentialCountries: potentialCountriesReducer
    },
});