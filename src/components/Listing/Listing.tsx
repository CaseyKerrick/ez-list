import React from 'react';
import {
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
  TextField,
} from '@mui/material';
import './Listing.css';
import { NONAME } from 'dns';

function Listing() {
  return (
    <form>
      <div className='formQuestion'>
        <FormControl>
          <FormLabel id='template-type-label'>Template Type</FormLabel>
          <RadioGroup aria-labelledby='template-type-label' name='template-type'>
            <FormControlLabel value='Topographical' control={<Radio />} label='Topographical' />
            <FormControlLabel value='Non-Topographical' control={<Radio />} label='Non-Topographical' />
          </RadioGroup>
        </FormControl>
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
