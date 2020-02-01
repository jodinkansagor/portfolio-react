import React from 'react';
import styles from '../components/ProjectList.css';
import PropTypes from 'prop-types';

const ProjectList = ({ projectList }) => {
  const projectElements = projectList.ma(project => (
    <li key={project.name}>


    </li>
  ));
};

export default ProjectList