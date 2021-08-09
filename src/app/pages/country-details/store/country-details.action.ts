import { createAction, props } from "@ngrx/store";
import { Country } from "src/model/country";

export const fetchCountryDetail = createAction(
    '[Country] Fetch Country Details',
    props<{
      payload: {
        countryName: string;
      };
    }>()
  );
  
  export const fetchCountryDetailSuccess = createAction(
    '[Country] Fetch Country Details Success',
    props<{ payload: { country: Country } }>()
  );
  
  export const fetchCountryDetailFailure = createAction(
    '[Country] Fetch Country Details Failure',
    props<{ payload: { error: Error } }>()
  );
  
  