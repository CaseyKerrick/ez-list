import React from 'react';
import './TextField.css';

type PropType = {
  characterLimit?: number;
  title: string;
  value: string;
  onChange: Function;
  width?: number;
  required?: boolean;
  suggestions?: string[];
  disabled?: boolean;
  default?: string;
};

function TextField(props: PropType) {

  const [error, setError] = React.useState(false);
  const [pristine, setPristine] = React.useState(true);

  React.useEffect(() => {
    if (pristine && props.default) {
      props.onChange(props.default);
    }
  }, [pristine, props.default, props.onChange, props]);

  const handleChange = (e: any) => {
    setError(false);
    setPristine(false);
    props.onChange(e.target?.value || '');
  };

  const suggestionSelect = (item: string) => () => {
    setError(false);
    setPristine(false);
    props.onChange(item);
  };

  const widthChooser = (characterLimit?: boolean) =>
    `${(props.width || 250) + (characterLimit ? 15 : 0)}px`;

  const inputBlur = () => {
    if (props.required && !props.value) {
      setError(true);
    }
  };

  return (
    <>
      <div className={`textFieldTitle ${error && 'error'} ${props.disabled && 'disabled'}`}>{props.title}{props.required && '*'}</div>
      <input
        type='text'
        className='textInput'
        onChange={handleChange}
        defaultValue={props.value}
        style={{ width: widthChooser() }}
        maxLength={props.characterLimit}
        onBlur={inputBlur}
        disabled={!!props.disabled}
      />
      { props.characterLimit && (
        <div className={`characterLimit ${props.disabled && 'disabled'}`} style={{ width: widthChooser(true) }}>{props.value?.length || 0}/{props.characterLimit}</div>
      )}
      <div className='suggestions' style={{ width: widthChooser(true) }}>
        { props.suggestions && props.suggestions.map(item => 
          <div className='suggestionBubble' onClick={suggestionSelect(item)} key={`suggestion_${item}`}>{item}</div>
        )}
      </div>
    </>
  );
}

export default TextField;
