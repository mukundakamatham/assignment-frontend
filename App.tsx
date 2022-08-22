import * as React from 'react';
import Components from './Components/components';
import './style.css';

export default function App() {
  const [drug1value, setDrug1Value] = React.useState<object | null>();
  const [drug2value, setDrug2Value] = React.useState<object | null>();

  const drug1 = {
    fields: [
      {
        label: 'Date of Birth (YYYY-MM-DD)',
        key: 'birthday',
        isRequired: true,
        order: 1,
        isReadonly: false,
        type: 'date',
      },
      {
        label: 'Gestational Age',
        key: 'gestationalAge',
        isRequired: true,
        order: 3,
        unit: 'weeks',
        isReadonly: false,
        type: 'number',
      },
      {
        label: 'Sex',
        items: [
          {
            value: 'male',
            text: 'Male',
          },
          {
            value: 'female',
            text: 'Female',
          },
        ],
        key: 'sex',
        isRequired: true,
        order: 4,
        isReadonly: false,
        type: 'dropdown',
      },
      {
        label: 'Height',
        key: 'height',
        isRequired: true,
        order: 5,
        unit: 'cm',
        isReadonly: false,
        type: 'number',
      },
      {
        label: 'Weight',
        key: 'weight',
        isRequired: true,
        order: 6,
        unit: 'kg',
        isReadonly: false,
        type: 'number',
      },
      {
        label: 'BMI',
        key: 'bmi',
        order: 11,
        unit: 'kg/m²',
        isReadonly: true,
        type: 'number',
      },
    ],
  };
  drug1.fields.sort((a, b) => a.order - b.order);
  let drug2 = {
    fields: [
      {
        label: 'Date of Birth (YYYY-MM-DD)',
        key: 'birthday',
        isRequired: true,
        order: 1,
        isReadonly: false,
        type: 'date',
      },
      {
        label: 'Sex',
        items: [
          {
            value: 'male',
            text: 'Male',
          },
          {
            value: 'female',
            text: 'Female',
          },
        ],
        key: 'sex',
        isRequired: true,
        order: 2,
        isReadonly: false,
        type: 'dropdown',
      },
      {
        label: 'Weight',
        key: 'weight',
        isRequired: true,
        order: 3,
        unit: 'kg',
        isReadonly: false,
        type: 'number',
      },
    ],
  };
  drug2.fields.sort((a, b) => a.order - b.order);

  const hanlechange = (e: any, name: any) => {
    let data = { ...drug1value, [name]: e.target.value };
    setDrug1Value(data);
    console.log(data, 'data');
  };
  const hanlechangedrug2 = (e: any, name: any) => {
    let data = { ...drug2value, [name]: e.target.value };
    setDrug2Value(data);
    console.log(data, 'data');
  };
  return (
    <div className="App">
      <div>
        <h1>Drug1 form</h1>
        {drug1.fields.map((block) => Components(block, hanlechangedrug2))}
      </div>
      <div>
        <h1>Drug 2 form</h1>
        {drug2.fields.map((block) => Components(block, hanlechange))}
      </div>
    </div>
  );
}
