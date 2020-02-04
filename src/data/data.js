import coffee from '../assets/coffee-and-cards.png';
import markov from '../assets/markov.png';
import trails from '../assets/treksandtrails.png';
import unicorn from '../assets/collectable_creatures.png';
import astro from '../assets/cc_astro.png';
import pokedex from '../assets/pokedex.png';
import linkedin from '../assets/LinkedInLogo.png';
import github from '../assets/github_logo.png';
import email from '../assets/email.png';



export const linkList = [
  {
    url: 'https://github.com/jodinkansagor',
    linkImg: github,
    linkName: '/jodinkansagor'
  },
  {
    url: 'https://www.linkedin.com/in/jodikansagor/',
    linkImg: linkedin,
    linkName: '/jodikansagor'
  },
  {
    url: 'mailto:jodinkansagor@gmail.com',
    linkImg: email,
    linkName: 'jodinkansagor@gmail.com'
  }
];

export const projectList = [
  {
    img: coffee,
    description: 'Daily tarot card tracker that allows the user to track trends in their card readings and store information for each card pulled.',
    stack: 'Tech: Node, Express, MongoDB, Mongoose, Vanilla JS, HTML, CSS',
    siteLink: 'https://coffeepluscardspdx.herokuapp.com',
    githubLink: 'https://github.com/jodinkansagor/daily-card-pulls'
  },
  {
    img: markov,
    description: 'Node based back end Twitter bot using Markov Chain technology to create predictive text sentences.',
    stack: 'Tech: Node, Express, MongoDB, Mongoose, HTML, CSS, Vanilla JS, multiple npm packages',
    siteLink: 'https://markovtwain.herokuapp.com',
    githubLink: 'https://github.com/textables/MarkovTwain'
  },
  {
    img: trails,
    description: 'Combined information from 5 different 3rd party APIs to create informative front end hike and camping search site.',
    stack: 'Tech: Vanilla JS, HTML, CSS, SQL, Postgres, Node, Express',
    siteLink: 'https://treksntrails.herokuapp.com',
    githubLink: 'https://github.com/Plant-Parenthood/treks-n-tents'
  },
  {
    img: unicorn,
    description: 'My spin on a typical to-do app. Create a list of magical creatures you want to collect and check them off once collected!',
    stack: 'Tech: Node, Express, Vanilla JS, HTML, CSS, SQL, Postgres',
    siteLink: 'https://unicorn-gathering.herokuapp.com/',
    githubLink: 'https://github.com/jodinkansagor/to-do-list'
  },

  {
    img: pokedex,
    description: 'Curious about Pokemon? Learn more about them with this Pokedex! Utilized pokemon 3rd party api to gather all the Pokemon.',
    stack: 'Tech: HTML, CSS, Vanilla JS, superagent',
    siteLink: 'https://afternoon-hamlet-35387.herokuapp.com/pokedex.html',
    githubLink: 'https://github.com/jodinkansagor/pokedex'
  },
  {
    img: astro,
    description: 'A simple astrology learning module. Choose a sign and an astrological body and learn more about that aspect. Continuing to add data to the project. Still a work in progress',
    stack: 'Tech: Vanilla JS, HTML, CSS',
    siteLink: 'https://jodinkansagor.github.io/astro-learning/',
    githubLink: 'https://github.com/jodinkansagor/astro-learning'
  }
];

