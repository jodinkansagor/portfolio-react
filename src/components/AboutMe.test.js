import React from 'react';
import { shallow } from 'enzyme';
import AboutMe from './AboutMe';

describe('AboutMe component', () => {
  it('matches a snapshot', () => {
    const wrapper = shallow(<AboutMe />);
    expect(wrapper).toMatchSnapshot();
  });
});