const birds = [
  { ID: 'DV8', Name: 'Eurasian Collared-Dove', Type: 'Dove' },
  { ID: 'HK12', Name: 'Bald Eagle', Type: 'Hawk' },
  { ID: 'HK6', Name: 'Red-Tailed Hawk', Type: 'Hawk' },
  { ID: 'SP11', Name: 'Old World Sparrow', Type: 'Sparrow' },
  { ID: 'DV2', Name: 'Mourning Dove', Type: 'Dove' },
];

// .Name.toLowerCase()

const birdNames = birds.map(bird => bird.Name.toLowerCase())
  .map((item, index) => item + birds[index].ID);

console.log(birdNames);
'eurasian collared-doveDV8'