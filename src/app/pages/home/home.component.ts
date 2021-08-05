import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { fetchCountries} from '../../ngrx/actions/country.actions'


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private store: Store) { }

  ngOnInit(): void {
    this.getCountries();
  }

  getCountries(){
    this.store.dispatch(fetchCountries())
  }

}
