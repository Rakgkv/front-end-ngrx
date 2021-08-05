import { TestBed } from '@angular/core/testing';
import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { CountryService } from './country.service';
import { Country } from 'src/model/country';

describe('CountriesService', () => {

  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;
  let mockCountriesService: CountryService;

  beforeEach(() => {

    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [CountryService]

    });
  
    httpClient = TestBed.inject(HttpClient);
    httpTestingController = TestBed.inject(HttpTestingController);
    mockCountriesService = TestBed.inject(CountryService);
  });

  const expCountries = <Country[]><unknown>[
    {
      name: 'India',
      capital: "New Delhi",
      flag: "https://restcountries.eu/data/ind.svg",
    },
    {
      name: 'Indonesia',
      capital: "Jakarta",
      flag: "https://restcountries.eu/data/idn.svg",
      currencies: [
        {
          "code": "BYN",
          "name": "New Belarusian ruble",
          "symbol": "Br"
        },
        {
          "code": "BYR",
          "name": "Old Belarusian ruble",
          "symbol": "Br"
        }
      ]
    }
  ];

  let queryKey = 'Europe';

  it('Should call the getCountries api and return the dummy countries', () => {
    mockCountriesService.getCountry().subscribe(
      users => {
        expect(users.length).toBe(2);
        expect(users).toEqual(expCountries, 'should return dummy countries'), fail;
      });

    const req = httpTestingController.expectOne(`${'https://restcountries.eu/rest/v2/all'}`);
    expect(req.request.method).toEqual('GET');
  });

});
