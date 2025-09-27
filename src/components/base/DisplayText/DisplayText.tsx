import parse from 'html-react-parser';
import './DisplayText.css';

type PropType = {
  title: string;
  value: string;
  parseHtml?: boolean;
  width?: number;
  id: string;
};

function DisplayText(props: PropType) {

  const widthChooser = (characterLimit?: boolean) =>
  `${(props.width || 675) + (characterLimit ? 15 : 0)}px`;

  return (
    <div style={{ width: widthChooser() }}>
      <div className='textFieldTitle'>{props.title}</div>
      <div className='textAreaDisplay' data-testid={props.id}>{props.parseHtml ? parse(props.value) : props.value}</div>
    </div>
  );
}

export default DisplayText;