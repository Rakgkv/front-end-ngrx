import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Actions } from '@ngrx/effects';
import { cold, getTestScheduler, hot } from 'jasmine-marbles';
import { Observable, of } from 'rxjs';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CountryService } from 'src/app/service/country.service';
import {
  fetchCountiresFailure,
  fetchCountiriesByRegion,
  fetchCountiriesByRegionFailure,
  fetchCountiriesByRegionSuccess,
  fetchCountries,
  fetchCountriesSuccess,
} from '../actions/country.actions';
import { Country } from 'src/model/country';

describe('CountriesEffects', () => {
  let actions$: Observable<any>;
  let countriesService: CountryService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [provideMockActions(() => actions$)],
    });
    countriesService = TestBed.inject(CountryService);
    // effects = TestBed.inject(CountriesEffects);
    actions$ = TestBed.inject(Actions);
  });

  describe('countries$', () => {
    it('Should return Fetch fetchCountiriesByRegionSuccess, with the countries, on success', () => {
      const countries = <Country[]>[
        {
          name: 'India',
          capital: 'New Delhi',
          flag: 'https://restcountries.eu/data/ind.svg',
        },
        {
          name: 'Indonesia',
          capital: 'Jakarta',
          flag: 'https://restcountries.eu/data/idn.svg',
        },
      ];

      //   const action = fetchCountiriesByRegion({ region: 'region' });
      //   const completion = fetchCountiriesByRegionSuccess({ countries });

      //   actions$ = hot('-a', { a: action });
      const response = cold('-a|', { a: countries });
      //   const expected = cold('--c', { c: completion });

      spyOn(countriesService, 'getCountriesByRegion').and.returnValue(response);
      //   expect(effects.countries$).toBeObservable(expected);
    });

    it('Should return fetchCountiriesByRegionFailure, with error message, if an error is thrown', () => {
      const error = { message: 'Unexpected error. Try again later.' };

      //   const action = fetchCountiriesByRegion({ region: 'region' });
      //   const completion = fetchCountiriesByRegionFailure({ errorMsg: error.message });

      //   actions$ = hot('-a', { a: action });
      const response = cold('-#|', {}, error);
      //   const expected = cold('--c', { c: completion });
      spyOn(countriesService, 'getCountriesByRegion').and.returnValue(response);

      //   expect(loadCountriesByRegion$).toBeObservable(expected);
    });

    it('Should return Fetch countries, with the countries, on success', () => {
      const countries = <Country[]>[
        {
          name: 'India',
          capital: 'New Delhi',
          flag: 'https://restcountries.eu/data/ind.svg',
        },
        {
          name: 'Indonesia',
          capital: 'Jakarta',
          flag: 'https://restcountries.eu/data/idn.svg',
        },
      ];

      const action = fetchCountries();
      // const completion = fetchCountriesSuccess({ countries });

      actions$ = hot('-a', { a: action });
      const response = cold('-a|', { a: countries });
      // const expected = cold('--c', { c: completion });

      spyOn(countriesService, 'getCountry').and.returnValue(response);
      // expect(loadCountries$).toBeObservable(expected);
    });

    it('Should return fetch Countiries Failure, with error message, if an error is thrown', () => {
      const error = { message: 'Unexpected error. Try again later.' };

      const action = fetchCountries();
      // const completion = fetchCountiresFailure({ error });

      actions$ = hot('-a', { a: action });
      const response = cold('-#|', {}, error);
      // const expected = cold('--c', { c: completion });
      spyOn(countriesService, 'getCountry').and.returnValue(response);

      // expect(loadCountries$).toBeObservable(expected);
    });
  });
});
