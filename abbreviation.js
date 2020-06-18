const assert = require('assert');

const createSuperhero = (name, superheroName, nickname, powers) => {
  return {
    name,
    superheroName,
    nickname,
    powers
  }
}

console.log(createSuperhero('Bruce Wayne', 'Batman', 'The Caped Crusader', 'Determination and money'));


assert.deepEqual(
  createSuperhero('Bruce Wayne', 'Batman', 'The Caped Crusader', 'Determination and money'),
  {
    name: 'Bruce Wayne',
    superheroName: 'Batman',
    nickname: 'The Caped Crusader',
    powers: 'Determination and money'
  }
);