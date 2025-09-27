import React from 'react';
import TextField from '../TextField/TextField';
import Radio from '../Radio/Radio';
import './DateTime.css';

type PropType = {
  title: string;
  required?: boolean;
  value: {
    date: string;
    time: string;
    amPm: string;
  };
  onChange: Function;
  disabled?: boolean;
  id: string;
};

function DateTime({ title, required, value, onChange, disabled, id }: PropType) {

  const [error, setError] = React.useState(false);

  return (
    <div className={`dayContainer ${disabled && 'toggleDisabled'}`}>
      <div className={`title ${error && 'error'} ${disabled && 'disabled'}`}>{title}{required && '*'}</div>
      <div className='dateTimeInputs'>
        <div className='dateTimeContainer'>
          <TextField
            title='Date'
            value={value.date}
            onChange={(newValue: string) => onChange({ ...value, date: newValue })}
            width={150}
            disabled={disabled}
            id={`${id}_date`}

          />
          <TextField
            title='Time'
            value={value.time}
            onChange={(newValue: string) => onChange({ ...value, time: newValue })}
            width={150}
            disabled={disabled}
            id={`${id}_time`}
          />
        </div>
        <div className='amPmContainer'>
          <Radio
            title='AM/PM'
            radioButtons={['AM', 'PM']}
            value={value.amPm}
            onChange={(newValue: string) => onChange({ ...value, amPm: newValue })}
            disabled={disabled}
            id={`${id}_amPm`}
          />
        </div>
        
      </div>
    </div>
  );
}

export default DateTime;
