import React from 'react';
import styles from './Links.css';
import resume from '../../assets/Jodi_JBJ_Kansagor_Resume.pdf';

const Links = () => (
  <section className={styles.links}>
    <h1>Find me:</h1>
    <a href="https://github.com/jodinkansagor" target="_blank">Github</a>
    <a href="https://www.linkedin.com/in/jodikansagor/" target="_blank">LinkedIn</a>
    <a href="mailto:jodinkansagor@gmail.com" target="_blank">Email Me</a>
    <a href={resume}>My Resume</a>
  </section>
);

export default Links;
