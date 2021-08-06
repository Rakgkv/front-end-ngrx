import { createSelector } from '@ngrx/store';
import { SearchState } from './search-reducer';

export interface AppState {
  search: SearchState;
}

export const selectSearchState = (state: AppState) => state.search;

export const selectSearchTerm = createSelector(
  selectSearchState,
  (state: SearchState) => state.searchTerm
);
