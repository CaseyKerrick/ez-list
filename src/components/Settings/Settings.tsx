import React from 'react';
import { FormContext, FormContextType, FormEntry, defaults as FormDefaults } from '../../FormContext';
import Toggle from '../base/Toggle/Toggle';
import Util from '../../services/util/util';
import LocalStorage from '../../services/localStorage/localStorage';
import './Settings.css';

function Settings() {

  const FormData = React.useContext(FormContext) as FormContextType;

  const [defaultValues, setDefaultValues] = React.useState(FormDefaults);

  const createFormQuestion = (id: keyof typeof FormDefaults, question: FormEntry<any>) => {
    return React.createElement(
      question.type,
      {
        ...question.props,
        required: false,
        title: question.description,
        value: LocalStorage.getSavedValue('default_' + id),
        onChange: (item: any) => {
          LocalStorage.setSavedValue('default_' + id, item);
          setDefaultValues({ ...defaultValues, [id]: item });
        },
        id: id,
        disabled: false,
      }
    );
  };

    const createFormToggle = (id: string, question: FormEntry<any>) => {
    return React.createElement(
      Toggle,
      {
        ...question.props,
        required: false,
        title: 'Show',
        value: question.toggled,
        onChange: () => {
          LocalStorage.setToggle(id, !question.toggled);
          question.setToggled(!question.toggled);
        },
        id: id,
        disabled: false,
      }
    );
  };

  return (
    <>
      <table className='settingsTable'>
        <thead>
          <tr>
            <th className='settingsHeader'>Default Value</th>
            <th className='settingsHeader'>Show Question</th>
          </tr>
        </thead>
        <tbody>        
          { Util.getKeys(FormData).map(entry => {
            const formItem = FormData[entry];
            return (
              <tr key={entry}>
                <td className='settingsCell'>{createFormQuestion(entry, formItem)}</td>
                <td className='settingsCell'>{createFormToggle(entry, formItem)}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}

export default Settings;