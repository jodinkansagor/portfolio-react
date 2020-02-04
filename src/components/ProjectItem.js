import React from 'react';
import PropTypes from 'prop-types';
import styles from '../components/ProjectItem.css';

const ProjectItem = ({ img, description, stack, siteLink, githubLink }) => {
  return (
    <section className={styles.projectItem}>
      <img src={img} />
      <p>{description}</p>
      <p className={styles.stack}>{stack}</p>
      <section className={styles.links}>
        <a href={siteLink}>site{' '}</a>
        <p>//</p>
        <a href={githubLink}>github</a>
      </section>

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
