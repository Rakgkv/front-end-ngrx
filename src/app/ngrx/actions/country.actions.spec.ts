import {
  fetchCountiresFailure,
  fetchCountiriesByRegion,
  fetchCountiriesByRegionFailure,
  fetchCountiriesByRegionSuccess,
  fetchCountries,
  fetchCountriesSuccess,
  fetchCountryDetail,
  fetchCountryDetailFailure,
  fetchCountryDetailSuccess,
} from './country.actions';

describe('Countries API actions', () => {
  describe('Get Countries fetchCountries action', () => {
    it('Should return the Fetch Countries action', () => {
      expect(fetchCountries.type).toBe('[Country] Fetch Countries Success');
    });
  });

  describe('Get Countries Success action', () => {
    it('Should return the Fetch Countries Success action', () => {
      expect(fetchCountriesSuccess.type).toBe(
        '[Country] Fetch Countries Success'
      );
    });
  });
  

  describe('Get Countries Failure action', () => {
    it('Should return the Fetch Countries Failure action', () => {
      expect(fetchCountiresFailure.type).toBe(
        '[Countries] Get Countries Failure'
      );
    });
  });

  describe('Get Countries region  Fetch Countries region action', () => {
    it('Should return the Fetch Countries region', () => {
      expect(fetchCountiriesByRegion.type).toBe(
        '[Country] Fetch Countries region'
      );
    });
  });

  describe('Get Countries Fetch Countries region Success action', () => {
    it('Should return the Fetch Countries region Success action', () => {
      expect(fetchCountiriesByRegionSuccess.type).toBe(
        '[Country] Fetch Countries region Success'
      );
    });
  });

  describe('Get Countries Fetch Countries region failure action', () => {
    it('Should return the Fetch Countries region failure action', () => {
      expect(fetchCountiriesByRegionFailure.type).toBe(
        '[Country] Fetch Countries region Failure'
      );
    });
  });

  describe('Get Country details Fetch Country detail action', () => {
    it('Should return the Fetch Countries region', () => {
      expect(fetchCountryDetail.type).toBe('[Country] Fetch Country Details');
    });
  });

  describe('Get Country Fetch Country detail Success action', () => {
    it('Should return the Fetch Countries region Success action', () => {
      expect(fetchCountryDetailSuccess.type).toBe(
        '[Country] Fetch Country Details Success'
      );
    });
  });

  describe('Get Country Fetch Country detail action', () => {
    it('Should return the Fetch Countries region failure action', () => {
      expect(fetchCountryDetailFailure.type).toBe(
        '[Country] Fetch Country Details Failure'
      );
    });
  });
});
