import React from 'react';
import { shallow } from 'enzyme';
import Link from './Link';

describe('Link component', () => {
  it('matches a snapshot', () => {
    const wrapper = shallow(<Link link={'link'} />);
    expect(wrapper).toMatchSnapshot();
  });
});
