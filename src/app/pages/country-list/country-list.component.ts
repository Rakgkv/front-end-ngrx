import { AfterViewInit, Component, ViewChild, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { CountryService } from 'src/app/service/country.service';
import { Country } from 'src/model/country';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort, Sort } from '@angular/material/sort';
import { Store } from '@ngrx/store';
import { fetchCountiresFailure, fetchCountries, fetchCountriesSuccess, fetchCountiriesByRegion, fetchCountiriesByRegionSuccess ,
  fetchCountryDetail, fetchCountryDetailSuccess, fetchCountryDetailFailure, fetchCountiriesByRegionFailure } from '../../ngrx/actions/country.actions';
import { CountryState } from 'src/app/ngrx/reducers/country-reducer';
import { Router } from '@angular/router';
import { takeUntil } from 'rxjs/operators';

interface Region {
  id: string;
  viewValue: string;
}

@Component({
  selector: 'app-country-list',
  templateUrl: './country-list.component.html',
  styleUrls: ['./country-list.component.scss'],
})


export class CountryListComponent implements OnInit {
  displayedColumns: string[] = [
    'flag',
    'name',
    'population',
    'region',
    'capital',
    'borders',
  ];

  regions: Region[] =[
            { 'id': 'europe' , 'viewValue': 'Europe' }, 
            { 'id': 'asia' , 'viewValue': 'Asia' }, 
            { 'id': 'africa' ,'viewValue': 'Africa' },
            { 'id': 'americas' ,'viewValue': 'Americas' },
            { 'id': 'oceania' ,'viewValue': 'Oceania' },
          ]

  countrySource$: Observable<Country[]> = this.store.select('countries');
  dataSource: any;
  
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  destroy$: any;

  constructor(
    private store: Store<CountryState>,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.countrySource$ = this.store.select('countries');
    // console.log("list" ,  this.countrySource$ )
    this.countrySource$.subscribe((data: any) => {
      console.log( "list data" ,data.countries)
    this.dataSource = new MatTableDataSource(data.countries);
    setTimeout(() => {
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
    });
      this.dataSource.filterPredicate = function (
        data: any,
        name: string
      ): boolean {
        return (
          data.name.toLowerCase().includes(name)
        );
      };
    });
  }

  onRegionChange(region : string) {
      this.store.dispatch(fetchCountiriesByRegion({
        payload: { region: region}
      }));
      this.countrySource$ = this.store.select('countries');
  }
    
  applyFilter(event: Event) {
    let filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  getCountryDetails(country: Country) {
    this.router.navigate([`./details/${country.name}`]);
    this.store.dispatch(fetchCountryDetail({
      payload: { countryName: country.name}
    }));
}
}
