import React from 'react';
import Radio from '../base/Radio/Radio';
import TextField from '../base/TextField/TextField';
import SearchDropdown from '../base/SearchDropdown/SearchDropdown';
import DropdownData from '../../services/dropdownData/dropdownData';
import './Listing.css';


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
          priorityItems={DropdownData.getCountriesRegionsOfManufacturePriority()}
        />
      </div>










      <div className='formQuestion'>

      </div>

      
    </form>
  );
}

export default Listing;
