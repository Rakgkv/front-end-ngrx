import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Country } from 'src/model/country';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  private allCountriesUrl = 'https://restcountries.eu/rest/v2/all';
  private countryDetailUrl = `https://restcountries.eu/rest/v2/name`;
  private CountryByRegionUrl = ` https://restcountries.eu/rest/v2/region`;

  constructor( private http:HttpClient) {

   }

  getCountry(): Observable<Country[]> {
    return this.http.get<Country[]>(this.allCountriesUrl)
  }

  getCountriesByRegion(region: string): Observable<Country[]> {
    return this.http.get<Country[]>(`${this.CountryByRegionUrl}/${region}`)
  }


  getCountryDetails(value:any): Observable<Country> {
    return this.http.get<Country>(`${this.countryDetailUrl}/${value}`)
  }

  
}
