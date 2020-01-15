import React, { useState } from 'react';

import 'index.scss';
import FormField from 'Components/Shared/FormField';

export default {
  title: 'FormField',
  component: FormField
};

export const TextFormField = () => {
  const [value, setValue] = useState('');

  return <FormField label="Text" value={value} setValue={setValue} />;
};

export const EmailFormField = () => {
  const [value, setValue] = useState('');

  return (
    <FormField label="EMAIL" value={value} setValue={setValue} type="email" />
  );
};

export const TelFormField = () => {
  const [value, setValue] = useState('');

  return <FormField label="TEL" value={value} setValue={setValue} type="tel" />;
};
