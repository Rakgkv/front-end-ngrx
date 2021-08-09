import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, mergeMap, catchError, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { CountryService } from 'src/app/service/country.service';
import { fetchCountryDetail, fetchCountryDetailFailure, fetchCountryDetailSuccess } from './country-details.action';

@Injectable()
export class CountryDetailsEffects {
  loadselectedCountry$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fetchCountryDetail),
      switchMap((action) =>
        this.countryService.getCountryDetails(action.payload.countryName)
      ),
      map((res) =>
        fetchCountryDetailSuccess({
          payload: {
            country: res,
          },
        })
      ),
      catchError((error) => {
        return of(
          fetchCountryDetailFailure({
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
