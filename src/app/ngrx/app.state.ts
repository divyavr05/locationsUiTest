import { Countries } from './models/countries.model';
import { Regions } from './models/regions.model';
export interface AppState {
	readonly regions: Regions[];
	readonly countries: Countries[];
}