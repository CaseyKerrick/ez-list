import React from 'react';
import DescriptionData from '../../services/descriptionData/descriptionData';
import './Listing.css';
import Button from '../base/Button/Button';
import { FormContext, FormContextType, FormEntry } from '../../FormContext';
import Util from '../../services/util/util';


function Listing() {

  const FormData = React.useContext(FormContext) as FormContextType;

  React.useEffect(() => {
    const descrip = [...FormData.conditionTypes.value.map(DescriptionData.getConditionDescriptionFor), DescriptionData.getBaseConditionDescription()].join('\n');
    FormData.conditionDescription.set(descrip);
  }, [FormData.conditionTypes.value, FormData.conditionDescription]);

  const submitForm = () => {
    alert('Listing has been submitted!');
  };

  const createFormQuestion = (id: string, question: FormEntry<any>) => {
    return React.createElement(
      question.type,
      {
        ...question.props,
        required: question.required,
        title: question.description,
        value: question.value,
        onChange: question.set,
        id: id,
      }
    );
  };

  return (
    <form>
      { Util.getKeys(FormData).map(entry => {
        return (
          <div className={`formQuestion ${!(FormData[entry] as any).toggled && 'hideQuestion'}`} key={entry}>
            {createFormQuestion(entry, FormData[entry])}
          </div>
        );
      })}
      <div className='formQuestion'>
        <Button onClick={submitForm} />
      </div>
    </form>
  );
}

export default Listing;
