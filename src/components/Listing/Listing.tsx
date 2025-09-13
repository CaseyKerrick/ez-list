import React from 'react';
import Radio from '../base/Radio/Radio';
import TextField from '../base/TextField/TextField';
import SearchDropdown from '../base/SearchDropdown/SearchDropdown';
import DropdownData from '../../services/dropdownData/dropdownData';
import Checklist from '../base/Checklist/Checklist';
import Toggle from '../base/Toggle/Toggle';
import TextArea from '../base/TextArea/TextArea';
import './Listing.css';
import DescriptionData from '../../services/descriptions/descriptionData';


function Listing() {

  const [templateType, setTemplateType] = React.useState('');
  const [title, setTitle] = React.useState('');
  const [customLabelSKU, setCustomLabelSKU] = React.useState('');
  const [storeCategory1, setStoreCategory1] = React.useState('');
  const [storeCategory2, setStoreCategory2] = React.useState('');
  const [upc, setUpc] = React.useState('');
  const [occasion, setOccasion] = React.useState('');
  const [city, setCity] = React.useState('');
  const [subject, setSubject] = React.useState('')
  const [countryRegionOfManufacture, setCountryRegionOfManufacture] = React.useState('');
  const [country, setCountry] = React.useState('');
  const [region, setRegion] = React.useState('');
  const [theme, setTheme] = React.useState('');
  const [unitOfSale, setUnitOfSale] = React.useState('Single Unit');
  const [postcardType, setPostcardType] = React.useState('');
  const [originalOrLicensedReprint, setOriginalOrLicensedReprint] = React.useState('Original');
  const [postageCondition, setPostageCondition] = React.useState('');
  const [era, setEra] = React.useState('');
  const [yearManufactured, setYearManufactured] = React.useState('');
  const [numberOfItemsInSet, setNumberOfItemsInSet] = React.useState('');
  const [features, setFeatures] = React.useState([]);
  const [material, setMaterial] = React.useState([]);
  const [continent, setContinent] = React.useState('');
  const [brandOrPublisher, setBrandOrPublisher] = React.useState('');
  const [franchise, setFranchise] = React.useState('');
  const [occasion2, setOccasion2] = React.useState('');
  const [character, setCharacter] = React.useState('');
  const [signed, setSigned] = React.useState(false);
  const [signedBy, setSignedBy] = React.useState('');
  const [personalize, setPersonalize] = React.useState(false);
  const [personalizationInstructions, setPersonalizationInstructions] = React.useState('');
  const [artist, setArtist] = React.useState('');
  const [featuredPerson, setFeaturedPerson] = React.useState('');
  const [size, setSize] = React.useState('7x5x1');
  const [timePeriodManufactured, setTimePeriodManufactured] = React.useState('');
  const [californiaProp65Warning, setCaliforniaProp65Warning] = React.useState('');
  const [unitQuantity, setUnitQuantity] = React.useState('');
  const [unitType, setUnitType] = React.useState('');
  const [condition, setCondition] = React.useState('Used');
  const [conditionTypes, setConditionTypes] = React.useState([]);
  const [conditionDescription, setConditionDescription] = React.useState('');

  const decade = /[0-9][0-9][0-9]/.exec(yearManufactured) || [];
  

  React.useEffect(() => {
    const descrip = [...conditionTypes.map(DescriptionData.getConditionDescriptionFor), DescriptionData.getBaseConditionDescription()].join('\n');
    setConditionDescription(descrip);
  }, [conditionTypes, setConditionDescription]);

  return (
    <form>
      <div className='formQuestion'>
        <TextField 
          characterLimit={80}
          title='Title'
          value={title}
          onChange={setTitle}
          width={700}
          required={true}
        />
      </div>
      <div className='formQuestion'>
        <Radio
          id='templateType'
          radioButtons={['Topographical', 'Non-Topographical']}
          title='Template Type'
          onChange={setTemplateType}
          selected={templateType}
          required={true}
        />
      </div>
      <div className='formQuestion'>
        <TextField
          characterLimit={50}
          title='Custom Label (SKU)'
          value={customLabelSKU}
          onChange={setCustomLabelSKU}
          width={150}
        />
      </div>
      <div className='formQuestion'>
        <SearchDropdown
          title='Store Category 1'
          dropdownItems={DropdownData.getStoreCategories()}
          enableSearch={true}
          strict={true}
          onChange={setStoreCategory1}
          value={storeCategory1}
          required={true}
          width={400}
        />
      </div>
      <div className='formQuestion'>
        <SearchDropdown
          title='Store Category 2'
          dropdownItems={DropdownData.getStoreCategories()}
          enableSearch={true}
          strict={true}
          onChange={setStoreCategory2}
          value={storeCategory2}
          required={true}
          width={400}
        />
      </div>
      <div className='formQuestion'>
        <TextField
          title='UPC Number'
          value={upc}
          onChange={setUpc}
          width={150}
        />
      </div>
      <div className='formQuestion'>
        <SearchDropdown
          title='Occasion'
          priorityItems={DropdownData.getOccasionsPriority()}
          dropdownItems={DropdownData.getOccasions()}
          enableSearch={true}
          value={occasion}
          onChange={setOccasion}
          strict={false}
        />
      </div>
      <div className='formQuestion'>
        <TextField
          title='City'
          value={city}
          onChange={setCity}
          suggestions={['Chicago', 'New York City', 'San Francisco']}
        />
      </div>
      <div className='formQuestion'>
        <TextField
          title='Subject'
          value={subject}
          onChange={setSubject}
        />
      </div>
      <div className='formQuestion'>
        <SearchDropdown
          title='Country/Region of Manufacture'
          dropdownItems={DropdownData.getCountriesRegionsOfManufacture()}
          enableSearch={true}
          strict={true}
          value={countryRegionOfManufacture}
          onChange={setCountryRegionOfManufacture}
          priorityItems={DropdownData.getMostCommonCountries()}
        />
      </div>
      <div className='formQuestion'>
        <SearchDropdown
          title='Country'
          priorityItems={DropdownData.getMostCommonCountries()}
          dropdownItems={DropdownData.getCountries()}
          enableSearch={true}
          value={country}
          onChange={setCountry}
          strict={false}
          default={countryRegionOfManufacture}
        />
      </div>
      <div className='formQuestion'>
        { country === 'United States' &&
          <SearchDropdown
            title='Region'
            dropdownItems={DropdownData.getUsStates()}
            enableSearch={true}
            strict={true}
            value={region}
            onChange={setRegion}
          />
        }
        { country !== 'United States' &&
          <TextField
            title='Region'
            value={region}
            onChange={setRegion}
            disabled={!country}
          />
        }
      </div>
      <div className='formQuestion'>
        <SearchDropdown
          title='Theme'
          priorityItems={DropdownData.getPriorityThemes()}
          dropdownItems={DropdownData.getThemes()}
          enableSearch={true}
          value={theme}
          onChange={setTheme}
          strict={false}
        />
      </div>
      <div className='formQuestion'>
        <SearchDropdown
          title='Unit of Sale'
          dropdownItems={DropdownData.getUnitsOfSale()}
          enableSearch={false}
          value={unitOfSale}
          onChange={setUnitOfSale}
          strict={true}
        />
      </div>
      <div className='formQuestion'>
        <SearchDropdown
          title='Type'
          dropdownItems={DropdownData.getTypes()}
          enableSearch={true}
          value={postcardType}
          onChange={setPostcardType}
          strict={false}
        />
      </div>
      <div className='formQuestion'>
        <Radio
          id='originalOrLicensedReprint'
          radioButtons={['Original', 'Licensed Reprint']}
          title='Original/Licensed Reprint'
          selected={originalOrLicensedReprint}
          onChange={setOriginalOrLicensedReprint}
          required={false}
        />
      </div>
      <div className='formQuestion'>
        <Radio
          id='postageCondition'
          radioButtons={['Posted', 'Unposted']}
          title='Postage Condition'
          selected={postageCondition}
          onChange={setPostageCondition}
          required={false}
        />
      </div>
      <div className='formQuestion'>
        <SearchDropdown
          title='Era'
          dropdownItems={['Divided Back (1907-1915)', 'Undivided Back (1901-1917)']}
          enableSearch={true}
          value={era}
          onChange={setEra}
          strict={false}
        />
      </div>
      <div className='formQuestion'>
        <TextField
          title='Year Manufactured'
          value={yearManufactured}
          onChange={setYearManufactured}
        />
      </div>
      <div className='formQuestion'>
        <TextField
          title='Number of Items in Set'
          value={numberOfItemsInSet}
          onChange={setNumberOfItemsInSet}
          suggestions={['1']}
        />
      </div>
      <div className='formQuestion'>
        <Checklist
          title='Features'
          checklistItems={DropdownData.getFeatures()}
          selected={features}
          onChange={setFeatures}
        />
      </div>
      <div className='formQuestion'>
        <Checklist
          title='Material'
          checklistItems={DropdownData.getMaterials()}
          selected={material}
          onChange={setMaterial}
        />
      </div>
      <div className='formQuestion'>
        <SearchDropdown
          title='Continent'
          dropdownItems={DropdownData.getContinents()}
          enableSearch={false}
          value={continent}
          onChange={setContinent}
          strict={true}
        />
      </div>
      <div className='formQuestion'>
        <SearchDropdown
          title='Brand/Publisher'
          dropdownItems={DropdownData.getCommonPublishers()}
          enableSearch={true}
          value={brandOrPublisher}
          onChange={setBrandOrPublisher}
          strict={false}
        />
      </div>
      <div className='formQuestion'>
        <TextField
          title='Franchise'
          value={franchise}
          onChange={setFranchise}
          suggestions={['Disney']}
        />
      </div>
      <div className='formQuestion'>
        <TextField
          title='Occasion'
          value={occasion2}
          onChange={setOccasion2}
        />
      </div>
      <div className='formQuestion'>
        <TextField
          title='Character'
          value={character}
          onChange={setCharacter}
        />
      </div>
      <div className='formQuestion'>
        <Toggle
          title='Signed'
          value={signed}
          onChange={setSigned}
          disabled={true}
        />
      </div>
      <div className='formQuestion'>
        <TextField
          title='Signed By'
          value={signedBy}
          onChange={setSignedBy}
          disabled={true}
        />
      </div>
      <div className='formQuestion'>
        <Toggle
          title='Personalize'
          value={personalize}
          onChange={setPersonalize}
        />
      </div>
      <div className='formQuestion'>
        <TextField
          title='Personalization Instructions'
          value={personalizationInstructions}
          onChange={setPersonalizationInstructions}
          disabled={!personalize}
        />
      </div>
      <div className='formQuestion'>
        <TextField
          title='Artist'
          value={artist}
          onChange={setArtist}
        />
      </div>
      <div className='formQuestion'>
        <TextField
          title='Artist'
          value={artist}
          onChange={setArtist}
        />
      </div>
      <div className='formQuestion'>
        <TextField
          title='Featured Person'
          value={featuredPerson}
          onChange={setFeaturedPerson}
        />
      </div>
      <div className='formQuestion'>
        <TextField
          title='Size'
          value={size}
          onChange={setSize}
        />
      </div>
      <div className='formQuestion'>
        <TextField
          title='Time Period Manufactured'
          value={timePeriodManufactured}
          onChange={setTimePeriodManufactured}
          default={decade.length > 0 ? `${decade[0]}0-${decade[0]}9` : ''}
        />
      </div>
      <div className='formQuestion'>
        <TextField
          title='California Prop 65 Warning'
          value={californiaProp65Warning}
          onChange={setCaliforniaProp65Warning}
          characterLimit={800}
        />
      </div>
      <div className='formQuestion'>
        <TextField
          title='Unit Quantity'
          value={unitQuantity}
          onChange={setUnitQuantity}
        />
      </div>
      <div className='formQuestion'>
        <SearchDropdown
          title='Unit Type'
          dropdownItems={DropdownData.getUnitTypes()}
          enableSearch={true}
          value={unitType}
          onChange={setUnitType}
          strict={true}
        />
      </div>
      <div className='formQuestion'>
        <Radio
          id='condition'
          radioButtons={['New', 'Used']}
          title='Condition'
          selected={condition}
          onChange={setCondition}
        />
      </div>
      <div className='formQuestion'>
        <Checklist
          title='Condition Types'
          checklistItems={['Tear', 'Crease', 'Bend', 'Pinhole']}
          selected={conditionTypes}
          onChange={setConditionTypes}
        />
      </div>
      <div className='formQuestion'>
        <TextArea
          title='Condition Description'
          value={conditionDescription}
          onChange={setConditionDescription}
          characterLimit={1000}
          disabled={true}
        />
      </div>










      <div className='formQuestion'>

      </div>

      
    </form>
  );
}

export default Listing;
