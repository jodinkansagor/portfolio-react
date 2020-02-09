import React from 'react';
import PropTypes from 'prop-types';
import styles from '../components/Link.css';

const Link = ({ url, linkImg, linkName }) => {
  return (
    <section className={styles.linkSection}>
      <a href={url} target="_blank"><img src={linkImg} />
        <h2>{linkName}</h2></a>
    </section>
  );
};

Link.propTypes = {
  url: PropTypes.string,
  linkImg: PropTypes.string,
  linkName: PropTypes.string
}

export default Link;
