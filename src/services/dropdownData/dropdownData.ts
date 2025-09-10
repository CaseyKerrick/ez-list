import { storeCategories } from './storeCategories';
import { occasions } from './occasions';
import { countriesRegions } from './countryRegion';

const DropdownData = {
  getStoreCategories: () => {
    return storeCategories;
  },

  getOccasions: () => {
    return occasions;
  },

  getOccasionsPriority: () => {
    return ['Christmas', 'Easter', 'New Year', 'Thanksgiving', `St. Patrick's Day`, `Valentine's Day`];
  },

  getCountriesRegionsOfManufacture: () => {
    return countriesRegions;
  },

  getCountriesRegionsOfManufacturePriority: () => {
    return ['Germany', 'United States', 'United Kingdom', 'France'];
  },
}

export default DropdownData;
