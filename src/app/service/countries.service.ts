import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {
  apiURL = 'https://restcountries.eu/rest/v2/region';

  constructor(private httpClient: HttpClient) { }

  public getCountriesByRegion(region: string) {
    return this.httpClient.get(`${this.apiURL}/${region}`);
  }
}
