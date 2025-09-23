import React from 'react';
import Radio from './components/base/Radio/Radio';
import TextField from './components/base/TextField/TextField';
import SearchDropdown from './components/base/SearchDropdown/SearchDropdown';
import Checklist from './components/base/Checklist/Checklist';
import Toggle from './components/base/Toggle/Toggle';
import TextArea from './components/base/TextArea/TextArea';
import DisplayText from './components/base/DisplayText/DisplayText';
import DateTime from './components/base/DateTime/DateTime';
import DropdownData from './services/dropdownData/dropdownData';
import DescriptionData from './services/descriptionData/descriptionData';
import LocalStorage from './services/localStorage/localStorage';

export type FormEntry<T> = {
  value: T;
  set: Function;
  toggled: boolean;
  setToggled: Function;
  description: string;
  type: any;
  required: boolean;
  props: any;
  hidden?: boolean;
};

export type FormContextType = {
  templateType: FormEntry<string>;
  title: FormEntry<string>;
  customLabelSKU: FormEntry<string>;
  storeCategory1: FormEntry<string>;
  storeCategory2: FormEntry<string>;
  upc: FormEntry<string>;
  occasion: FormEntry<string>;
  city: FormEntry<string>;
  subject: FormEntry<string>;
  countryRegionOfManufacture: FormEntry<string>;
  country: FormEntry<string>;
  region: FormEntry<string>;
  theme: FormEntry<string>;
  unitOfSale: FormEntry<string>;
  postcardType: FormEntry<string>;
  originalOrLicensedReprint: FormEntry<string>;
  postageCondition: FormEntry<string>;
  era: FormEntry<string>;
  yearManufactured: FormEntry<string>;
  numberOfItemsInSet: FormEntry<string>;
  features: FormEntry<string[]>;
  material: FormEntry<string[]>;
  continent: FormEntry<string>;
  brandOrPublisher: FormEntry<string>;
  franchise: FormEntry<string>;
  occasion2: FormEntry<string>;
  character: FormEntry<string>;
  signed: FormEntry<boolean>;
  signedBy: FormEntry<string>;
  personalize: FormEntry<boolean>;
  personalizationInstructions: FormEntry<string>;
  artist: FormEntry<string>;
  featuredPerson: FormEntry<string>;
  size: FormEntry<string>;
  timePeriodManufactured: FormEntry<string>;
  californiaProp65Warning: FormEntry<string>;
  unitQuantity: FormEntry<string>;
  unitType: FormEntry<string>;
  condition: FormEntry<string>;
  conditionTypes: FormEntry<string[]>;
  conditionDescription: FormEntry<string>;
  description: FormEntry<string>;
  format: FormEntry<string>;
  price: FormEntry<string>;
  requireImmediatePayment: FormEntry<boolean>;
  quantity: FormEntry<string>;
  allowOffers: FormEntry<boolean>;
  paymentPolicy: FormEntry<string>;
  minimumOffer: FormEntry<string>;
  autoAccept: FormEntry<string>;
  scheduleListing: FormEntry<boolean>;
  scheduleListingDateTime: FormEntry<{
    date: string,
    time: string,
    amPm: string,
  }>;
  duration: FormEntry<string>;
  startingBid: FormEntry<string>;
  buyItNowPrice: FormEntry<string>;
  autoRelist: FormEntry<boolean>;
  shippingPolicy: FormEntry<string>;
  packageWeight: FormEntry<string>;
  packageDimensions: FormEntry<string>;
  irregularPackage: FormEntry<boolean>;
  itemLocationCountryRegion: FormEntry<string>;
  itemLocationZipCode: FormEntry<string>;
  itemLocationCityState: FormEntry<string>;
  productDocuments: FormEntry<boolean>;
  promoteListingGeneral: FormEntry<boolean>;
  adRate: FormEntry<string>;
  promoteListingPriority: FormEntry<boolean>;
  charity: FormEntry<boolean>;
};

export const defaultValues = {
  templateType: '',
  title: '',
  customLabelSKU: '',
  storeCategory1: '',
  storeCategory2: '',
  upc: '',
  occasion: '',
  city: '',
  subject: '',
  countryRegionOfManufacture: '',
  country: '',
  region: '',
  theme: '',
  unitOfSale: 'Single Unit',
  postcardType: '',
  originalOrLicensedReprint: 'Original',
  postageCondition: '',
  era: '',
  yearManufactured: '',
  numberOfItemsInSet: '',
  features: [],
  material: [],
  continent: '',
  brandOrPublisher: '',
  franchise: '',
  occasion2: '',
  character: '',
  signed: false,
  signedBy: '',
  personalize: false,
  personalizationInstructions: '',
  artist: '',
  featuredPerson: '',
  size: '7x5x1',
  timePeriodManufactured: '',
  californiaProp65Warning: '',
  unitQuantity: '',
  unitType: '',
  condition: 'Used',
  conditionTypes: [],
  conditionDescription: DescriptionData.getBaseConditionDescription(),
  description: DescriptionData.getDescription(),
  format: 'Buy It Now',
  price: '',
  requireImmediatePayment: true,
  quantity: '1',
  allowOffers: true,
  paymentPolicy: 'BIN Immediate Payment',
  minimumOffer: '',
  autoAccept: '',
  scheduleListing: false,
  scheduleListingDateTime: {
    date: '',
    time: '',
    amPm: 'AM',
  },
  duration: '7 Days',
  startingBid: '',
  buyItNowPrice: '',
  autoRelist: false,
  shippingPolicy: '',
  packageWeight: '1',
  packageDimensions: '7x5x1',
  irregularPackage: false,
  itemLocationCountryRegion: 'United States',
  itemLocationZipCode: '53228',
  itemLocationCityState: 'Milwaukee, Wisconsin',
  productDocuments: false,
  promoteListingGeneral: true,
  adRate: '3%',
  promoteListingPriority: false,
  charity: false,
};

export const defaultToggles = {
  templateType: true,
  title: true,
  customLabelSKU: true,
  storeCategory1: true,
  storeCategory2: true,
  upc: false,
  occasion: true,
  city: true,
  subject: false,
  countryRegionOfManufacture: true,
  country: true,
  region: true,
  theme: true,
  unitOfSale: false,
  postcardType: true,
  originalOrLicensedReprint: false,
  postageCondition: true,
  era: true,
  yearManufactured: true,
  numberOfItemsInSet: false,
  features: true,
  material: false,
  continent: false,
  brandOrPublisher: true,
  franchise: false,
  occasion2: false,
  character: false,
  signed: false,
  signedBy: false,
  personalize: false,
  personalizationInstructions: false,
  artist: true,
  featuredPerson: false,
  size: false,
  timePeriodManufactured: true,
  californiaProp65Warning: false,
  unitQuantity: false,
  unitType: false,
  condition: false,
  conditionTypes: true,
  conditionDescription: true,
  description: false,
  format: true,
  price: true,
  requireImmediatePayment: false,
  quantity: false,
  allowOffers: false,
  paymentPolicy: false,
  minimumOffer: false,
  autoAccept: false,
  scheduleListing: true,
  scheduleListingDateTime: true,
  duration: true,
  startingBid: true,
  buyItNowPrice: false,
  autoRelist: false,
  shippingPolicy: false,
  packageWeight: false,
  packageDimensions: false,
  irregularPackage: false,
  itemLocationCountryRegion: false,
  itemLocationZipCode: false,
  itemLocationCityState: false,
  productDocuments: false,
  promoteListingGeneral: false,
  adRate: false,
  promoteListingPriority: false,
  charity: false,
};

export const FormContext = React.createContext<FormContextType | null>(null);

const loadItem = (name: string): any => {
  return LocalStorage.getSavedValue('default_' + name) || defaultValues[name as keyof typeof defaultValues];
};

const loadToggle = (name: string): any => {
  return LocalStorage.getToggle(name);
};

export const FormContextProvider = ({ children }: any) => {
  const [templateType, setTemplateType] = React.useState(loadItem('templateType'));
  const [templateTypeToggle, setTemplateTypeToggle] = React.useState(loadToggle('templateType'));

  const [title, setTitle] = React.useState(loadItem('title'));
  const [titleToggle, setTitleToggle] = React.useState(loadToggle('title'));
  
  const [customLabelSKU, setCustomLabelSKU] = React.useState(loadItem('customLabelSKU'));
  const [customLabelSKUToggle, setCustomLabelSKUToggle] = React.useState(loadToggle('customLabelSKU'));

  const [storeCategory1, setStoreCategory1] = React.useState(loadItem('storeCategory1'));
  const [storeCategory1Toggle, setStoreCategory1Toggle] = React.useState(loadToggle('storeCategory1'));

  const [storeCategory2, setStoreCategory2] = React.useState(loadItem('storeCategory2'));
  const [storeCategory2Toggle, setStoreCategory2Toggle] = React.useState(loadToggle('storeCategory2'));

  const [upc, setUpc] = React.useState(loadItem('upc'));
  const [upcToggle, setUpcToggle] = React.useState(loadToggle('upc'));

  const [occasion, setOccasion] = React.useState(loadItem('occasion'));
  const [occasionToggle, setOccasionToggle] = React.useState(loadToggle('occasion'));

  const [city, setCity] = React.useState(loadItem('city'));
  const [cityToggle, setCityToggle] = React.useState(loadToggle('city'));

  const [subject, setSubject] = React.useState(loadItem('subject'))
  const [subjectToggle, setSubjectToggle] = React.useState(loadToggle('subject'));

  const [countryRegionOfManufacture, setCountryRegionOfManufacture] = React.useState(loadItem('countryRegionOfManufacture'));
  const [countryRegionOfManufactureToggle, setCountryRegionOfManufactureToggle] = React.useState(loadToggle('countryRegionOfManufacture'));

  const [country, setCountry] = React.useState(loadItem('country'));
  const [countryToggle, setCountryToggle] = React.useState(loadToggle('country'));

  const [region, setRegion] = React.useState(loadItem('region'));
  const [regionToggle, setRegionToggle] = React.useState(loadToggle('region'));

  const [theme, setTheme] = React.useState(loadItem('theme'));
  const [themeToggle, setThemeToggle] = React.useState(loadToggle('theme'));

  const [unitOfSale, setUnitOfSale] = React.useState(loadItem('unitOfSale'));
  const [unitOfSaleToggle, setUnitOfSaleToggle] = React.useState(loadToggle('unitOfSale'));

  const [postcardType, setPostcardType] = React.useState(loadItem('postcardType'));
  const [postcardTypeToggle, setPostcardTypeToggle] = React.useState(loadToggle('postcardType'));

  const [originalOrLicensedReprint, setOriginalOrLicensedReprint] = React.useState(loadItem('originalOrLicensedReprint'));
  const [originalOrLicensedReprintToggle, setOriginalOrLicensedReprintToggle] = React.useState(loadToggle('originalOrLicensedReprint'));

  const [postageCondition, setPostageCondition] = React.useState(loadItem('postageCondition'));
  const [postageConditionToggle, setPostageConditionToggle] = React.useState(loadToggle('postageCondition'));

  const [era, setEra] = React.useState(loadItem('era'));
  const [eraToggle, setEraToggle] = React.useState(loadToggle('era'));

  const [yearManufactured, setYearManufactured] = React.useState(loadItem('yearManufactured'));
  const [yearManufacturedToggle, setYearManufacturedToggle] = React.useState(loadToggle('yearManufactured'));

  const [numberOfItemsInSet, setNumberOfItemsInSet] = React.useState(loadItem('numberOfItemsInSet'));
  const [numberOfItemsInSetToggle, setNumberOfItemsInSetToggle] = React.useState(loadToggle('numberOfItemsInSet'));

  const [features, setFeatures] = React.useState(loadItem('features'));
  const [featuresToggle, setFeaturesToggle] = React.useState(loadToggle('features'));

  const [material, setMaterial] = React.useState(loadItem('material'));
  const [materialToggle, setMaterialToggle] = React.useState(loadToggle('material'));

  const [continent, setContinent] = React.useState(loadItem('continent'));
  const [continentToggle, setContinentToggle] = React.useState(loadToggle('continent'));

  const [brandOrPublisher, setBrandOrPublisher] = React.useState(loadItem('brandOrPublisher'));
  const [brandOrPublisherToggle, setBrandOrPublisherToggle] = React.useState(loadToggle('brandOrPublisher'));

  const [franchise, setFranchise] = React.useState(loadItem('franchise'));
  const [franchiseToggle, setFranchiseToggle] = React.useState(loadToggle('franchise'));

  const [occasion2, setOccasion2] = React.useState(loadItem('occasion2'));
  const [occasion2Toggle, setOccasion2Toggle] = React.useState(loadToggle('occasion2'));

  const [character, setCharacter] = React.useState(loadItem('character'));
  const [characterToggle, setCharacterToggle] = React.useState(loadToggle('character'));

  const [signed, setSigned] = React.useState(loadItem('signed'));
  const [signedToggle, setSignedToggle] = React.useState(loadToggle('signed'));

  const [signedBy, setSignedBy] = React.useState(loadItem('signedBy'));
  const [signedByToggle, setSignedByToggle] = React.useState(loadToggle('signedBy'));

  const [personalize, setPersonalize] = React.useState(loadItem('personalize'));
  const [personalizeToggle, setPersonalizeToggle] = React.useState(loadToggle('personalize'));

  const [personalizationInstructions, setPersonalizationInstructions] = React.useState(loadItem('personalizationInstructions'));
  const [personalizationInstructionsToggle, setPersonalizationInstructionsToggle] = React.useState(loadToggle('personalizationInstructions'));

  const [artist, setArtist] = React.useState(loadItem('artist'));
  const [artistToggle, setArtistToggle] = React.useState(loadToggle('artist'));

  const [featuredPerson, setFeaturedPerson] = React.useState(loadItem('featuredPerson'));
  const [featuredPersonToggle, setFeaturedPersonToggle] = React.useState(loadToggle('featuredPerson'));

  const [size, setSize] = React.useState(loadItem('size'));
  const [sizeToggle, setSizeToggle] = React.useState(loadToggle('size'));

  const [timePeriodManufactured, setTimePeriodManufactured] = React.useState(loadItem('timePeriodManufactured'));
  const [timePeriodManufacturedToggle, setTimePeriodManufacturedToggle] = React.useState(loadToggle('timePeriodManufactured'));

  const [californiaProp65Warning, setCaliforniaProp65Warning] = React.useState(loadItem('californiaProp65Warning'));
  const [californiaProp65WarningToggle, setCaliforniaProp65WarningToggle] = React.useState(loadToggle('californiaProp65Warning'));

  const [unitQuantity, setUnitQuantity] = React.useState(loadItem('unitQuantity'));
  const [unitQuantityToggle, setUnitQuantityToggle] = React.useState(loadToggle('unitQuantity'));

  const [unitType, setUnitType] = React.useState(loadItem('unitType'));
  const [unitTypeToggle, setUnitTypeToggle] = React.useState(loadToggle('unitType'));

  const [condition, setCondition] = React.useState(loadItem('condition'));
  const [conditionToggle, setConditionToggle] = React.useState(loadToggle('condition'));

  const [conditionTypes, setConditionTypes] = React.useState(loadItem('conditionTypes'));
  const [conditionTypesToggle, setConditionTypesToggle] = React.useState(loadToggle('conditionTypes'));

  const [conditionDescription, setConditionDescription] = React.useState(loadItem('conditionDescription'));
  const [conditionDescriptionToggle, setConditionDescriptionToggle] = React.useState(loadToggle('conditionDescription'));

  const [description, setDescription] = React.useState(loadItem('description'));
  const [descriptionToggle, setDescriptionToggle] = React.useState(loadToggle('description'));

  const [format, setFormat] = React.useState(loadItem('format'));
  const [formatToggle, setFormatToggle] = React.useState(loadToggle('format'));

  const [price, setPrice] = React.useState(loadItem('price'));
  const [priceToggle, setPriceToggle] = React.useState(loadToggle('price'));

  const [requireImmediatePayment, setRequireImmediatePayment] = React.useState(loadItem('requireImmediatePayment'));
  const [requireImmediatePaymentToggle, setRequireImmediatePaymentToggle] = React.useState(loadToggle('requireImmediatePayment'));

  const [quantity, setQuantity] = React.useState(loadItem('quantity'));
  const [quantityToggle, setQuantityToggle] = React.useState(loadToggle('quantity'));

  const [allowOffers, setAllowOffers] = React.useState(loadItem('allowOffers'));
  const [allowOffersToggle, setAllowOffersToggle] = React.useState(loadToggle('allowOffers'));

  const [paymentPolicy, setPaymentPolicy] = React.useState(loadItem('paymentPolicy'));
  const [paymentPolicyToggle, setPaymentPolicyToggle] = React.useState(loadToggle('paymentPolicy'));

  const [minimumOffer, setMinimumOffer] = React.useState(loadItem('minimumOffer'));
  const [minimumOfferToggle, setMinimumOfferToggle] = React.useState(loadToggle('minimumOffer'));

  const [autoAccept, setAutoAccept] = React.useState(loadItem('autoAccept'));
  const [autoAcceptToggle, setAutoAcceptToggle] = React.useState(loadToggle('autoAccept'));

  const [scheduleListing, setScheduleListing] = React.useState(loadItem('scheduleListing'));
  const [scheduleListingToggle, setScheduleListingToggle] = React.useState(loadToggle('scheduleListing'));

  const [scheduleListingDateTime, setScheduleListingDateTime] = React.useState(loadItem('scheduleListingDateTime'));
  const [scheduleListingDateTimeToggle, setScheduleListingDateTimeToggle] = React.useState(loadToggle('scheduleListingDateTime'));

  const [duration, setDuration] = React.useState(loadItem('duration'));
  const [durationToggle, setDurationToggle] = React.useState(loadToggle('duration'));

  const [startingBid, setStartingBid] = React.useState(loadItem('startingBid'));
  const [startingBidToggle, setStartingBidToggle] = React.useState(loadToggle('startingBid'));

  const [buyItNowPrice, setBuyItNowPrice] = React.useState(loadItem('buyItNowPrice'));
  const [buyItNowPriceToggle, setBuyItNowPriceToggle] = React.useState(loadToggle('buyItNowPrice'));

  const [autoRelist, setAutoRelist] = React.useState(loadItem('autoRelist'));
  const [autoRelistToggle, setAutoRelistToggle] = React.useState(loadToggle('autoRelist'));

  const [shippingPolicy, setShippingPolicy] = React.useState(loadItem('shippingPolicy'));
  const [shippingPolicyToggle, setShippingPolicyToggle] = React.useState(loadToggle('shippingPolicy'));

  const [packageWeight, setPackageWeight] = React.useState(loadItem('packageWeight'));
  const [packageWeightToggle, setPackageWeightToggle] = React.useState(loadToggle('packageWeight'));

  const [packageDimensions, setPackageDimensions] = React.useState(loadItem('packageDimensions'));
  const [packageDimensionsToggle, setPackageDimensionsToggle] = React.useState(loadToggle('packageDimensions'));

  const [irregularPackage, setIrregularPackage] = React.useState(loadItem('irregularPackage'));
  const [irregularPackageToggle, setIrregularPackageToggle] = React.useState(loadToggle('irregularPackage'));

  const [itemLocationCountryRegion, setItemLocationCountryRegion] = React.useState(loadItem('itemLocationCountryRegion'));
  const [itemLocationCountryRegionToggle, setItemLocationCountryRegionToggle] = React.useState(loadToggle('itemLocationCountryRegion'));

  const [itemLocationZipCode, setItemLocationZipCode] = React.useState(loadItem('itemLocationZipCode'));
  const [itemLocationZipCodeToggle, setItemLocationZipCodeToggle] = React.useState(loadToggle('itemLocationZipCode'));

  const [itemLocationCityState, setItemLocationCityState] = React.useState(loadItem('itemLocationCityState'));
  const [itemLocationCityStateToggle, setItemLocationCityStateToggle] = React.useState(loadToggle('itemLocationCityState'));

  const [productDocuments, setProductDocuments] = React.useState(loadItem('productDocuments'));
  const [productDocumentsToggle, setProductDocumentsToggle] = React.useState(loadToggle('productDocuments'));

  const [promoteListingGeneral, setPromoteListingGeneral] = React.useState(loadItem('promoteListingGeneral'));
  const [promoteListingGeneralToggle, setPromoteListingGeneralToggle] = React.useState(loadToggle('promoteListingGeneral'));

  const [adRate, setAdRate] = React.useState(loadItem('adRate'));
  const [adRateToggle, setAdRateToggle] = React.useState(loadToggle('adRate'));

  const [promoteListingPriority, setPromoteListingPriority] = React.useState(loadItem('promoteListingPriority'));
  const [promoteListingPriorityToggle, setPromoteListingPriorityToggle] = React.useState(loadToggle('promoteListingPriority'));

  const [charity, setCharity] = React.useState(loadItem('charity'));
  const [charityToggle, setCharityToggle] = React.useState(loadToggle('charity'));

  const decade = /[0-9][0-9][0-9]/.exec(yearManufactured) || [];

  const contents = {
    title: {
      value: title,
      set: setTitle,
      toggled: titleToggle,
      setToggled: setTitleToggle,
      description: 'Title',
      type: TextField,
      required: true,
      props: { characterLimit: 80, width: 700 },
    },
    templateType: {
      value: templateType,
      set: setTemplateType,
      toggled: templateTypeToggle,
      setToggled: setTemplateTypeToggle,
      description: 'Template Type',
      type: Radio,
      required: true,
      props: { radioButtons: ['Topographical', 'Non-Topographical'] },
    },
    customLabelSKU: {
      value: customLabelSKU,
      set: setCustomLabelSKU,
      toggled: customLabelSKUToggle,
      setToggled: setCustomLabelSKUToggle,
      description: 'Custom Label (SKU)',
      type: TextField,
      required: false,
      props: { characterLimit: 50, width: 150 },
    },
    storeCategory1: {
      value: storeCategory1,
      set: setStoreCategory1,
      toggled: storeCategory1Toggle,
      setToggled: setStoreCategory1Toggle,
      description: 'Store Category 1',
      type: SearchDropdown,
      required: true,
      props: { dropdownItems: DropdownData.getStoreCategories(), enableSearch: true, strict: true, width: 400 },
    },
    storeCategory2: {
      value: storeCategory2,
      set: setStoreCategory2,
      toggled: storeCategory2Toggle,
      setToggled: setStoreCategory2Toggle,
      description: 'Store Category 2',
      type: SearchDropdown,
      required: false,
      props: { dropdownItems: DropdownData.getStoreCategories(), enableSearch: true, strict: true, width: 400 },
    },
    upc: {
      value: upc,
      set: setUpc,
      toggled: upcToggle,
      setToggled: setUpcToggle,
      description: 'UPC Number',
      type: TextField,
      required: false,
      props: { width: 150 },
    },
    occasion: {
      value: occasion,
      set: setOccasion,
      toggled: occasionToggle,
      setToggled: setOccasionToggle,
      description: 'Occasion',
      type: SearchDropdown,
      required: false,
      props: {
        priorityItem: DropdownData.getOccasionsPriority(),
        dropdownItems: DropdownData.getOccasions(),
        enableSearch: true,
        strict: false
      },
    },
    city: {
      value: city,
      set: setCity,
      toggled: cityToggle,
      setToggled: setCityToggle,
      description: 'City',
      type: TextField,
      required: false,
      props: { suggestions: ['Chicago', 'New York City', 'San Francisco'] },
    },
    subject: {
      value: subject,
      set: setSubject,
      toggled: subjectToggle,
      setToggled: setSubjectToggle,
      description: 'Subject',
      type: TextField,
      required: false,
      props: {},
    },
    countryRegionOfManufacture: {
      value: countryRegionOfManufacture,
      set: setCountryRegionOfManufacture,
      toggled: countryRegionOfManufactureToggle,
      setToggled: setCountryRegionOfManufactureToggle,
      description: 'Country/Region of Manufacture',
      type: SearchDropdown,
      required: false,
      props: {
        dropdownItems: DropdownData.getCountriesRegionsOfManufacture(),
        priorityItems: DropdownData.getMostCommonCountries(),
        strict: true,
        enableSearch: true,
      },
    },
    country: {
      value: country,
      set: setCountry,
      toggled: countryToggle,
      setToggled: setCountryToggle,
      description: 'Country',
      type: SearchDropdown,
      required: false,
      props: {
        dropdownItems: DropdownData.getCountries(),
        priorityItems: DropdownData.getMostCommonCountries(),
        default: countryRegionOfManufacture,
        enableSearch: true,
        strict: false,
      },
    },
    region: {
      value: region,
      set: setRegion,
      toggled: regionToggle,
      setToggled: setRegionToggle,
      description: 'Region',
      type: country === 'United States' ? SearchDropdown : TextField,
      required: false,
      props: country === 'United States'
        ? { dropdownItems: DropdownData.getUsStates(), enableSearch: true, strict: true }
        : { disabled: !country },
      hidden: templateType !== 'Topographical',
    },
    theme: {
      value: theme,
      set: setTheme,
      toggled: themeToggle,
      setToggled: setThemeToggle,
      description: 'Theme',
      type: SearchDropdown,
      required: false,
      props: {
        dropdownItems: DropdownData.getThemes(),
        priorityItems: DropdownData.getPriorityThemes(),
        enableSearch: true,
        strict: false,
      },
    },
    unitOfSale: {
      value: unitOfSale,
      set: setUnitOfSale,
      toggled: unitOfSaleToggle,
      setToggled: setUnitOfSaleToggle,
      description: 'Unit of Sale',
      type: SearchDropdown,
      required: false,
      props: { dropdownItems: DropdownData.getUnitsOfSale(), enableSearch: false, strict: true },
    },
    postcardType: {
      value: postcardType,
      set: setPostcardType,
      toggled: postcardTypeToggle,
      setToggled: setPostcardTypeToggle,
      description: 'Type',
      type: SearchDropdown,
      required: false,
      props: { dropdownItems: DropdownData.getTypes(), enableSearch: true, strict: false },
    },
    originalOrLicensedReprint: {
      value: originalOrLicensedReprint,
      set: setOriginalOrLicensedReprint,
      toggled: originalOrLicensedReprintToggle,
      setToggled: setOriginalOrLicensedReprintToggle,
      description: 'Original/Licensed Reprint',
      type: Radio,
      required: true,
      props: { radioButtons: ['Original', 'Licensed Reprint'] },
    },
    postageCondition: {
      value: postageCondition,
      set: setPostageCondition,
      toggled: postageConditionToggle,
      setToggled: setPostageConditionToggle,
      description: 'Postage Condition',
      type: Radio,
      required: true,
      props: { radioButtons: ['Posted', 'Unposted'] },
    },
    era: {
      value: era,
      set: setEra,
      toggled: eraToggle,
      setToggled: setEraToggle,
      description: 'Era',
      type: SearchDropdown,
      required: false,
      props: {
        dropdownItems: ['Divided Back (1907-1915)', 'Undivided Back (1901-1917)'],
        enableSearch: true,
        strict: false,
      },
    },
    yearManufactured: {
      value: yearManufactured,
      set: setYearManufactured,
      toggled: yearManufacturedToggle,
      setToggled: setYearManufacturedToggle,
      description: 'Year Manufactured',
      type: TextField,
      required: false,
      props: {},
    },
    numberOfItemsInSet: {
      value: numberOfItemsInSet,
      set: setNumberOfItemsInSet,
      toggled: numberOfItemsInSetToggle,
      setToggled: setNumberOfItemsInSetToggle,
      description: 'Number of Items in Set',
      type: TextField,
      required: false,
      props: { suggestions: ['1']},
    },
    features: {
      value: features,
      set: setFeatures,
      toggled: featuresToggle,
      setToggled: setFeaturesToggle,
      description: 'Features',
      type: Checklist,
      required: false,
      props: { checklistItems: DropdownData.getFeatures() },
    },
    material: {
      value: material,
      set: setMaterial,
      toggled: materialToggle,
      setToggled: setMaterialToggle,
      description: 'Material',
      type: Checklist,
      required: false,
      props: { checklistItems: DropdownData.getMaterials() },
    },
    continent: {
      value: continent,
      set: setContinent,
      toggled: continentToggle,
      setToggled: setContinentToggle,
      description: 'Continent',
      type: SearchDropdown,
      required: false,
      props: { dropdownItems: DropdownData.getContinents(), enableSearch: false, strict: true },
      hidden: templateType !== 'Topographical',
    },
    brandOrPublisher: {
      value: brandOrPublisher,
      set: setBrandOrPublisher,
      toggled: brandOrPublisherToggle,
      setToggled: setBrandOrPublisherToggle,
      description: 'Brand/Publisher',
      type: SearchDropdown,
      required: false,
      props: { dropdownItems: DropdownData.getCommonPublishers(), enableSearch: true, strict: false },
    },
    franchise: {
      value: franchise,
      set: setFranchise,
      toggled: franchiseToggle,
      setToggled: setFranchiseToggle,
      description: 'Franchise',
      type: TextField,
      required: false,
      props: { suggestions: ['Disney'] },
    },
    occasion2: {
      value: occasion2,
      set: setOccasion2,
      toggled: occasion2Toggle,
      setToggled: setOccasion2Toggle,
      description: 'Occasion',
      type: TextField,
      required: false,
      props: {},
    },
    character: {
      value: character,
      set: setCharacter,
      toggled: characterToggle,
      setToggled: setCharacterToggle,
      description: 'Character',
      type: TextField,
      required: false,
      props: {},
    },
    signed: {
      value: signed,
      set: setSigned,
      toggled: signedToggle,
      setToggled: setSignedToggle,
      description: 'Signed',
      type: TextField,
      required: false,
      props: { disabled: true },
    },
    signedBy: {
      value: signedBy,
      set: setSignedBy,
      toggled: signedByToggle,
      setToggled: setSignedByToggle,
      description: 'Signed By',
      type: TextField,
      required: false,
      props: { disabled: true },
    },
    personalize: {
      value: personalize,
      set: setPersonalize,
      toggled: personalizeToggle,
      setToggled: setPersonalizeToggle,
      description: 'Personalize',
      type: Toggle,
      required: false,
      props: {},
      hidden: templateType !== 'Non-Topographical',
    },
    personalizationInstructions: {
      value: personalizationInstructions,
      set: setPersonalizationInstructions,
      toggled: personalizationInstructionsToggle,
      setToggled: setPersonalizationInstructionsToggle,
      description: 'Personalization Instructions',
      type: TextField,
      required: false,
      props: { disabled: !personalize },
      hidden: templateType !== 'Non-Topographical',
    },
    artist: {
      value: artist,
      set: setArtist,
      toggled: artistToggle,
      setToggled: setArtistToggle,
      description: 'Artist',
      type: TextField,
      required: false,
      props: {},
    },
    featuredPerson: {
      value: featuredPerson,
      set: setFeaturedPerson,
      toggled: featuredPersonToggle,
      setToggled: setFeaturedPersonToggle,
      description: 'Featured Person',
      type: TextField,
      required: false,
      props: {},
    },
    size: {
      value: size,
      set: setSize,
      toggled: sizeToggle,
      setToggled: setSizeToggle,
      description: 'Size',
      type: TextField,
      required: false,
      props: {},
    },
    timePeriodManufactured: {
      value: timePeriodManufactured,
      set: setTimePeriodManufactured,
      toggled: timePeriodManufacturedToggle,
      setToggled: setTimePeriodManufacturedToggle,
      description: 'Time Period Manufactured',
      type: TextField,
      required: false,
      props: { default: decade.length > 0 ? `${decade[0]}0-${decade[0]}9` : '' },
    },
    californiaProp65Warning: {
      value: californiaProp65Warning,
      set: setCaliforniaProp65Warning,
      toggled: californiaProp65WarningToggle,
      setToggled: setCaliforniaProp65WarningToggle,
      description: 'California Prop 65 Warning',
      type: TextField,
      required: false,
      props: { characterLimit: 800 },
    },
    unitQuantity: {
      value: unitQuantity,
      set: setUnitQuantity,
      toggled: unitQuantityToggle,
      setToggled: setUnitQuantityToggle,
      description: 'Unit Quantity',
      type: TextField,
      required: false,
      props: {},
    },
    unitType: {
      value: unitType,
      set: setUnitType,
      toggled: unitTypeToggle,
      setToggled: setUnitTypeToggle,
      description: 'Unit Type',
      type: SearchDropdown,
      required: false,
      props: { dropdownItems: DropdownData.getUnitTypes(), enableSearch: true, strict: true },
    },
    condition: {
      value: condition,
      set: setCondition,
      toggled: conditionToggle,
      setToggled: setConditionToggle,
      description: 'Condition',
      type: Radio,
      required: true,
      props: { radioButtons: ['New', 'Used'] },
    },
    conditionTypes: {
      value: conditionTypes,
      set: (items: string[]) => {
        setConditionTypes(items);
        const descrip = [...items.map(DescriptionData.getConditionDescriptionFor), DescriptionData.getBaseConditionDescription()].join('\n');
        setConditionDescription(descrip);
      },
      toggled: conditionTypesToggle,
      setToggled: setConditionTypesToggle,
      description: 'Condition Types',
      type: Checklist,
      required: false,
      props: { checklistItems: ['Tear', 'Crease', 'Bend', 'Pinhole'] },
    },
    conditionDescription: {
      value: conditionDescription,
      set: setConditionDescription,
      toggled: conditionDescriptionToggle,
      setToggled: setConditionDescriptionToggle,
      description: 'Condition Description',
      type: TextArea,
      required: false,
      props: { characterLimit: 1000, disabled: true },
    },
    description: {
      value: description,
      set: setDescription,
      toggled: descriptionToggle,
      setToggled: setDescriptionToggle,
      description: 'Description',
      type: DisplayText,
      required: false,
      props: { parseHtml: true },
    },
    format: {
      value: format,
      set: (item: string) => {
        setFormat(item);
        setAllowOffers(item === 'Buy It Now');
      },
      toggled: formatToggle,
      setToggled: setFormatToggle,
      description: 'Format',
      type: Radio,
      required: true,
      props: { radioButtons: ['Buy It Now', 'Auction'] },
    },
    price: {
      value: price,
      set: setPrice,
      toggled: priceToggle,
      setToggled: setPriceToggle,
      description: 'Price',
      type: TextField,
      required: true,
      props: { suggestions: ['5.95', '15.95', '19.95'], currency: true },
      hidden: format !== 'Buy It Now',
    },
    requireImmediatePayment: {
      value: format !== 'Auction',
      set: setRequireImmediatePayment,
      toggled: requireImmediatePaymentToggle,
      setToggled: setRequireImmediatePaymentToggle,
      description: 'Require Immediate Payment',
      type: Toggle,
      required: true,
      props: { disabled: true },
    },
    quantity: {
      value: quantity,
      set: setQuantity,
      toggled: quantityToggle,
      setToggled: setQuantityToggle,
      description: 'Quantity',
      type: TextField,
      required: true,
      props: {},
    },
    paymentPolicy: {
      value: format !== 'Auction' ? 'BIN Immediate Payment' : 'No Immediate Pay - Auction',
      set: setPaymentPolicy,
      toggled: paymentPolicyToggle,
      setToggled: setPaymentPolicyToggle,
      description: 'Payment Policy',
      type: Radio,
      required: true,
      props: { radioButtons: ['BIN Immediate Payment', 'No Immediate Pay - Auction'], disabled: true },
    },
    allowOffers: {
      value: allowOffers,
      set: setAllowOffers,
      toggled: allowOffersToggle,
      setToggled: setAllowOffersToggle,
      description: 'Allow Offers',
      type: Toggle,
      required: true,
      props: {},
    },
    minimumOffer: {
      value: minimumOffer,
      set: setMinimumOffer,
      toggled: minimumOfferToggle,
      setToggled: setMinimumOfferToggle,
      description: 'Minimum Offer',
      type: TextField,
      required: false,
      hidden: format !== 'Buy It Now',
      props: { currency: true },
    },
    autoAccept: {
      value: autoAccept,
      set: setAutoAccept,
      toggled: autoAcceptToggle,
      setToggled: setAutoAcceptToggle,
      description: 'Auto Accept',
      type: TextField,
      required: false,
      hidden: format !== 'Buy It Now',
      props: { currency: true },
    },
    scheduleListing: {
      value: scheduleListing,
      set: setScheduleListing,
      toggled: scheduleListingToggle,
      setToggled: setScheduleListingToggle,
      description: 'Schedule Your Listing?',
      type: Toggle,
      required: true,
      props: {},
    },
    scheduleListingDateTime: {
      value: scheduleListingDateTime,
      set: setScheduleListingDateTime,
      toggled: scheduleListingDateTimeToggle,
      setToggled: setScheduleListingDateTimeToggle,
      description: 'Schedule Your Listing',
      type: DateTime,
      required: true,
      props: { disabled: !scheduleListing },
    },
    duration: {
      value: duration,
      set: setDuration,
      toggled: durationToggle,
      setToggled: setDurationToggle,
      description: 'Duration',
      type: Radio,
      required: true,
      props: { radioButtons: ['7 Days', '10 Days'] },
      hidden: format !== 'Auction',
    },
    startingBid: {
      value: startingBid,
      set: setStartingBid,
      toggled: startingBidToggle,
      setToggled: setStartingBidToggle,
      description: 'Starting Bid',
      type: TextField,
      required: true,
      hidden: format !== 'Auction',
      props: { currency: true },
    },
    buyItNowPrice: {
      value: buyItNowPrice,
      set: setBuyItNowPrice,
      toggled: buyItNowPriceToggle,
      setToggled: setBuyItNowPriceToggle,
      description: 'Buy It Now Price (Optional)',
      type: TextField,
      required: false,
      hidden: format !== 'Auction',
      props: { currency: true },
    },
    autoRelist: {
      value: autoRelist,
      set: setAutoRelist,
      toggled: autoRelistToggle,
      setToggled: setAutoRelistToggle,
      description: 'Auto Relist',
      type: Toggle,
      required: true,
      hidden: format !== 'Auction',
      props: {},
    },
    shippingPolicy: {
      value: Number.parseFloat(price) >= 20 ? 'Shipping Postcards Over $20' : 'Shipping Postcards Under $20',
      set: setShippingPolicy,
      toggled: shippingPolicyToggle,
      setToggled: setShippingPolicyToggle,
      description: 'Shipping Policy',
      type: Radio,
      required: true,
      props: { radioButtons: ['Shipping Postcards Under $20', 'Shipping Postcards Over $20'], disabled: true },
    },
    packageWeight: {
      value: packageWeight,
      set: setPackageWeight,
      toggled: packageWeightToggle,
      setToggled: setPackageWeightToggle,
      description: 'Package Weight (oz)',
      type: TextField,
      required: false,
      props: {},
    },
    packageDimensions: {
      value: packageDimensions,
      set: setPackageDimensions,
      toggled: packageDimensionsToggle,
      setToggled: setPackageDimensionsToggle,
      description: 'Package Dimensions',
      type: TextField,
      required: false,
      props: {},
    },
    irregularPackage: {
      value: irregularPackage,
      set: setIrregularPackage,
      toggled: irregularPackageToggle,
      setToggled: setIrregularPackageToggle,
      description: 'Irregular Package',
      type: Toggle,
      required: true,
      props: {},
    },
    itemLocationCountryRegion: {
      value: itemLocationCountryRegion,
      set: setItemLocationCountryRegion,
      toggled: itemLocationCountryRegionToggle,
      setToggled: setItemLocationCountryRegionToggle,
      description: 'Item Location - Country/Region',
      type: TextField,
      required: true,
      props: {},
    },
    itemLocationZipCode: {
      value: itemLocationZipCode,
      set: setItemLocationZipCode,
      toggled: itemLocationZipCodeToggle,
      setToggled: setItemLocationZipCodeToggle,
      description: 'Item Location - Zip Code',
      type: TextField,
      required: true,
      props: {},
    },
    itemLocationCityState: {
      value: itemLocationCityState,
      set: setItemLocationCityState,
      toggled: itemLocationCityStateToggle,
      setToggled: setItemLocationCityStateToggle,
      description: 'Item Location - City, State',
      type: TextField,
      required: true,
      props: {},
    },
    productDocuments: {
      value: productDocuments,
      set: setProductDocuments,
      toggled: productDocumentsToggle,
      setToggled: setProductDocumentsToggle,
      description: 'Item Disclosures - Product Documents',
      type: Toggle,
      required: true,
      props: { disabled: true },
    },
    promoteListingGeneral: {
      value: promoteListingGeneral,
      set: setPromoteListingGeneral,
      toggled: promoteListingGeneralToggle,
      setToggled: setPromoteListingGeneralToggle,
      description: 'Promote Listing (General)',
      type: Toggle,
      required: true,
      props: {},
    },
    adRate: {
      value: adRate,
      set: setAdRate,
      toggled: adRateToggle,
      setToggled: setAdRateToggle,
      description: 'Listing Ad Rate (General)',
      type: TextField,
      required: true,
      props: {},
    },
    promoteListingPriority: {
      value: promoteListingPriority,
      set: setPromoteListingPriority,
      toggled: promoteListingPriorityToggle,
      setToggled: setPromoteListingPriorityToggle,
      description: 'Promote Listing (Priority)',
      type: Toggle,
      required: true,
      props: { disabled: true },
    },
    charity: {
      value: charity,
      set: setCharity,
      toggled: charityToggle,
      setToggled: setCharityToggle,
      description: 'Charity',
      type: Toggle,
      required: true,
      props: { disabled: true },
    },
  };

  return (
    <FormContext.Provider value={contents}>
      {children}
    </FormContext.Provider>
  );
};
