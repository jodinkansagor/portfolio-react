import React from 'react';
import { shallow } from 'enzyme';
import ProjectList from './ProjectList';

describe('ProjectList component', () => {
  it('matches a snapshot', () => {
    const wrapper = shallow(<ProjectList projectList={['project', 'project']} />);
    expect(wrapper).toMatchSnapshot();
  });
});
