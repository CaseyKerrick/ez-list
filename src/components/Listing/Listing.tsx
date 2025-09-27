import React from 'react';
import './Listing.css';
import Button from '../base/Button/Button';
import { FormContext, FormContextType, FormEntry } from '../../FormContext';
import Util from '../../services/util/util';

const widths = { 1: 147, 2: 342, 4: 732 }

function Listing() {

  const FormData = React.useContext(FormContext) as FormContextType;

  const submitForm = () => {
    alert('Listing has been submitted!');
  };

  const createFormQuestion = (id: string, question: FormEntry<any>) => {
    return React.createElement(
      question.type,
      {
        width: widths[question.columnWidth as keyof typeof widths],
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
    <form className='formContainer'>
      { Util.getKeys(FormData).map(entry => {
        return (
          <div
            className={`formQuestion ${(!FormData[entry as keyof typeof FormData].toggled || FormData[entry as keyof typeof FormData].hidden) && 'hideQuestion'}`}
            key={entry}
            style={{ gridColumn: `span ${FormData[entry as keyof typeof FormData].columnWidth || 1}`, }}
          >
            {createFormQuestion(entry, FormData[entry])}
          </div>
        );
      })}
      <div className='formQuestion'>
        <Button title='List It!' onClick={submitForm} id='submitButton' />
      </div>
    </form>
  );
}

export default Listing;
