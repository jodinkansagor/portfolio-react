import React, { Component } from 'react';
import Name from '../components/common/Name';
import LinkList from '../components/LinkList';
import styles from '../containers/Container.css';
import AboutMe from '../components/AboutMe';
import Experience from '../components/Experience';
import ProjectList from '../components/ProjectList';
import Footer from '../components/common/Footer';
import { linkList, projectList } from '../data/data';


export default class Container extends Component {


  render() {
    return (
      <section className={styles.bodySection}>
        <section className={styles.all}>
          <section className={styles.header}>
            <Name />
            <LinkList linkList={linkList} />
            <div className={styles.experienceSideBar}>

              <Experience />
            </div>
          </section>
          <section className={styles.bottomHalf}>
            <AboutMe />
            <section className={styles.experienceBody}>
              <Experience />
            </section>
            <ProjectList projectList={projectList} />
            <Footer />
          </section>
        </section>
      </section>
    );
  }

}
