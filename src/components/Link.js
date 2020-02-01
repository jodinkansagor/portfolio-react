import React from 'react';
import PropTypes from 'prop-types';

const Link = ({ url, linkImg, linkName }) => {
  return (
    <>
      <a href={url}><img src={linkImg} /></a>
      <h2>{linkName}</h2>
    </>
  );
};

Link.propTypes = {
  url: PropTypes.string.isRequired,
  linkImg: PropTypes.string.isRequired,
  linkName: PropTypes.string.isRequired
}

export default Link;
