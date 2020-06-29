import { Countries } from './../models/countries.model';
import { Action } from '@ngrx/store';

export const LOAD_DATA = 'LOAD_DATA';

const initialState: Array<Countries> = []
export function CountriesReducer(state: Countries[] = initialState, action) {
    switch (action.type) {
        case LOAD_DATA:
            return state.concat(action.payload);
        default:
            return state;
    }
}