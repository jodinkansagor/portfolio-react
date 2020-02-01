import React from 'react';
import PropTypes from 'prop-types';
import styles from '../components/ProjectItem.css';
import ProjectList from './ProjectList';

const ProjectItem = ({ img, description, stack, siteLink, githubLink }) => {
  return (
    <section className={styles.projectItem}>
      <img src={img} />
      <p>{description}</p>
      <p>{stack}</p>
      <a href={siteLink}>site</a><span> // </span>
      <a href={githubLink}>github</a>

    </section>
  );
};

ProjectItem.propTypes = {
  img: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  stack: PropTypes.string.isRequired,
  siteLink: PropTypes.string.isRequired,
  githubLink: PropTypes.string.isRequired
}

export default ProjectItem;
