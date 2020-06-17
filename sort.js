const scores = [1, 21, 2, 10];

const comparar = (a, b) => {
  if(a < b){
    return -1;
  } else if (a > b) {
    return 1;
  }
  return 0;
}
// 1, 21
// a - b -> crescente

// b - a -> decrescente
// 21 - 1 => 20


// console.log(scores.sort(comparar));

// console.log(comparar(21, 2));

const fruits = ['cherries', 'apples', 'bananas'];

fruits.sort();

console.log(fruits);