import React from 'react';
import Link from './Link';
import PropTypes from 'prop-types';
import  '../components/LinkList.css';

const LinkList = ({ linkList }) => {
  const linkElements = linkList.map((link, i) => (
    <li key={i}>
      <Link url={link.url} linkImg={link.linkImg} linkName={link.linkName} />
    </li>

  ));

  return (
    <ul>
      {linkElements}
    </ul>
  );
};

LinkList.propTypes = {
  linkList: PropTypes.arrayOf(PropTypes.shape({
    url: PropTypes.string.isRequired,
    linkImg: PropTypes.string.isRequired,
    linkName: PropTypes.string.isRequired
  })).isRequired
};

export default LinkList;
