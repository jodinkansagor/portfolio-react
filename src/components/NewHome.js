import React from "react";
import jbjSketchBlack from '../assets/jbj.png'
import styles from "./NewHome.css";
import Typical from "react-typical";

const NewHome = () => (
  <div className={styles.newHome}>
    <img className={styles.illustration} src={jbjSketchBlack} />
    <div className={styles.words}>
      <h1 className={styles.name}>Jodi &apos;JBJ&apos; Kansagor</h1>
      <h2 className={styles.whoAmI}>
        I&apos;m
        <Typical
          loop={Infinity}
          wrapper="b"
          steps={[
            " an experienced software engineer.",
            2000,
            " a retired roller derby skater.",
            2000,
            " a tiny farmer.",
            2000,
            " a dog parent.",
            2000,
            " a leader and an organizer.",
            2000,
            " a problem solver.",
            2000,
          ]}
        />
      </h2>
    </div>
  </div>
);

NewHome.propTypes = {};

export default NewHome;
