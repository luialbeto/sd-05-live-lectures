const fetch = require('node-fetch');
const API_URL = 'https://icanhazdadjoke.com/';

const fetchJokePromise = () => {
  return fetch(API_URL)
    .then((response) => response.json())
    .then((data) => data.joke)
}

module.exports = fetchJokePromise;