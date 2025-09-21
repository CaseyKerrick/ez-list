import './Radio.css';

type propType = {
  radioButtons: string[];
  title: string;
  onChange: Function;
  id: string;
  value: string;
  required?: boolean;
  disabled?: boolean;
}

function Radio(props: propType) {

  const handleChange = (item: string) => () =>
    props.onChange(item);

  const isSelected = (item: string) => item === props.value;

  return (
    <div className={`radioButtonsContainer ${props.disabled && 'toggleDisabled'}`}>
      <div className={`title ${props.disabled && 'disabled'}`}>{props.title}{props.required && '*'}</div>
      { props.radioButtons.length > 0 && props.radioButtons.map((radioButton: string) => (
        <span key={radioButton}>
          <input
            type='radio'
            className='button'
            id={radioButton}
            name={props.id}
            value={radioButton}
            onClick={handleChange(radioButton)}
            disabled={props.disabled}
          />
          <label htmlFor={radioButton} className={`radioButton ${isSelected(radioButton) && 'checkedRadioButton'} ${isSelected(radioButton) && props.disabled && 'disabledSelectedButton'} ${props.disabled && 'disabledButton'}` }>{radioButton}</label>
        </span>
      ))}
    </div>
  );
}

export default Radio;