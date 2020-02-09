import React from 'react';
import { shallow } from 'enzyme';
import ProjectItem from './ProjectItem';

describe('ProjectItem component', () => {
  it('matches a snapshot', () => {
    const wrapper = shallow(<ProjectItem img={'img'} description={'description'} stack={'stack'} siteLink={'sitelink'} githubLink={'githublink'} />);
    expect(wrapper).toMatchSnapshot();
  });
});
