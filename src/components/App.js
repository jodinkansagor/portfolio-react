import React from "react";
import NewHome from "./NewHome";
import Links from "./Links";
import styles from "./App.css";
import Projects from "./Projects";
import Tech from "./Tech";

export default function App() {
  return (
    <div className={styles.App}>
      <div className={styles.inner}>
        <NewHome />
        <Projects />
        <Tech />
        <Links />
      </div>
    </div>
  );
}
