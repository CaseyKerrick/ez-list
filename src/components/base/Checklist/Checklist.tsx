import React from 'react';
import './Checklist.css';

type PropType = {
  title: string;
  checklistItems: string[];
  value: string[];
  onChange: Function;
  required?: boolean;
  disabled?: boolean;
  id: string;
  hidden?: boolean;
};

function Checklist(props: PropType) {

  const [error, setError] = React.useState(false);

  const handleChange = (item: string) => () => {
    const newSelected = props.value.includes(item)
                          ? props.value.filter(current => current !== item)
                          : [...props.value, item]

    setError(!newSelected.length)
    props.onChange(newSelected);
  };

  const isSelected = (item: string) => {
    return props.value.indexOf(item) > -1;
  };

  return (
    <div className='checklistContainer'>
       <div className={`title ${props.required && error && 'error'} ${props.disabled && 'disabled'}`}>{props.title}{props.required && '*'}</div>
      { props.checklistItems.length > 0 && props.checklistItems.map((checklistItem: string) => (
        <span key={checklistItem} onClick={handleChange(checklistItem)}>
          <input
            id={`${props.id}_${checklistItem}`}
            type='checkbox'
            className='checkbox'
            name={checklistItem}
            value={checklistItem}
          />
          <label htmlFor={checklistItem} className={`checklistItem ${isSelected(checklistItem) && 'checkboxChecked'}`}>{checklistItem}</label>
        </span>
      ))}
    </div>
  );
};

export default Checklist;