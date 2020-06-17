let numeros = [1, 2, 3, 4, 5, 6];
const mult = numeros.map((number) => 2 * number);

// console.log('numeros:', numeros);
// console.log('mult:', mult);

const menor5 = numeros.map(number => {
  if(number < 5) {
    return number;
  }
});


console.log(menor5);


const menor5forEach = [];
numeros.forEach(number => {
  if(number < 5){
    menor5forEach.push(number);
  }
})
console.log(menor5forEach);