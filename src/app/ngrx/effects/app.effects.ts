import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY, of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { getData, getDataSuccess } from '../actions/app.actions';

@Injectable()
export class AppEffects {

  loadData$ = createEffect(() => this.actions$.pipe(
    ofType(getData),
    switchMap(({ searchTerm }) => of([])
      .pipe(
        map(data => getDataSuccess({ data })),
        catchError(() => EMPTY),
      )),
    ),
  );

  constructor(private actions$: Actions) {
  }
}
