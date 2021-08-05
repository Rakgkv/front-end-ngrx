import { Component } from '@angular/core';
import { AppState, selectSearchTerm } from './ngrx/reducers';
import { select, State } from '@ngrx/store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.scss' ],
})
export class AppComponent {

  constructor(private state: State<AppState>) {
  }

  public searchTerm$ = this.state.pipe(select(selectSearchTerm));
}
