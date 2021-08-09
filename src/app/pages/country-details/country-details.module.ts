import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountryListComponent } from '../country-list/country-list.component';
import { MatTableModule } from '@angular/material/table';
import { CountryDetailsComponent } from './country-details.component';
import { CountryDetailsRoutingModule } from './country-details.routing.module';
import { MatCardModule } from '@angular/material/card';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { countryDetailsReducer } from './store/country-details.reducer';
import { CountryDetailsEffects } from './store/country-details.effects';



@NgModule({
  declarations: [ CountryDetailsComponent ],
  imports: [
    CommonModule,
    CountryDetailsRoutingModule,
    MatTableModule,
    MatCardModule,
    StoreModule.forFeature('countryDetailsState', countryDetailsReducer),
    EffectsModule.forFeature([ CountryDetailsEffects ]),
  ]
})
export class CountryDetailsModule { }
