import React from "react";
import styles from "./Project.css";

const Projects = () => (
  <div className={styles.procject}>
    <h1 className={styles.heading}>Work I do:</h1>
    <h2>I currently to work at <a rel="noopener noreferrer"
      target="_blank" href="https://www.newrelic.com">New Relic</a>. I am a leader on the Mobile Observability UI team. New Relic is subscription based, so to see my work, check out our <a href="https://newrelic.com/blog/nerdlog/charting-a-course-for-mobile-app-success-with-new-relic-mobile-user-journeys" rel="noopener noreferrer"
        target="_blank">blog</a> and <a rel="noopener noreferrer"
          target="_blank" href="https://docs.newrelic.com/docs/mobile-monitoring/mobile-monitoring-ui/mobile-app-pages/os-versions-page/">documentation</a>.</h2>
    <h2>I used to work at <a rel="noopener noreferrer"
      target="_blank" href="https://www.driveway.com">Driveway</a>. I led the project to create all content associated with searching, sorting, filtering, and browsing. You can see examples of that work <a rel="noopener noreferrer"
      target="_blank" href="https://www.driveway.com/shop/body-style/suv">here</a> and <a rel="noopener noreferrer"
      target="_blank" href="https://www.driveway.com/shop">here</a>. This was a greenfield project when I started, we released in 6 months.</h2>
  </div>
);

export default Projects;
