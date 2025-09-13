import React from 'react';
import './Checklist.css';

type PropType = {
  title: string;
  checklistItems: string[];
  selected: string[];
  onChange: Function;
  required?: boolean;
  disabled?: boolean;
};

function Checklist(props: PropType) {

  const [error, setError] = React.useState(false);

  const handleChange = (item: string) => () => {
    const newSelected = props.selected.includes(item)
                          ? props.selected.filter(current => current !== item)
                          : [...props.selected, item]

    setError(!newSelected.length)
    props.onChange(newSelected);
  };

  const isSelected = (item: string) => {
    return props.selected.indexOf(item) > -1;
  };

  return (
    <div className='checklistContainer'>
       <div className={`title ${props.required && error && 'error'} ${props.disabled && 'disabled'}`}>{props.title}{props.required && '*'}</div>
      { props.checklistItems.length > 0 && props.checklistItems.map((checklistItem: string) => (
        <span key={checklistItem} onClick={handleChange(checklistItem)}>
          <input
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