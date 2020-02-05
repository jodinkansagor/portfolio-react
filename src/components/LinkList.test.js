import React from 'react';
import { shallow } from 'enzyme';
import LinkList from './LinkList';

describe('LinkList component', () => {
  it('matches a snapshot', () => {
    const wrapper = shallow(<LinkList linkList={['link', 'link']} />);
    expect(wrapper).toMatchSnapshot();
  });
});