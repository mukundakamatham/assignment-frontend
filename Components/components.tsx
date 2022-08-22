import * as React from 'react';
import Inputbox from './Inputbox';
import SelectBox from './SelectBox';
import Datepicker from './Datepicker';

const Components = {
  number: Inputbox,
  date: Datepicker,
  dropdown: SelectBox,
};

export default (block: any, handleChange: any) => {
  if (typeof Components[block.type] !== 'undefined') {
    return React.createElement(Components[block.type], {
      ...block,
      name: block.key,
      handleChange,
    });
  }
  return React.createElement(
    () => <div>The component {block.component} has not been created yet.</div>,
    { key: block._uid }
  );
};
