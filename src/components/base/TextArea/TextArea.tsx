import './TextArea.css';

type PropType = {
  title: string;
  value: string;
  onChange: Function;
  required?: boolean;
  characterLimit?: number;
  width?: number;
  disabled?: boolean;
};

function TextArea(props: PropType) {

  const handleChange = (e: any) => {
    props.onChange(e.target?.value || '');
  };

  const widthChooser = (characterLimit?: boolean) =>
    `${(props.width || 500) + (characterLimit ? 15 : 0)}px`;

  return (
    <>
      <div className={`textFieldTitle ${props.disabled && 'disabled'}`}>{props.title}{props.required && '*'}</div>
      <textarea
        onChange={handleChange}
        style={{ width: widthChooser() }}
        className='textAreaInput'
        rows={4}
        disabled={!!props.disabled}
        value={props.value}
      />
      { props.characterLimit && (
        <div className={`characterLimit ${props.disabled && 'disabled'}`} style={{ width: widthChooser(true) }}>{props.value?.length || 0}/{props.characterLimit}</div>
      )}
    </>
  );
}

export default TextArea;
