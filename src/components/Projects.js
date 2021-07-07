import React from "react";
import styles from "./Project.css";

const Projects = () => (
  <div className={styles.procject}>
    <h1 className={styles.heading}>Work I do:</h1>

    <div className={styles.textAndLink}>
      <div className={styles.projectTitle}>
        <h1 className={styles.header}>I currently work on</h1>
      </div>
      <div>
        <a
          className={styles.projectLink}
          href="https:/www.driveway.com"
          rel="noopener noreferrer"
          target="_blank"
        >
          Driveway.
        </a>
      </div>
    </div>
    <div className={styles.textAndLink}>
      <div className={styles.projectTitle}>
        <h1 className={styles.header}>Another cool project is </h1>
      </div>
      <div>
        <a
          className={styles.projectLink}
          href="https://markovtwain.herokuapp.com/"
          rel="noopener noreferrer"
          target="_blank"
        >
          Markov Twain.
        </a>
      </div>
    </div>
  </div>
);

export default Projects;
