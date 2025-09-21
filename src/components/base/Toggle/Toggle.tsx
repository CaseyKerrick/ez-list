import React from 'react';
import './Toggle.css';

type PropType = {
  title: string;
  required?: boolean;
  disabled?: boolean;
  value: boolean;
  onChange: Function;
  id: string;
};

function Toggle(props: PropType) {

  const handleChange = () => () => {
    if (!props.disabled) {
      props.onChange(!props.value);
    }
  };

  return (
    <div className={`checklistContainer ${props.disabled && 'toggleDisabled'}`}>
      <div className={`title ${props.disabled && 'disabled'}`}>{props.title}{props.required && '*'}</div>
      <span onClick={handleChange()} className={`toggleButton ${props.value ? 'toggleButtonOn' : 'toggleButtonOff'}`}>
        <input type='checkbox' className='checkbox' id={props.id} />
        <div className={`toggleCircle ${props.value ? 'toggleCircleRight' : 'toggleCircleLeft'}`}></div>
      </span>
    </div>
  );
}

export default Toggle;