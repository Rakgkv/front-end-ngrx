import { createReducer, on } from '@ngrx/store';
import { reset, search } from '../actions/app.actions';

export interface SearchState {
  searchTerm: string;
}

export const initialState = {
  searchTerm: 'frontend-task',
};

const _searchReducer = createReducer(
  initialState,
  on(search, (state, { searchTerm }) => {
    return { ...state, searchTerm };
  }),
  on(reset, (state) => initialState),
);

export function searchReducer(state: SearchState | undefined, action: any): SearchState {
  return _searchReducer(state, action);
}
