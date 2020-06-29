import { Component, Input, OnInit } from '@angular/core';
import { Country } from './country';

@Component({
  selector: 'app-country-details',
  templateUrl: './country-details.component.html',
})
export class CountryDetailsComponent implements OnInit {
 @Input() selctedCountry: Country;
  constructor() { }

  ngOnInit(): void {
  }

}
