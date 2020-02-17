import React from 'react';
import styles from './Project.css';

const Projects = () => (
  <section className={styles.project}>
    <h1>Things I have made: </h1>
    <a href="https://coffeepluscardspdx.herokuapp.com">Coffee + Cards</a>
    <a href="https://markovtwain.herokuapp.com">Markov Twain</a>
    <a href="https://unicorn-gathering.herokuapp.com/">Treks &apos;n Trails</a>
  </section>
);

export default Projects;
