const assert = require('assert');

const horrorBooks = ['It', 'The Shining'];
const scifiBooks = ['I, Robot', 'Caves of Steel', 'The End of Eternity'];

let awesomeBooks = [...horrorBooks, ...scifiBooks];

// for(let i = 0; i < horrorBooks.length; i += 1) {
//   awesomeBooks.push(horrorBooks[i]);
// }
// for(let i = 0; i < scifiBooks.length; i += 1) {
//   awesomeBooks.push(scifiBooks[i]);
// }

console.log(awesomeBooks);

assert.deepEqual(
  awesomeBooks,
  ['It', 'The Shining', 'I, Robot', 'Caves of Steel', 'The End of Eternity']
);