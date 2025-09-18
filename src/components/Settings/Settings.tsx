import React from 'react';
import { FormContext, FormContextType } from '../../FormContext';
import './Settings.css';

function Settings() {

  const FormData = React.useContext(FormContext) as FormContextType;
  console.log(Object.keys(FormData));

  return (
    <>
      <table className='settingsTable'>
        <tr>
          <th>Question Title</th>
          <th>Default Value</th>
          <th>Show Question</th>
        </tr>
        { Object.keys(FormData).map((formItem: string) => {
          // let { value, description, toggled, setToggled } = formItem;
          return (
            <tr key={formItem}>
              <td>{formItem}</td>
            </tr>
          );
        })

        }

      </table>
    </>
  );
}

export default Settings;