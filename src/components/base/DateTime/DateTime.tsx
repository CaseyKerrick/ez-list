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

  const [date, setDate] = React.useState(value.date);
  const [time, setTime] = React.useState(value.time);
  const [amPm, setAmPm] = React.useState(value.amPm || 'AM');
  const [error, setError] = React.useState(false);


  // TODO: fix Object value not updating the big state
  // React.useEffect(() => {
  //   console.log(value.time);
  //   onChange({ date, time, amPm });
  // }, [date, time, amPm, onChange]);

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
          id={`${id}_date`}
        />
        <TextField
          title='Time'
          value={time}
          onChange={setTime}
          width={150}
          disabled={disabled}
          id={`${id}_time`}
        />
        <Radio
          title='AM/PM'
          radioButtons={['AM', 'PM']}
          value={amPm}
          onChange={setAmPm}
          disabled={disabled}
          id={`${id}_amPm`}
        />
      </div>
    </div>
  );
}

export default DateTime;
