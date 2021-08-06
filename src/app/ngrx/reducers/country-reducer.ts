import {
  createFeatureSelector,
  createSelector,
  createReducer,
  on,
} from '@ngrx/store';
import { Country } from 'src/model/country';

import {
  fetchCountries,
  fetchCountriesSuccess,
  fetchCountiresFailure,
  fetchCountiriesByRegion,
  fetchCountiriesByRegionSuccess,
  fetchCountiriesByRegionFailure,
  fetchCountryDetailSuccess,
  fetchCountryDetailFailure,
} from '../actions/country.actions';

export interface CountryState {
  countries: Array<Country>;
  country: Country;
}

const initialState: Array<Country> = [];

export const selectCountryState =
  createFeatureSelector<CountryState>('appState');

export const getCountries = createSelector(
  selectCountryState,
  (state: CountryState) => state.countries
);

export const getCountryByRegion = createSelector(
  selectCountryState,
  (state: CountryState) => state.countries
);

export const getCountry = createSelector(
  selectCountryState,
  (state: CountryState) => state.country
);

export const countryReducer = createReducer(
  initialState,
  on(fetchCountriesSuccess, (state, { payload }) => ({
    ...state,
    countries: payload.countires,
  })),
  on(fetchCountiresFailure, (state, { payload }) => ({
    ...state,
    err: payload.error,
    countries: [],
  })),
  on(fetchCountiriesByRegionSuccess, (state, { payload }) => ({
    ...state,
    countries: payload.countries,
  })),
  on(fetchCountiriesByRegionFailure, (state, { payload }) => ({
    ...state,
    err: payload.error,
    countires: [],
  })),
  on(fetchCountryDetailSuccess, (state, { payload }) => ({
    ...state,
    country: payload.country,
  })),
  on(fetchCountryDetailFailure, (state, { payload }) => ({
    ...state,
    err: payload.error,
    country: [],
  }))
);
