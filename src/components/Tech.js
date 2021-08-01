import React from "react";
import styles from "./Tech.css";
import PropTypes from "prop-types";

const Line = (props) => {
  return (
    <li className={styles.techLine}>
      <p className={styles.techP}>{props.tech}</p>
    </li>
  );
};

const techArray = [
  "React",
  "Javascript",
  "Typescrip",
  "HTML",
  "CSS",
  "Sass",
  "Material-UI",
  "Redux",
  "Mobx",
  "React Hooks",
  "Cypress",
  "GraphQL",
  "Storybook",
  "NodeJS",
  "Express",
  "MongoDB",
  "Contentful",
  "Storybook",
  "Git",
  "Figma",
  "Azure DevOps"
];

const Tech = () => (
  <div className={styles.tech}>
    <h1 className={styles.heading}>Tech I like:</h1>
    <ul className={styles.techNames}>
      {techArray.map((item, i) => {
        return <Line key={i} tech={item} />;
      })}
    </ul>
  </div>
);

Line.propTypes = {
  tech: PropTypes.string,
};

export default Tech;
