import { Action } from '@ngrx/store';
import { CountriesService } from './../../service/countries.service';
import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType, Effect } from '@ngrx/effects';
import {  map, mergeMap, tap, switchMap } from 'rxjs/operators';

@Injectable()
export class countriesEffects {

    constructor(private actions: Actions, private countriesService: CountriesService) { }

    @Effect()
    loadData = this.actions.pipe(
        ofType("LoadData"),
        switchMap(() => {
        return this.countriesService.getCountriesByRegion('').pipe(
            map(data =>data)
        );
        })
    );
}