const users = [
  { firstName: 'Homer', lastName: 'Simpson', isDriver: true },
  { firstName: 'Marge', lastName: 'Simpson', isDriver: true },
  { firstName: 'Bart', lastName: 'Simpson', isDriver: false },
  { firstName: 'Lisa', lastName: 'Simpson', isDriver: false },
  { firstName: 'Maggie', lastName: 'Simpson', isDriver: false },
];

const firstNames = [];
for(let i = 0; i < users.length; i += 1) {
  firstNames.push(users[i].firstName);
}

const newUsers = users.map(user => user.firstName);

// console.log('users:', users);
// console.log('firstNames:', firstNames);
console.log('newUsers:', newUsers);