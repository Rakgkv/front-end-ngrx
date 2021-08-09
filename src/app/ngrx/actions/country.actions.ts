import { createAction, props } from '@ngrx/store';
import { Country } from 'src/model/country';

export const fetchCountries = createAction('[Country] Fetch Countries');
export const fetchCountriesSuccess = createAction(
  '[Country] Fetch Countries Success',
  props<{ payload: { countires: Country[] } }>()
);
export const fetchCountiresFailure = createAction(
  '[Country] Fetch Countries Failure',
  props<{ payload: { error: Error } }>()
);

export const fetchCountiriesByRegion = createAction(
  '[Country] Fetch Countries region',
  props<{
    payload: {
      region: string;
    };
  }>()
);

export const fetchCountiriesByRegionSuccess = createAction(
  '[Country] Fetch Countries region Success',
  props<{ payload: { countries: Country[] } }>()
);

export const fetchCountiriesByRegionFailure = createAction(
  '[Country] Fetch Countries region Failure',
  props<{ payload: { error: Error } }>()
);
