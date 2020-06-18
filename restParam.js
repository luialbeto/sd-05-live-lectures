const assert = require('assert');

const sumAll = (...operands) => operands.reduce((accumulator, operand) => accumulator + operand);

console.log(sumAll(1,2));
console.log(sumAll(1,2,3));
console.log(sumAll(1,2,3,4,5));

assert.strictEqual(sumAll(1, 2), 3);
assert.strictEqual(sumAll(1, 2, 3), 6);
assert.strictEqual(sumAll(1, 2, 3, 4, 5), 15);