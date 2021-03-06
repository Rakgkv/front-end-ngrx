import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, mergeMap, catchError, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';
import {
  fetchCountiresFailure,
  fetchCountries,
  fetchCountriesSuccess,
  fetchCountiriesByRegion,
  fetchCountiriesByRegionSuccess,
  fetchCountiriesByRegionFailure,
} from '../actions/country.actions';
import { CountryService } from 'src/app/service/country.service';

@Injectable()
export class CountryEffects {
  loadCountries$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fetchCountries),
      mergeMap(() => this.countryService.getCountry()),
      map((res) =>
        fetchCountriesSuccess({
          payload: {
            countires: res,
          },
        })
      ),
      catchError((error) => {
        return of(
          fetchCountiresFailure({
            payload: {
              error,
            },
          })
        );
      })
    )
  );

  loadCountriesByRegion$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fetchCountiriesByRegion),
      switchMap((action) =>
        this.countryService.getCountriesByRegion(action.payload.region)
      ),
      map((res) =>
        fetchCountiriesByRegionSuccess({
          payload: {
            countries: res,
          },
        })
      ),
      catchError((error) => {
        return of(
          fetchCountiriesByRegionFailure({
            payload: {
              error,
            },
          })
        );
      })
    )
  );

  constructor(
    private actions$: Actions,
    private countryService: CountryService
  ) {}
}
