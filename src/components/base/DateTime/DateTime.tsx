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
};

function DateTime({ title, required, value, onChange, disabled }: PropType) {

  const [date, setDate] = React.useState(value.date);
  const [time, setTime] = React.useState(value.time);
  const [amPm, setAmPm] = React.useState(value.amPm || 'AM');
  const [error, setError] = React.useState(false);


  React.useEffect(() => {
    onChange({ date, time, amPm });
  }, [date, time, amPm, onChange]);

  return (
    <div className={`dateTimeContainer ${disabled && 'toggleDisabled'}`}>
      <div className={`title ${error && 'error'} ${disabled && 'disabled'}`}>{title}{required && '*'}</div>
      <div className='dateTimeInputs'>
        <TextField
          title='Date'
          value={date}
          onChange={setDate}
          width={150}
          disabled={disabled}
        />
        <TextField
          title='Time'
          value={time}
          onChange={setTime}
          width={150}
          disabled={disabled}
        />
        <Radio
          id='amPm'
          title='AM/PM'
          radioButtons={['AM', 'PM']}
          selected={amPm}
          onChange={setAmPm}
          disabled={disabled}
        />
      </div>
    </div>
  );
}

export default DateTime;
