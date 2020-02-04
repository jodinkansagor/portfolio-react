import React from 'react';
import styles from '../components/AboutMe.css';
import jbj from '../src/assets/headshot.jpg';

const AboutMe = () => {
  return (
    <section className={styles.headshot}>
      <img src={jbj} />
      <p>I am a full-stack software developer in Portland, OR. My diverse background working with large data-sets, creative problem solving, and managing diverse communities has given me the skills to adapt to any environment. Learning to play roller derby as an adult has taught me that I can learn anything that I put my mind to.</p>
    </section>
  );
};

export default AboutMe;
