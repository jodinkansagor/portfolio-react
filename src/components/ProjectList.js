import React from 'react';
import PropTypes from 'prop-types';
import styles from '../components/ProjectList.css';
import ProjectItem from '../components/ProjectItem';

//why is my linter unhappy here?

const ProjectList = ({ projectList }) => {
  const projectElements = projectList.map((projectItem) => (
    <li key={projectItem.name}>
      <ProjectItem {...projectItem} />
    </li>
  ));

  return (
    <div className={styles.projectList}>
      <h2>Select Projects</h2>
      <ul>
        {projectElements}
      </ul>
    </div>
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
