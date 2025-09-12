import { storeCategories } from './storeCategories';
import { occasions } from './occasions';
import { countries, countriesRegions, usStates } from './countryRegion';
import { themes } from './themes';

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

  getMostCommonCountries: () => {
    return ['Germany', 'United States', 'United Kingdom', 'France'];
  },

  getCountries: () => {
    return countries;
  },

  getUsStates: () => {
    return usStates;
  },

  getThemes: () => {
    return themes;
  },

  getPriorityThemes: () => {
    return ['Animals', 'Architecture', 'Art', 'Cities & Towns', 'Flowers & Plants', 'Greetings', 'Holiday', 'Hotel & Restaurant', 'Landscapes', 'Nautical', 'Tourism'];
  },

  getUnitsOfSale: () => {
    return ['Single Unit', 'Unit of Two', 'Postcard Lot'];
  },

  getTypes: () => {
    return ['Printed (Lithograph)', 'Real Photo (RPPC)', 'Linen Postcard', 'Chrome Postcard'];
  },

  getFeatures: () => {
    return ['Embossed', 'Stamped', 'Hold-to-Light', 'Hand Colored Print'];
  },

  getMaterials: () => {
    return ['Cardboard', 'Fabric', 'Leather', 'Metal', 'Paper', 'Plastic', 'Silk', 'Wood'];
  },

  getContinents: () => {
    return ['North America', 'South America', 'Europe', 'Asia', 'Africa', 'Australia', 'Antarctica'];
  },

  getCommonPublishers: () => {
    return ['Colourpicture', 'Curt Teich', 'EC Kropp', 'HS Crocker', 'J Salmon', 'Mike Roberts Studio', 'Raphael Tuck & Sons', 'Tichnor Brothers', 'Dexter Press'];
  },
}

export default DropdownData;
