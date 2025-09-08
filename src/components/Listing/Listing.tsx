import React from 'react';
import {
  FormControl,
  FormLabel,
} from '@mui/material';
import Radio from '../base/Radio/Radio';
import TextField from '../base/TextField/TextField';
import './Listing.css';


function Listing() {

  const [templateType, setTemplateType] = React.useState('');
  const [title, setTitle] = React.useState('');
  const [customLabelSKU, setCustomLabelSKU] = React.useState('');

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
          title='Custom Label (SKU)'
          value={customLabelSKU}
          onChange={setCustomLabelSKU}
          width={150}
        />
      </div>
      









      <div className='formQuestion'>
        <FormControl>
          <FormLabel id=''></FormLabel>
        </FormControl>
      </div>

      
    </form>
  );
}

export default Listing;
