import React, { Component } from 'react';
import Name from '../components/common/Name';
import LinkList from '../components/LinkList';
import styles from '../containers/Container.css';
import AboutMe from '../components/AboutMe';
import Experience from '../components/Experience';

export default class Container extends Component {

  linkList = [
    {
      url: 'https://github.com/jodinkansagor',
      linkImg: '../src/assets/github-logo.png',
      linkName: '/jodinkansagor'
    },
    {
      url: 'https://www.linkedin.com/in/jodikansagor/',
      linkImg: '../src/assets/linkedin.png',
      linkName: '/jodikansagor'
    },
    {
      url: 'mailto:jodinkansagor@gmail.com',
      linkImg: '../src/assets/email.png',
      linkName: 'jodinkansagor@gmail.com'
    }
  ]

  render() {
    return (
      <>
        <section className={styles.header}>
          <Name />
          <LinkList linkList={this.linkList} />
          <AboutMe />
          <Experience />
        </section>
      </>
    );
  }

}
