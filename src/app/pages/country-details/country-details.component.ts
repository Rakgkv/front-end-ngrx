import { Component, OnInit } from '@angular/core';
import { CountryService } from 'src/app/service/country.service';
import { MatCardModule } from '@angular/material/card';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { CountryState } from 'src/app/ngrx/reducers/country-reducer';
import { Observable } from 'rxjs';
import { Country } from 'src/model/country';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-country-details',
  templateUrl: './country-details.component.html',
  styleUrls: ['./country-details.component.scss'],
})
export class CountryDetailsComponent implements OnInit {

  displayedColumns: string[] = [
    'flag',
    'name',
    'population',
    'capital',
    'area'
  ];

  // countryDetails$:Observable<any>
  countryDetails$: Observable<Country> = this.store.select('country');
  dataSource: any;
  country: any
  constructor(
    private _http: CountryService,
    private route: ActivatedRoute,
    private store: Store<CountryState>
  ) {}

  ngOnInit(): void {
    this.countryDetails$= this.store.select('country');
    console.log("country" , this.countryDetails$ )
    this.countryDetails$.subscribe((data: any) => {
     console.log(data)
    this.dataSource = new MatTableDataSource(data);
    });
   
  }
}

