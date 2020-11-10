const readline = require("readline-sync");
const { teste1, teste2 } = require("./minhasFuncoes");

const minhaVariavel = readline.questionInt("Digite um valor inteiro: ");

console.log(minhaVariavel);

teste1();
teste2();

// (-b ± √Δ) / (2 * a)
//  Δ = b² - 4ac

function calculaX(a, b, delta) {
  const x1 = (((-b + Math.sqrt(delta)) / 2) * a).toFixed(2);
  const x2 = (((-b - Math.sqrt(delta)) / 2) * a).toFixed(2);
  return { x1, x2 };
}

function calculaDelta(a, b, c) {
  return Math.pow(b, 2) - 4 * a * c;
}

function executaCalculo() {
  const a = readline.questionInt("Digite o valor de a: ");
  const b = readline.questionInt("Digite o valor de b: ");
  const c = readline.questionInt("Digite o valor de c: ");

  console.log("Coeficientes: a = %s, b = %s, c = %s", a, b, c);

  const delta = calculaDelta(a, b, c);

  if (delta < 0) {
    console.log("Impossível calcular, o valor de delta é negativo: %s", delta);
    // parar a execução
    return;
  }

  console.log("delta = %s", delta);

  const resultado = calculaX(a, b, delta);

  console.log("Resultado: x1 = %s, x2 = %s", resultado.x1, resultado.x2);
}

executaCalculo();
