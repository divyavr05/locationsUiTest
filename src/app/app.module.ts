import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DropdownListComponent } from './dropdown-list/dropdown-list.component';
import { locationReducer } from './location';
import { HttpClientModule } from '@angular/common/http';
import { CountryDetailsComponent } from './country-details/country-details.component';
import { StoreModule } from '@ngrx/store';
import { RegionsReducer } from './ngrx/reducer/regions.reducer';
import { CountriesReducer } from './ngrx/reducer/countries.reducer';

@NgModule({
  declarations: [
    AppComponent,
    DropdownListComponent,
    CountryDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot({
      regions: RegionsReducer,
      countries:CountriesReducer
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
