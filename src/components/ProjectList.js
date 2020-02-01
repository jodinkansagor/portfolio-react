import React from 'react';
import styles from '../components/ProjectList.css';
import PropTypes from 'prop-types';
import ProjectItem from '../components/ProjectItem';

const ProjectList = ({ projectList }) => {
  const projectElements = projectList.map(projectItem => (
    <li key={projectItem.name}>
      <ProjectItem {...projectItem} />
    </li>
  ));

  return (
    <>
      <h2>Select Projects</h2>
      <ul>
        {projectElements}
      </ul>
    </>
  );
};

ProjectList.proptypes = {
  projectList: PropTypes.arrayOf(PropTypes.shape({
    img: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    stack: PropTypes.string.isRequired,
    siteLink: PropTypes.string.isRequired,
    githubLink: PropTypes.string.isRequired
  })).isRequired
};

export default ProjectList;
