import { Regions } from './../models/regions.model';
import { Action } from '@ngrx/store';

export const ADD_REGION = 'ADD_REGION';

const initialState: Array<Regions> = [{
    name: 'Asia',
    value: 'asia'
}, {
    name: 'Europe',
    value: 'europe'
}]
export function RegionsReducer(state: Regions[] = initialState, action) {
    switch (action.type) {
        case ADD_REGION:
            return [...state, action.payload];
        default:
            return state;
    }
}