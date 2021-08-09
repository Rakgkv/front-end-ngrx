import {
    createFeatureSelector,
    createSelector,
    createReducer,
    on,
  } from '@ngrx/store';
  import { Country } from 'src/model/country';
import { fetchCountryDetailFailure, fetchCountryDetailSuccess } from './country-details.action';
  
  
  export interface CountryDetailsState {
    country: Country;
  }
  
  const initialState: Array<Country> = [];
  
  export const selectCountryDetails =
    createFeatureSelector<CountryDetailsState>('countryDetailsState');
  
  export const getCountryDetails = createSelector(
    selectCountryDetails,
    (state: CountryDetailsState) => state.country
  );
  
  export const countryDetailsReducer = createReducer(
    initialState,
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
  