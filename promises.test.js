let starterPokemons = [
  { name: 'Bulbasaur', type: 'Grass/Poison', speed: 45 },
  { name: 'Charmander', type: 'Fire', speed: 65 },
  { name: 'Squirtle', type: 'Water', speed: 43 },
  { name: 'Pikachu', type: 'Electric', speed: 90 },
];

const filterBySpeed = minimumSpeed => new Promise((resolve, reject) => {
  setTimeout(() => {
    const bySpeed = starterPokemons
      .filter(pokemons => pokemons.speed >= minimumSpeed)
      .map(pokemon => pokemon.name);
    if(bySpeed.length > 0) resolve(bySpeed);
    return reject('No pokemons found');
  }, 1500);
})

beforeEach(() => {
  starterPokemons = [
    { name: 'Bulbasaur', type: 'Grass/Poison', speed: 45 },
    { name: 'Charmander', type: 'Fire', speed: 65 },
    { name: 'Squirtle', type: 'Water', speed: 43 },
    { name: 'Pikachu', type: 'Electric', speed: 90 },
  ];
})

test('Pokemons above 50 speed base', () => {
  starterPokemons.push({ name: 'Charizard', type: 'Fire/Flying', speed: 100 });
  expect.assertions(1);
  return filterBySpeed(50).then((data) => {
    expect(data).toStrictEqual(['Charmander', 'Pikachu', 'Charizard']);
  })
})

test('Pokemons above 99 speed base', () => {
  expect.assertions(1);
  return filterBySpeed(99).catch((data) => {
    expect(data).toBe('No pokemons found');
  })
})