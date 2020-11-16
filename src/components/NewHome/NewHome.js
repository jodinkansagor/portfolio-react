import React from 'react';
import jbjsketch from '../../assets/blue.png';
import styles from './NewHome.css';
import Typical from 'react-typical';

const NewHome = () => (
  <section className={styles.newHome}>
    <img src={jbjsketch} />
    <section className={styles.words}>
      <h1>Jodi &apos;JBJ&apos; Kansagor</h1>
      <h2>I&apos;m 
        <Typical
          loop={Infinity}
          wrapper="b"
          steps={[
            ' a software engineer.',
            2000,
            ' a roller derby skater.',
            2000,
            ' an alchemist.',
            2000,
            ' a dog mom.',
            2000,
            ' a leader and an organizer.', 
            2000,
            ' a problem solver.', 
            2000
          ]}
        />
      </h2>
    </section>
  </section>
);

NewHome.propTypes = {};

export default NewHome;
