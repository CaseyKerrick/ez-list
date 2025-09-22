import './Button.css';

type PropType = {
  onClick: Function;
  title: string;
}

function Button(props: PropType) {

  const buttonClicked = () => {
    props.onClick();
  };

  return (
    <input
      type='button'
      value={props.title}
      onClick={buttonClicked}
      className='primaryButton'
    />
  );
}

export default Button;