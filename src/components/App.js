import React from 'react';
// import Container from '../containers/Container';
import NewHome from './NewHome/NewHome';
import Links from './NewHome/Links';
import styles from './App.css';
import Projects from './NewHome/Projects';
import Tech from './NewHome/Tech';

export default function App() {
  return (
    <section className={styles.App}>
      <NewHome />
      <Projects />
      <Tech />
      <Links />
    </section>
  );
}
