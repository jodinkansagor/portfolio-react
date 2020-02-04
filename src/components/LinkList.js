import React from 'react';
import Link from './Link';
import PropTypes from 'prop-types';
import styles from '../components/LinkList.css';

const LinkList = ({ linkList }) => {
  const linkElements = linkList.map((link, i) => (
    <li key={i}>
      <Link link={link.link} linkImg={link.linkImg} linkName={link.linkName} />
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
