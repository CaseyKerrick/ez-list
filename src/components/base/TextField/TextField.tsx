import './TextField.css';

type PropType = {
  characterLimit?: number;
  title: string;
  value: string;
  onChange: Function;
  width?: number;
};

function TextField(props: PropType) {

  const handleChange = (e: any) => {
    props.onChange(e.target?.value || '');
  };

  const widthChooser = (characterLimit?: boolean) => {
    return props.width ? `${props.width + (characterLimit ? 15 : 0)}px` : 'inherit';
  };

  return (
    <>
      <div>
        <div className='textFieldTitle'>{props.title}</div>
        <input
          type='text'
          className='textInput'
          onChange={handleChange}
          defaultValue={props.value}
          style={{ width: widthChooser() }}
          maxLength={props.characterLimit}
        />
        { props.characterLimit && (
          <div className='characterLimit' style={{ width: widthChooser(true) }}>{props.value?.length || 0}/{props.characterLimit}</div>
        )}
      </div>
    </>
  );
}

export default TextField;
