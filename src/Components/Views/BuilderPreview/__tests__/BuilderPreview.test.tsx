import React from 'react';
import { shallow } from 'enzyme';

import BuilderPreview from '../BuilderPreview';

describe('<BuilderPreview />', () => {
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

  const formData = {
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
  };

  it('should render by default', () => {
    const wrapper = shallow(<BuilderPreview formData={formData} />);
    expect(wrapper).toMatchSnapshot();
  });
});
