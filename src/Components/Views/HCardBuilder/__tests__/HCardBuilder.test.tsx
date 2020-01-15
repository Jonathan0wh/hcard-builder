import React from 'react';
import { shallow } from 'enzyme';

import HCardBuilder from '../HCardBuilder';

describe('<HCardBuilder />', () => {
  it('should render by default', () => {
    const wrapper = shallow(<HCardBuilder />);
    expect(wrapper).toMatchSnapshot();
  });
});
