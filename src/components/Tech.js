import React from "react";
import styles from "./Tech.css";
import PropTypes from "prop-types";

const Line = (props) => {
  return (
    <li className={styles.techLine}>
      <p className={styles.techP}>{props.tech} •</p>
    </li>
  );
};

const techArray = [
  "React",
  "Javascript",
  "Typescript",
  "HTML",
  "CSS",
  "Sass",
  "Material-UI",
  "Redux",
  "MobX",
  "Zustand",
  "React Hooks",
  "Jest", "React Testing Library",
  "Cypress",
  "Playwright",
  "GraphQL",
  "Storybook",
  "Google Firebase",
  "NodeJS",
  "Express",
  "MongoDB",
  'PostgreSQL',
  "Contentful",
  "Storybook",
  "Git",
  "Figma",
  "Azure DevOps",
  "New Relic",
];

const Tech = () => {
  const last = techArray.pop()
  return (
    <div className={styles.tech}>
      <h1 className={styles.heading}>Tech I like:</h1>
      <ul className={styles.techNames}>
        {techArray.slice(0, -1).map((item, i) => {
          return <Line key={i} tech={item} />;
        })}
        <li className={styles.techLine}>
          <p className={styles.techP}>{last}</p>
        </li>
      </ul>

    </div>
  )
};

Line.propTypes = {
  tech: PropTypes.string,
};

export default Tech;
