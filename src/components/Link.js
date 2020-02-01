import React from 'react';
import PropTypes from 'prop-types';
import styles from '../components/Link.css';

const Link = ({ url, linkImg, linkName }) => {
  return (
    <section className={styles.linkSection}>
      <a href={url}><img src={linkImg} /></a>
      <h2>{linkName}</h2>
    </section>
  );
};

Link.propTypes = {
  url: PropTypes.string.isRequired,
  linkImg: PropTypes.string.isRequired,
  linkName: PropTypes.string.isRequired
}

export default Link;
