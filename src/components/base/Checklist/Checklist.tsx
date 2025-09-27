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
};

function Checklist(props: PropType) {

  const [error, setError] = React.useState(false);

  const handleChange = (item: string) => () => {
    if (!props.disabled) {
      const newSelected = props.value.includes(item)
                            ? props.value.filter(current => current !== item)
                            : [...props.value, item]

      setError(!newSelected.length)
      props.onChange(newSelected);
    }
  };

  const isSelected = (item: string) => {
    return props.value.indexOf(item) > -1;
  };

  const displayClassWhen = (condition: any, className: string, elseClass?: string) =>
    !!condition ? className : (elseClass || '');

  return (
    <div className={`checklistContainer ${displayClassWhen(props.disabled, 'checklistContainerDisabled')}`}>
      <div className={`title ${displayClassWhen(props.required && error, 'error')} ${displayClassWhen(props.disabled, 'disabled')}`}>{props.title}{props.required && '*'}</div>
      <div className='checklistButtonContainer'>
        { props.checklistItems.length > 0 && props.checklistItems.map((checklistItem: string) => (
          <span key={checklistItem} onClick={handleChange(checklistItem)} data-testid={`${props.id}_span_${checklistItem}`}>
            <input
              id={`${props.id}_${checklistItem}`}
              data-testid={`${props.id}_${checklistItem}`}
              type='checkbox'
              className='checkbox'
              name={checklistItem}
              value={checklistItem}
              checked={isSelected(checklistItem)}
              onChange={handleChange(checklistItem)}
            />
            <label
              htmlFor={checklistItem}
              className={`checklistItem ${displayClassWhen(isSelected(checklistItem), 'checkboxChecked')} ${displayClassWhen(props.disabled, 'checkboxDisabled')} ${displayClassWhen(props.disabled && isSelected(checklistItem), 'checkboxCheckedDisabled')}`}
            >
              {checklistItem}
            </label>
          </span>
        ))}
      </div>
    </div>
  );
};

export default Checklist;