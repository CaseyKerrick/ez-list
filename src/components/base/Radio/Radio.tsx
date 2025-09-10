import React from 'react';
import './Radio.css';

type propType = {
  radioButtons: string[];
  title: string;
  onChange: Function;
  id: string;
  selected: string;
  required?: boolean;
}

function Radio(props: propType) {

  const handleChange = (item: string) => {
    return () => props.onChange(item);
  }

  return (
    <div className='radioButtonsContainer'>
      <div className='title'>{props.title}{props.required && '*'}</div>
      { props.radioButtons.length > 0 && props.radioButtons.map((radioButton: string) => (
        <span key={radioButton}>
          <input
            type='radio'
            className='button'
            id={radioButton}
            name={props.id}
            value={radioButton}
            onClick={handleChange(radioButton)}
          />
          <label htmlFor={radioButton} className={`radioButton ${radioButton === props.selected && 'checkedRadioButton'}` }>{radioButton}</label>
        </span>
      ))}
    </div>
  );
}

export default Radio;