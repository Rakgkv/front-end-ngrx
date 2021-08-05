import { createAction, props } from '@ngrx/store';

export const search = createAction('[App Component] Search', props<{ searchTerm: string }>());
export const getData = createAction('[App Component] Get Data', props<{ searchTerm: string }>());
export const getDataSuccess = createAction('[App Component] Get Data Success', props<{ data: any[] }>());
export const reset = createAction('[App Component] Reset');
