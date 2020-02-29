import React from 'react';
import styles from './Project.css';

const Projects = () => (
  <section className={styles.project}>
    <section className={styles.projectTitle}>
      <h1>Things I have made: </h1>
    </section>
    <section>
      <a href="https://coffeepluscardspdx.herokuapp.com" target="_blank">Coffee + Cards,</a>
      <a href="https://markovtwain.herokuapp.com" target="_blank">Markov Twain,</a>
      <a href="https://treksntrails.herokuapp.com" target="_blank">Treks &apos;n Trails</a>
    </section>
  </section>
);

export default Projects;
