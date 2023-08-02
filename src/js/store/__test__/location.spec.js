import locationsInstance, { Locations } from '../locations';
import { formatDate } from '../../helpers/date';
import api, { Api } from '../../services/apiService';

const countries = [{ code: 'RUS', name: 'Russia' }];
const cities = [{ country_code: 'RUS', name: 'Moscow', code: 'MSK'}];

describe('Location store tests', () => {
  beforeEach(() => {
    locationsInstance.countries = locationsInstance.serializeCountries(countries);
  })

  it('Check that locationInstance is instance of Locations class', () => {
    expect(locationsInstance).toBeInstanceOf(Locations);
  });
  it('Check Locations instance create', () => {
    const instance = new Locations(api, { formatDate });
    expect(instance.countries).toBe(null);
    expect(instance.shortCitiesList).toEqual(null);
    expect(instance.formatDate).toEqual(formatDate);
  })
  it('Check correct countries serialize', () => {
    const res = locationsInstance.serializeCountries(countries);
    const expectedData = {
      RUS: { code: 'RUS', name: 'Russia' }
    };
    expect(res).toEqual(expectedData);
  })
  it('Check countries serialize with incorrect data', () => {
    const res = locationsInstance.serializeCountries(null);
    const expectedData = {};
    expect(res).toEqual(expectedData);
  })
  it('Check correct cities serialize', () => {
    const res = locationsInstance.serializeCities(cities);
    const expectedData = {
      MSK: { country_code: 'RUS', name: 'Moscow', code: 'MSK', country_name: 'Russia', full_name: 'Moscow,Russia'}
    };
    expect(res).toEqual(expectedData);
  })
});
