import React, { Component } from 'react';
import Name from '../components/common/Name';
import LinkList from '../components/LinkList';
import styles from '../containers/Container.css';
import AboutMe from '../components/AboutMe';
import Experience from '../components/Experience';
import ProjectList from '../components/ProjectList';

export default class Container extends Component {

  linkList = [
    {
      url: 'https://github.com/jodinkansagor',
      linkImg: '../src/assets/github-logo.png',
      linkName: '/jodinkansagor'
    },
    {
      url: 'https://www.linkedin.com/in/jodikansagor/',
      linkImg: '../src/assets/linkedin.png',
      linkName: '/jodikansagor'
    },
    {
      url: 'mailto:jodinkansagor@gmail.com',
      linkImg: '../src/assets/email.png',
      linkName: 'jodinkansagor@gmail.com'
    }
  ]

  projectList = [
    {
      img: '../src/assets/coffee-and-cards.png',
      description: 'Daily tarot card tracker that allows the user to track trends in their card readings and store information for each card pulled.',
      stack: 'Tech: Node, Express, MongoDB, Mongoose, Vanilla JS, HTML, CSS',
      siteLink: 'https://coffeepluscardspdx.herokuapp.com',
      githubLink: 'https://github.com/jodinkansagor/daily-card-pulls'
    },
    {
      img: '../src/assets/markov-twain.png',
      description: 'Node based back end Twitter bot using Markov Chain technology to create predictive text sentences.',
      stack: 'Tech: Node, Express, MongoDB, Mongoose, HTML, CSS, Vanilla JS, multiple npm packages',
      siteLink: 'https://markovtwain.herokuapp.com',
      githubLink: 'https://github.com/textables/MarkovTwain'
    },
    {
      img: '../src/assets/treksandtrails.png',
      description: 'Combined information from 5 different 3rd party APIs to create informative front end hike and camping search site.',
      stack: 'Tech: Vanilla JS, HTML, CSS, SQL, Postgres, Node, Express',
      siteLink: 'https://markovtwain.herokuapp.com',
      githubLink: 'https://github.com/textables/MarkovTwain'
    },
    {
      img: '../src/assets/magical_creatures.png',
      description: 'My spin on a typical to-do app. Create a list of magical creatures you want to collect and check them off once collected!',
      stack: 'Tech: Node, Express, Vanilla JS, HTML, CSS, SQL, Postgres',
      siteLink: 'https://markovtwain.herokuapp.com',
      githubLink: 'https://github.com/textables/MarkovTwain'
    },

    {
      img: '../src/assets/pokedex.png',
      description: 'Curious about Pokemon? Learn more about them with this Pokedex! Utilized pokemon 3rd party api.',
      stack: 'Tech: HTML, CSS, Vanilla JS, superagent',
      siteLink: 'https://afternoon-hamlet-35387.herokuapp.com/pokedex.html',
      githubLink: 'https://github.com/jodinkansagor/pokedex'
    },
    {
      img: '../src/assets/astro_learning.png',
      description: 'A simple astrology learning module. Choose a sign and an astrological body and learn more about that aspect. Continuing to add data to the project.',
      stack: 'Tech: Vanilla JS, HTML, CSS',
      siteLink: 'https://jodinkansagor.github.io/astro-learning/',
      githubLink: 'https://github.com/jodinkansagor/astro-learning'
    }
  ]

  render() {
    return (
      <section className={styles.bodySection}>
        <section className={styles.header}>
          <Name />
        </section>
        <LinkList linkList={this.linkList} />
        <AboutMe />
        <Experience />
        <ProjectList projectList={this.projectList} />
      </section>
    );
  }

}
