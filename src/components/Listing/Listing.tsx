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

  return (
    <form>
      <div className='formQuestion'>
        <TextField 
          characterLimit={80}
          title='Title'
          value={title}
          onChange={setTitle}
          width={700}
        />
      </div>
      <div className='formQuestion'>
        <Radio
          id='templateType'
          radioButtons={['Topographical', 'Non-Topographical']}
          title='Template Type'
          onChange={setTemplateType}
          selected={templateType}
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
          // priorityItems={['Toasty', 'Stormy', 'Casey', 'Kai']}
          enableSearch={true}
          strict={true}
          onChange={setStoreCategory1}
          value={storeCategory1}
          required={true}
        />
      </div>
      <div className='formQuestion'>
        <SearchDropdown
          title='Store Category 2'
          dropdownItems={DropdownData.getStoreCategories()}
          // priorityItems={['Toasty', 'Stormy', 'Casey', 'Kai']}
          enableSearch={false}
          strict={false}
          onChange={setStoreCategory2}
          value={storeCategory2}
        />
      </div>
      



      
    </form>
  );
}

export default Listing;
