import React from "react";
import styles from "./Links.css";
import resume from "../assets/Jodi_JBJ_Kansagor_Resume_2024.pdf";

const Links = () => (
  <section className={styles.links}>
    <h1 className={styles.findMe}>Find me:</h1>
    <section className={styles.linkList}>
      <a
        className={styles.contactLinks}
        href="https://github.com/jodinkansagor"
        rel="noopener noreferrer"
        target="_blank"
      >
        Github
      </a>
      <a
        className={styles.contactLinks}
        href="https://www.linkedin.com/in/jodikansagor/"
        rel="noopener noreferrer"
        target="_blank"
      >
        LinkedIn
      </a>
      <a
        className={styles.contactLinks}
        href="mailto:jodinkansagor@gmail.com"
        rel="noopener noreferrer"
        target="_blank"
      >
        Email Me
      </a>
      <a className={styles.contactLinks} rel="noopener noreferrer" target="_blank" href={resume}>
        See My Resume
      </a>
      <a className={styles.contactLinks} dowload href={resume}>
        Download My Resume
      </a>
    </section>
  </section>
);

export default Links;
