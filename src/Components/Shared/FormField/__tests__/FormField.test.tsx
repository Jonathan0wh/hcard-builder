import React from 'react';
import { shallow } from 'enzyme';

import FormField from '../FormField';

describe('<FormField />', () => {
  it('should render by default', () => {
    const wrapper = shallow(
      <FormField label="Text" value={''} setValue={jest.fn()} />
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('should render email field', () => {
    const wrapper = shallow(
      <FormField label="Text" value={''} setValue={jest.fn()} type="email" />
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('should render tel input', () => {
    const wrapper = shallow(
      <FormField label="Text" value={''} setValue={jest.fn()} type="tel" />
    );
    expect(wrapper).toMatchSnapshot();
  });
});
