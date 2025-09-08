import React from 'react';
import {
  FormControl,
  FormLabel,
  TextField,
} from '@mui/material';
import Radio from '../base/Radio/Radio';
import './Listing.css';


function Listing() {

  const [templateType, setTemplateType] = React.useState('');
  const radioOnChange = (value: string) => {
    return () => setTemplateType(value);
  };
  



  return (
    <form>

      <div className='formQuestion'>
        <Radio
          id='templateType'
          radioButtons={['Topographical', 'Non-Topographical']}
          title='Template Type'
          onChange={radioOnChange}
          selected={templateType}
        />
      </div>

      <div className='formQuestion'>
        <FormControl>
          <FormLabel id='image-upload-label'>Image Upload</FormLabel>
          <span className='imageUploadPlaceholder'>&nbsp;</span>
        </FormControl>
      </div>

      <div className='formQuestion'>
        <FormControl>
          <TextField
            aria-labelledby='title-label'
            id='title'
            variant='outlined'
            label='Title'
          />
        </FormControl>
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
