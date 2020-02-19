import React from 'react';
import styles from './Tech.css';

const Tech = () => (
  <section className={styles.tech}>
    <h1 className={styles.heading}>Tech I like:</h1>
    <section className={styles.techNames}>
      <section className={styles.project1}>
        <h1>React / Redux</h1>
        <h1>Javascript</h1>
        <h1>HTML</h1>
        <h1>CSS</h1>
      </section>
      <section className={styles.project2}>
        <h1>MongoDB</h1>
        <h1>Mongoose</h1>
        <h1>PostgreSQL</h1>
      </section>
      <section className={styles.project3}>
        <h1>NodeJS</h1>
        <h1>Express</h1>
        <h1>Jest</h1>
        <h1>ArcGIS</h1>
      </section>
    </section>
  </section>
);

export default Tech;
