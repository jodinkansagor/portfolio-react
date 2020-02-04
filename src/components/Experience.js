import React from 'react';
import styles from '../components/Experience.css';

const Experience = () => {
  return (
    <section className={styles.experienceName}>
      <h2>Experience</h2>
      <dl>
        <section className={styles.tech}>
          <dt>Technology</dt>
          <dd>JavaScript</dd>
          <dd>HTML</dd>
          <dd>CSS</dd>
          <dd>React</dd>
          <dd>React hooks</dd>
          <dd>Node.js</dd>
          <dd>Express</dd>
          <dd>PostgrSQL</dd>
          <dd>SQL</dd>
          <dd>MongoDB</dd>
          <dd>Mongoose</dd>
          <dd>Jest</dd>
          <dd>Q-Unit</dd>
        </section>
        <section className={styles.tools}>
          <dt>Tools</dt>
          <dd>Heroku</dd>
          <dd>GitHub</dd>
          <dd>Adobe CS</dd>
          <dd>Adobe xD</dd>
          <dd>Compass</dd>
          <dd>PgAdmin</dd>
          <dd>Compass</dd>
          <dd>Postman</dd>
          <dd className={styles.bottomTool}>Travis</dd>

          <dt className={styles.other}>Other Tools</dt>
          <dd>WordPress</dd>
          <dd>ArcGIS</dd>
          <dd>TDD</dd>
        </section>
      </dl>
    </section>
  );
};

export default Experience;
