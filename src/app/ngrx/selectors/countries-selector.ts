import { AppState } from '../app.state'
import { createSelector } from '@ngrx/store';

export const getCountries = createSelector(
    (state: AppState) => state.countries,
    (countries) => countries
);