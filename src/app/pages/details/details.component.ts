import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { CountryState } from 'src/app/ngrx/reducers/country-reducer';
import { Country } from 'src/model/country';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
export class DetailsComponent implements OnInit {
  countryDetails$: Observable<Country> = this.store.select('country');
  constructor(private store: Store<CountryState>) {}

  ngOnInit(): void {
    this.countryDetails$ = this.store.select('country');
  }
}
