import React from 'react';

type FormEntry<T> = {
  value: T;
  set: Function;
  toggled: boolean;
  setToggled: Function;
  description: string;
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

export const FormContext = React.createContext<FormContextType | null>(null);

export const FormContextProvider = ({ children }: any) => {
  const [templateType, setTemplateType] = React.useState('');
  const [templateTypeToggle, setTemplateTypeToggle] = React.useState(true);

  const [title, setTitle] = React.useState('');
  const [titleToggle, setTitleToggle] = React.useState(true);
  
  const [customLabelSKU, setCustomLabelSKU] = React.useState('');
  const [customLabelSKUToggle, setCustomLabelSKUToggle] = React.useState(true);

  const [storeCategory1, setStoreCategory1] = React.useState('');
  const [storeCategory1Toggle, setStoreCategory1Toggle] = React.useState(true);

  const [storeCategory2, setStoreCategory2] = React.useState('');
  const [storeCategory2Toggle, setStoreCategory2Toggle] = React.useState(true);

  const [upc, setUpc] = React.useState('');
  const [upcToggle, setUpcToggle] = React.useState(true);

  const [occasion, setOccasion] = React.useState('');
  const [occasionToggle, setOccasionToggle] = React.useState(true);

  const [city, setCity] = React.useState('');
  const [cityToggle, setCityToggle] = React.useState(true);

  const [subject, setSubject] = React.useState('')
  const [subjectToggle, setSubjectToggle] = React.useState(true);

  const [countryRegionOfManufacture, setCountryRegionOfManufacture] = React.useState('');
  const [countryRegionOfManufactureToggle, setCountryRegionOfManufactureToggle] = React.useState(true);

  const [country, setCountry] = React.useState('');
  const [countryToggle, setCountryToggle] = React.useState(true);

  const [region, setRegion] = React.useState('');
  const [regionToggle, setRegionToggle] = React.useState(true);

  const [theme, setTheme] = React.useState('');
  const [themeToggle, setThemeToggle] = React.useState(true);

  const [unitOfSale, setUnitOfSale] = React.useState('Single Unit');
  const [unitOfSaleToggle, setUnitOfSaleToggle] = React.useState(true);

  const [postcardType, setPostcardType] = React.useState('');
  const [postcardTypeToggle, setPostcardTypeToggle] = React.useState(true);

  const [originalOrLicensedReprint, setOriginalOrLicensedReprint] = React.useState('Original');
  const [originalOrLicensedReprintToggle, setOriginalOrLicensedReprintToggle] = React.useState(true);

  const [postageCondition, setPostageCondition] = React.useState('');
  const [postageConditionToggle, setPostageConditionToggle] = React.useState(true);

  const [era, setEra] = React.useState('');
  const [eraToggle, setEraToggle] = React.useState(true);

  const [yearManufactured, setYearManufactured] = React.useState('');
  const [yearManufacturedToggle, setYearManufacturedToggle] = React.useState(true);

  const [numberOfItemsInSet, setNumberOfItemsInSet] = React.useState('');
  const [numberOfItemsInSetToggle, setNumberOfItemsInSetToggle] = React.useState(true);

  const [features, setFeatures] = React.useState([]);
  const [featuresToggle, setFeaturesToggle] = React.useState(true);

  const [material, setMaterial] = React.useState([]);
  const [materialToggle, setMaterialToggle] = React.useState(true);

  const [continent, setContinent] = React.useState('');
  const [continentToggle, setContinentToggle] = React.useState(true);

  const [brandOrPublisher, setBrandOrPublisher] = React.useState('');
  const [brandOrPublisherToggle, setBrandOrPublisherToggle] = React.useState(true);

  const [franchise, setFranchise] = React.useState('');
  const [franchiseToggle, setFranchiseToggle] = React.useState(true);

  const [occasion2, setOccasion2] = React.useState('');
  const [occasion2Toggle, setOccasion2Toggle] = React.useState(true);

  const [character, setCharacter] = React.useState('');
  const [characterToggle, setCharacterToggle] = React.useState(true);

  const [signed, setSigned] = React.useState(false);
  const [signedToggle, setSignedToggle] = React.useState(true);

  const [signedBy, setSignedBy] = React.useState('');
  const [signedByToggle, setSignedByToggle] = React.useState(true);

  const [personalize, setPersonalize] = React.useState(false);
  const [personalizeToggle, setPersonalizeToggle] = React.useState(true);

  const [personalizationInstructions, setPersonalizationInstructions] = React.useState('');
  const [personalizationInstructionsToggle, setPersonalizationInstructionsToggle] = React.useState(true);

  const [artist, setArtist] = React.useState('');
  const [artistToggle, setArtistToggle] = React.useState(true);

  const [featuredPerson, setFeaturedPerson] = React.useState('');
  const [featuredPersonToggle, setFeaturedPersonToggle] = React.useState(true);

  const [size, setSize] = React.useState('7x5x1');
  const [sizeToggle, setSizeToggle] = React.useState(true);

  const [timePeriodManufactured, setTimePeriodManufactured] = React.useState('');
  const [timePeriodManufacturedToggle, setTimePeriodManufacturedToggle] = React.useState(true);

  const [californiaProp65Warning, setCaliforniaProp65Warning] = React.useState('');
  const [californiaProp65WarningToggle, setCaliforniaProp65WarningToggle] = React.useState(true);

  const [unitQuantity, setUnitQuantity] = React.useState('');
  const [unitQuantityToggle, setUnitQuantityToggle] = React.useState(true);

  const [unitType, setUnitType] = React.useState('');
  const [unitTypeToggle, setUnitTypeToggle] = React.useState(true);

  const [condition, setCondition] = React.useState('Used');
  const [conditionToggle, setConditionToggle] = React.useState(true);

  const [conditionTypes, setConditionTypes] = React.useState([]);
  const [conditionTypesToggle, setConditionTypesToggle] = React.useState(true);

  const [conditionDescription, setConditionDescription] = React.useState('');
  const [conditionDescriptionToggle, setConditionDescriptionToggle] = React.useState(true);

  const [format, setFormat] = React.useState('Buy It Now');
  const [formatToggle, setFormatToggle] = React.useState(true);

  const [price, setPrice] = React.useState('');
  const [priceToggle, setPriceToggle] = React.useState(true);

  const [requireImmediatePayment, setRequireImmediatePayment] = React.useState(format === 'Buy It Now');
  const [requireImmediatePaymentToggle, setRequireImmediatePaymentToggle] = React.useState(true);

  const [quantity, setQuantity] = React.useState('1');
  const [quantityToggle, setQuantityToggle] = React.useState(true);

  const [allowOffers, setAllowOffers] = React.useState(true);
  const [allowOffersToggle, setAllowOffersToggle] = React.useState(true);

  const [paymentPolicy, setPaymentPolicy] = React.useState('BIN Immediate Payment');
  const [paymentPolicyToggle, setPaymentPolicyToggle] = React.useState(true);

  const [minimumOffer, setMinimumOffer] = React.useState('');
  const [minimumOfferToggle, setMinimumOfferToggle] = React.useState(true);

  const [autoAccept, setAutoAccept] = React.useState('');
  const [autoAcceptToggle, setAutoAcceptToggle] = React.useState(true);

  const [scheduleListing, setScheduleListing] = React.useState(false);
  const [scheduleListingToggle, setScheduleListingToggle] = React.useState(true);

  const [scheduleListingDateTime, setScheduleListingDateTime] = React.useState({ date: '', time: '', amPm: 'AM' });
  const [scheduleListingDateTimeToggle, setScheduleListingDateTimeToggle] = React.useState(true);

  const [duration, setDuration] = React.useState('7 Days');
  const [durationToggle, setDurationToggle] = React.useState(true);

  const [startingBid, setStartingBid] = React.useState('');
  const [startingBidToggle, setStartingBidToggle] = React.useState(true);

  const [buyItNowPrice, setBuyItNowPrice] = React.useState('');
  const [buyItNowPriceToggle, setBuyItNowPriceToggle] = React.useState(true);

  const [autoRelist, setAutoRelist] = React.useState(false);
  const [autoRelistToggle, setAutoRelistToggle] = React.useState(true);

  const [shippingPolicy, setShippingPolicy] = React.useState('');
  const [shippingPolicyToggle, setShippingPolicyToggle] = React.useState(true);

  const [packageWeight, setPackageWeight] = React.useState('1');
  const [packageWeightToggle, setPackageWeightToggle] = React.useState(true);

  const [packageDimensions, setPackageDimensions] = React.useState('7x5x1');
  const [packageDimensionsToggle, setPackageDimensionsToggle] = React.useState(true);

  const [irregularPackage, setIrregularPackage] = React.useState(false);
  const [irregularPackageToggle, setIrregularPackageToggle] = React.useState(true);

  const [itemLocationCountryRegion, setItemLocationCountryRegion] = React.useState('United States');
  const [itemLocationCountryRegionToggle, setItemLocationCountryRegionToggle] = React.useState(true);

  const [itemLocationZipCode, setItemLocationZipCode] = React.useState('53228');
  const [itemLocationZipCodeToggle, setItemLocationZipCodeToggle] = React.useState(true);

  const [itemLocationCityState, setItemLocationCityState] = React.useState('Milwaukee, Wisconsin');
  const [itemLocationCityStateToggle, setItemLocationCityStateToggle] = React.useState(true);

  const [productDocuments, setProductDocuments] = React.useState(false);
  const [productDocumentsToggle, setProductDocumentsToggle] = React.useState(true);

  const [promoteListingGeneral, setPromoteListingGeneral] = React.useState(true);
  const [promoteListingGeneralToggle, setPromoteListingGeneralToggle] = React.useState(true);

  const [adRate, setAdRate] = React.useState('3%');
  const [adRateToggle, setAdRateToggle] = React.useState(true);

  const [promoteListingPriority, setPromoteListingPriority] = React.useState(false);
  const [promoteListingPriorityToggle, setPromoteListingPriorityToggle] = React.useState(true);

  const [charity, setCharity] = React.useState(false);
  const [charityToggle, setCharityToggle] = React.useState(true);

  const contents = {
    templateType: {
      value: templateType,
      set: setTemplateType,
      toggled: templateTypeToggle,
      setToggled: setTemplateTypeToggle,
      description: 'Template Type',
    },
    title: {
      value: title,
      set: setTitle,
      toggled: titleToggle,
      setToggled: setTitleToggle,
      description: 'Title',
    },
    customLabelSKU: {
      value: customLabelSKU,
      set: setCustomLabelSKU,
      toggled: customLabelSKUToggle,
      setToggled: setCustomLabelSKUToggle,
      description: 'Custom Label (SKU)'
    },
    storeCategory1: {
      value: storeCategory1,
      set: setStoreCategory1,
      toggled: storeCategory1Toggle,
      setToggled: setStoreCategory1Toggle,
      description: 'Store Category 1',
    },
    storeCategory2: {
      value: storeCategory2,
      set: setStoreCategory2,
      toggled: storeCategory2Toggle,
      setToggled: setStoreCategory2Toggle,
      description: 'Store Category 2',
    },
    upc: {
      value: upc,
      set: setUpc,
      toggled: upcToggle,
      setToggled: setUpcToggle,
      description: 'UPC Number',
    },
    occasion: {
      value: occasion,
      set: setOccasion,
      toggled: occasionToggle,
      setToggled: setOccasionToggle,
      description: 'Occasion',
    },
    city: {
      value: city,
      set: setCity,
      toggled: cityToggle,
      setToggled: setCityToggle,
      description: 'City',
    },
    subject: {
      value: subject,
      set: setSubject,
      toggled: subjectToggle,
      setToggled: setSubjectToggle,
      description: '',
    },
    countryRegionOfManufacture: {
      value: countryRegionOfManufacture,
      set: setCountryRegionOfManufacture,
      toggled: countryRegionOfManufactureToggle,
      setToggled: setCountryRegionOfManufactureToggle,
      description: '',
    },
    country: {
      value: country,
      set: setCountry,
      toggled: countryToggle,
      setToggled: setCountryToggle,
      description: '',
    },
    region: {
      value: region,
      set: setRegion,
      toggled: regionToggle,
      setToggled: setRegionToggle,
      description: '',
    },
    theme: {
      value: theme,
      set: setTheme,
      toggled: themeToggle,
      setToggled: setThemeToggle,
      description: '',
    },
    unitOfSale: {
      value: unitOfSale,
      set: setUnitOfSale,
      toggled: unitOfSaleToggle,
      setToggled: setUnitOfSaleToggle,
      description: '',
    },
    postcardType: {
      value: postcardType,
      set: setPostcardType,
      toggled: postcardTypeToggle,
      setToggled: setPostcardTypeToggle,
      description: '',
    },
    originalOrLicensedReprint: {
      value: originalOrLicensedReprint,
      set: setOriginalOrLicensedReprint,
      toggled: originalOrLicensedReprintToggle,
      setToggled: setOriginalOrLicensedReprintToggle,
      description: '',
    },
    postageCondition: {
      value: postageCondition,
      set: setPostageCondition,
      toggled: postageConditionToggle,
      setToggled: setPostageConditionToggle,
      description: '',
    },
    era: {
      value: era,
      set: setEra,
      toggled: eraToggle,
      setToggled: setEraToggle,
      description: '',
    },
    yearManufactured: {
      value: yearManufactured,
      set: setYearManufactured,
      toggled: yearManufacturedToggle,
      setToggled: setYearManufacturedToggle,
      description: '',
    },
    numberOfItemsInSet: {
      value: numberOfItemsInSet,
      set: setNumberOfItemsInSet,
      toggled: numberOfItemsInSetToggle,
      setToggled: setNumberOfItemsInSetToggle,
      description: '',
    },
    features: {
      value: features,
      set: setFeatures,
      toggled: featuresToggle,
      setToggled: setFeaturesToggle,
      description: '',
    },
    material: {
      value: material,
      set: setMaterial,
      toggled: materialToggle,
      setToggled: setMaterialToggle,
      description: '',
    },
    continent: {
      value: continent,
      set: setContinent,
      toggled: continentToggle,
      setToggled: setContinentToggle,
      description: '',
    },
    brandOrPublisher: {
      value: brandOrPublisher,
      set: setBrandOrPublisher,
      toggled: brandOrPublisherToggle,
      setToggled: setBrandOrPublisherToggle,
      description: '',
    },
    franchise: {
      value: franchise,
      set: setFranchise,
      toggled: franchiseToggle,
      setToggled: setFranchiseToggle,
      description: '',
    },
    occasion2: {
      value: occasion2,
      set: setOccasion2,
      toggled: occasion2Toggle,
      setToggled: setOccasion2Toggle,
      description: '',
    },
    character: {
      value: character,
      set: setCharacter,
      toggled: characterToggle,
      setToggled: setCharacterToggle,
      description: '',
    },
    signed: {
      value: signed,
      set: setSigned,
      toggled: signedToggle,
      setToggled: setSignedToggle,
      description: '',
    },
    signedBy: {
      value: signedBy,
      set: setSignedBy,
      toggled: signedByToggle,
      setToggled: setSignedByToggle,
      description: '',
    },
    personalize: {
      value: personalize,
      set: setPersonalize,
      toggled: personalizeToggle,
      setToggled: setPersonalizeToggle,
      description: '',
    },
    personalizationInstructions: {
      value: personalizationInstructions,
      set: setPersonalizationInstructions,
      toggled: personalizationInstructionsToggle,
      setToggled: setPersonalizationInstructionsToggle,
      description: '',
    },
    artist: {
      value: artist,
      set: setArtist,
      toggled: artistToggle,
      setToggled: setArtistToggle,
      description: '',
    },
    featuredPerson: {
      value: featuredPerson,
      set: setFeaturedPerson,
      toggled: featuredPersonToggle,
      setToggled: setFeaturedPersonToggle,
      description: '',
    },
    size: {
      value: size,
      set: setSize,
      toggled: sizeToggle,
      setToggled: setSizeToggle,
      description: '',
    },
    timePeriodManufactured: {
      value: timePeriodManufactured,
      set: setTimePeriodManufactured,
      toggled: timePeriodManufacturedToggle,
      setToggled: setTimePeriodManufacturedToggle,
      description: '',
    },
    californiaProp65Warning: {
      value: californiaProp65Warning,
      set: setCaliforniaProp65Warning,
      toggled: californiaProp65WarningToggle,
      setToggled: setCaliforniaProp65WarningToggle,
      description: '',
    },
    unitQuantity: {
      value: unitQuantity,
      set: setUnitQuantity,
      toggled: unitQuantityToggle,
      setToggled: setUnitQuantityToggle,
      description: '',
    },
    unitType: {
      value: unitType,
      set: setUnitType,
      toggled: unitTypeToggle,
      setToggled: setUnitTypeToggle,
      description: '',
    },
    condition: {
      value: condition,
      set: setCondition,
      toggled: conditionToggle,
      setToggled: setConditionToggle,
      description: '',
    },
    conditionTypes: {
      value: conditionTypes,
      set: setConditionTypes,
      toggled: conditionTypesToggle,
      setToggled: setConditionTypesToggle,
      description: '',
    },
    conditionDescription: {
      value: conditionDescription,
      set: setConditionDescription,
      toggled: conditionDescriptionToggle,
      setToggled: setConditionDescriptionToggle,
      description: '',
    },
    format: {
      value: format,
      set: setFormat,
      toggled: formatToggle,
      setToggled: setFormatToggle,
      description: '',
    },
    price: {
      value: price,
      set: setPrice,
      toggled: priceToggle,
      setToggled: setPriceToggle,
      description: '',
    },
    requireImmediatePayment: {
      value: requireImmediatePayment,
      set: setRequireImmediatePayment,
      toggled: requireImmediatePaymentToggle,
      setToggled: setRequireImmediatePaymentToggle,
      description: '',
    },
    quantity: {
      value: quantity,
      set: setQuantity,
      toggled: quantityToggle,
      setToggled: setQuantityToggle,
      description: '',
    },
    allowOffers: {
      value: allowOffers,
      set: setAllowOffers,
      toggled: allowOffersToggle,
      setToggled: setAllowOffersToggle,
      description: '',
    },
    paymentPolicy: {
      value: paymentPolicy,
      set: setPaymentPolicy,
      toggled: paymentPolicyToggle,
      setToggled: setPaymentPolicyToggle,
      description: '',
    },
    minimumOffer: {
      value: minimumOffer,
      set: setMinimumOffer,
      toggled: minimumOfferToggle,
      setToggled: setMinimumOfferToggle,
      description: '',
    },
    autoAccept: {
      value: autoAccept,
      set: setAutoAccept,
      toggled: autoAcceptToggle,
      setToggled: setAutoAcceptToggle,
      description: '',
    },
    scheduleListing: {
      value: scheduleListing,
      set: setScheduleListing,
      toggled: scheduleListingToggle,
      setToggled: setScheduleListingToggle,
      description: '',
    },
    scheduleListingDateTime: {
      value: scheduleListingDateTime,
      set: setScheduleListingDateTime,
      toggled: scheduleListingDateTimeToggle,
      setToggled: setScheduleListingDateTimeToggle,
      description: '',
    },
    duration: {
      value: duration,
      set: setDuration,
      toggled: durationToggle,
      setToggled: setDurationToggle,
      description: '',
    },
    startingBid: {
      value: startingBid,
      set: setStartingBid,
      toggled: startingBidToggle,
      setToggled: setStartingBidToggle,
      description: '',
    },
    buyItNowPrice: {
      value: buyItNowPrice,
      set: setBuyItNowPrice,
      toggled: buyItNowPriceToggle,
      setToggled: setBuyItNowPriceToggle,
      description: '',
    },
    autoRelist: {
      value: autoRelist,
      set: setAutoRelist,
      toggled: autoRelistToggle,
      setToggled: setAutoRelistToggle,
      description: '',
    },
    shippingPolicy: {
      value: shippingPolicy,
      set: setShippingPolicy,
      toggled: shippingPolicyToggle,
      setToggled: setShippingPolicyToggle,
      description: '',
    },
    packageWeight: {
      value: packageWeight,
      set: setPackageWeight,
      toggled: packageWeightToggle,
      setToggled: setPackageWeightToggle,
      description: '',
    },
    packageDimensions: {
      value: packageDimensions,
      set: setPackageDimensions,
      toggled: packageDimensionsToggle,
      setToggled: setPackageDimensionsToggle,
      description: '',
    },
    irregularPackage: {
      value: irregularPackage,
      set: setIrregularPackage,
      toggled: irregularPackageToggle,
      setToggled: setIrregularPackageToggle,
      description: '',
    },
    itemLocationCountryRegion: {
      value: itemLocationCountryRegion,
      set: setItemLocationCountryRegion,
      toggled: itemLocationCountryRegionToggle,
      setToggled: setItemLocationCountryRegionToggle,
      description: '',
    },
    itemLocationZipCode: {
      value: itemLocationZipCode,
      set: setItemLocationZipCode,
      toggled: itemLocationZipCodeToggle,
      setToggled: setItemLocationZipCodeToggle,
      description: '',
    },
    itemLocationCityState: {
      value: itemLocationCityState,
      set: setItemLocationCityState,
      toggled: itemLocationCityStateToggle,
      setToggled: setItemLocationCityStateToggle,
      description: '',
    },
    productDocuments: {
      value: productDocuments,
      set: setProductDocuments,
      toggled: productDocumentsToggle,
      setToggled: setProductDocumentsToggle,
      description: '',
    },
    promoteListingGeneral: {
      value: promoteListingGeneral,
      set: setPromoteListingGeneral,
      toggled: promoteListingGeneralToggle,
      setToggled: setPromoteListingGeneralToggle,
      description: '',
    },
    adRate: {
      value: adRate,
      set: setAdRate,
      toggled: adRateToggle,
      setToggled: setAdRateToggle,
      description: '',
    },
    promoteListingPriority: {
      value: promoteListingPriority,
      set: setPromoteListingPriority,
      toggled: promoteListingPriorityToggle,
      setToggled: setPromoteListingPriorityToggle,
      description: '',
    },
    charity: {
      value: charity,
      set: setCharity,
      toggled: charityToggle,
      setToggled: setCharityToggle,
      description: '',
    },
  };

  return (
    <FormContext.Provider value={contents}>
      {children}
    </FormContext.Provider>
  );
};
