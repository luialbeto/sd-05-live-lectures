const users = [
  { firstName: 'Homer', lastName: 'Simpson', isDriver: true },
  { firstName: 'Marge', lastName: 'Simpson', isDriver: true },
  { firstName: 'Bart', lastName: 'Simpson', isDriver: false },
  { firstName: 'Lisa', lastName: 'Simpson', isDriver: false },
  { firstName: 'Maggie', lastName: 'Simpson', isDriver: false },
];

const findANonDriverWithFor = array => {
  for(let i = 0; i < array.length; i += 1) {
    if(array[i].isDriver === false) {
      return array[i];
    }
  }
  return undefined;
}

console.log(users.find(user => user.isDriver === false));