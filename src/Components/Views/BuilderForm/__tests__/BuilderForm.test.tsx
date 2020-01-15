import React from 'react';
import { shallow } from 'enzyme';

import BuilderForm from '../BuilderForm';

describe('<BuilderForm />', () => {
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

  const formHandler = {
    setGivenName: jest.fn(),
    setSurname: jest.fn(),
    setEmail: jest.fn(),
    setTel: jest.fn(),
    setHouse: jest.fn(),
    setStreet: jest.fn(),
    setSuburb: jest.fn(),
    setState: jest.fn(),
    setPostcode: jest.fn(),
    setCountry: jest.fn(),
    setAvatar: jest.fn()
  };

  it('should render by default', () => {
    const wrapper = shallow(
      <BuilderForm formData={formData} formHandler={formHandler} />
    );
    expect(wrapper).toMatchSnapshot();
  });
});
