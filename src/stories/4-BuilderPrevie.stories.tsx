import React from 'react';

import 'index.scss';
import BuilderPreview from 'Components/Views/BuilderPreview';

export default {
  title: 'BuilderPreview',
  component: BuilderPreview
};

export const TextFormField = () => {
  const givenName = 'Sam',
    surname = 'Fairtax',
    email = 'sam.fairtax@fairtaxmedia.com.au',
    tel = '02 9282 2833',
    house = '1',
    street = 'Darling Island Road',
    suburb = 'Pyrmont',
    state = 'NSW',
    postcode = '2009',
    country = 'Australia',
    avatar = null;

  return (
    <BuilderPreview
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
    />
  );
};
