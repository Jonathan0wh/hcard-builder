import React, { useState } from 'react';

import 'index.scss';
import BuilderForm from 'Components/Views/BuilderForm';

export default {
  title: 'BuilderForm',
  component: BuilderForm
};

export const TextFormField = () => {
  const [givenName, setGivenName] = useState('');
  const [surname, setSurname] = useState('');
  const [email, setEmail] = useState('');
  const [tel, setTel] = useState('');
  const [house, setHouse] = useState('');
  const [street, setStreet] = useState('');
  const [suburb, setSuburb] = useState('');
  const [state, setState] = useState('');
  const [postcode, setPostcode] = useState('');
  const [country, setCountry] = useState('');
  const [avatar, setAvatar] = useState();

  return (
    <BuilderForm
      formData={{
        givenName,
        surname,
        email,
        tel,
        house,
        street,
        suburb,
        state,
        postcode,
        country,
        avatar
      }}
      formHandler={{
        setGivenName,
        setSurname,
        setEmail,
        setTel,
        setHouse,
        setStreet,
        setSuburb,
        setState,
        setPostcode,
        setCountry,
        setAvatar
      }}
    />
  );
};
