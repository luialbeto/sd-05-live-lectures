const numbers = [2, 3, 4, 6, 8, 12, 24];

let accumulatorFor = numbers[0];
for(let i = 1; i < numbers.length; i += 1) {
  accumulatorFor = accumulatorFor + numbers[i];
  // console.log('-------');
  // console.log('accumulatorFor:', accumulatorFor);
}

// console.log('numbers:', numbers);
// console.log('-------');
// console.log('accumulatorFor:', accumulatorFor);

const sum = numbers.reduce((accumulator, currentValue) =>{
  console.log('accumulator:', accumulator);
  console.log('currentValue:', currentValue);
  console.log('------------------');
  return accumulator + currentValue
} 
);

console.log('sum:', sum);