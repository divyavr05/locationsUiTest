import { getCountries } from './ngrx/selectors/countries-selector';
import { Regions } from './ngrx/models/regions.model';
import { AppState } from './ngrx/app.state';
import { Component } from '@angular/core';
import { CountriesService } from './service/countries.service';
import { Country } from './country-details/country';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Countries } from './ngrx/models/countries.model';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html'
})
export class AppComponent {
	title = 'geolocation';
	regions: Observable<Regions[]>;
	countryList = [];
	selctedCountry: Country = null;
	showDetails = false;
	selectedRegions = '';
	loadedData:Array<Countries>=[];
	constructor(
		private countriesService: CountriesService,
		private store: Store<AppState>
	) {
		this.regions = this.store.select(state => state.regions);
		this.store.select(getCountries).subscribe((data) => {
			this.loadedData=data;
			this.countryList = data.filter((data) => data.region === this.selectedRegions);
		});
	}

	onRegionChange(value) {
		this.selectedRegions = value;
		const isExist = this.loadedData.filter((data) => data.region === value);
		if (isExist.length) {
			this.countryList=isExist;
		}else{
			this.countriesService.getCountriesByRegion(value).subscribe((res: any) => {
				this.store.dispatch({ type: 'LOAD_DATA', payload: res })
			});
		}
	}

	onCountryChange(value) {
		if (value) {
			this.selctedCountry = this.countryList.find(x => x.name === value);
		} else {
			this.selctedCountry = null;
		}
	}
}
