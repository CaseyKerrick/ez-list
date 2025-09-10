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
};

function TextField(props: PropType) {

  const [error, setError] = React.useState(false);

  const handleChange = (e: any) => {
    setError(false);
    props.onChange(e.target?.value || '');
  };

  const suggestionSelect = (item: string) => () => {
    setError(false);
    props.onChange(item);
  };

  const widthChooser = (characterLimit?: boolean) => {
    return props.width ? `${props.width + (characterLimit ? 15 : 0)}px` : 'inherit';
  };

  const inputBlur = () => {
    if (props.required && !props.value) {
      setError(true);
    }
  };

  return (
    <>
      <div>
        <div className={`textFieldTitle ${error && 'error'}`}>{props.title}{props.required && '*'}</div>
        <input
          type='text'
          className='textInput'
          onChange={handleChange}
          defaultValue={props.value}
          style={{ width: widthChooser() }}
          maxLength={props.characterLimit}
          onBlur={inputBlur}
        />
        { props.characterLimit && (
          <div className='characterLimit' style={{ width: widthChooser(true) }}>{props.value?.length || 0}/{props.characterLimit}</div>
        )}
        <div className='suggestions' style={{ width: widthChooser(true) }}>
          { props.suggestions && props.suggestions.map(item => 
            <div className='suggestionBubble' onClick={suggestionSelect(item)}>{item}</div>
          )}
        </div>
      </div>
    </>
  );
}

export default TextField;
