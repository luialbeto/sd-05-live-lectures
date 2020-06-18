const assert = require('assert');

const richestDuckInTheWorld = {
  name: 'Scrooge McDuck',
  birthplace: 'Glasgow, Scotland',
  city: 'Duckburg',
  jobs: ['Shoe shiner', 'Sailor', 'Cowboy', 'Miner', 'Banker', 'Entrepreneur']
};

const { name, birthplace, jobs } = richestDuckInTheWorld;

// console.log(name);
// console.log(birthplace);
console.log(jobs);

const [firstJob, secondJob, thirdJob, ...remainingJobs] = jobs;

console.log(firstJob);
console.log(secondJob);
console.log(thirdJob);
console.log(remainingJobs);

// const phrase = `${name} from ${birthplace}`;

// console.log(phrase);

// assert.strictEqual(phrase, 'Scrooge McDuck from Glasgow, Scotland');

assert.strictEqual(
  `Started working as ${firstJob}, ${secondJob} and ${thirdJob}`
  ,'Started working as Shoe shiner, Sailor and Cowboy'
)