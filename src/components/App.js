import React from "react";
import NewHome from "./NewHome";
import Links from "./Links";
import styles from "./App.css";
import Projects from "./Projects";
import Tech from "./Tech";

export default function App() {
  return (
    <div className={styles.app}>
      <div className={styles.inner}>
        <NewHome />
        <div className={styles.bottomBox}>

        <Projects />
        <Tech />
        <Links />
        </div>
      </div>
    </div>
  );
}
