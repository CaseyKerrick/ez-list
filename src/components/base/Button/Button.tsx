import './Button.css';

type PropType = {
  onClick: Function;
}

function Button(props: PropType) {

  const buttonClicked = () => {
    props.onClick();
  };

  return (
    <input
      type='button'
      value='List It!'
      onClick={buttonClicked}
      className='primaryButton'
    />
  );
}

export default Button;