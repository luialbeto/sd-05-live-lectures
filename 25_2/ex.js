//add
[
  // db.collection.find()
  {
    _id: "X",
    parcela1: 10,
    parcela2: 20,
    parcela3: 30,
    // ...
    // parcelaN: numero
  },
  {
    _id: "Y",
    parcela1: 50,
    parcela2: 25,
    parcela3: 15,
    // ...
    // parcelaN: numero
  },
];

db.collection.aggregate([
  {
    $project: {
      soma: {
        $add: [
          "$parcela1",
          "$parcela2",
          "$parcela3",
          // ...
          // "$parcelaN"
        ],
      },
    },
  },
]);

[
  {
    _id: "X",
    soma: 60,
  },
  {
    _id: "Y",
    soma: 90,
  },
];

//subtract
[
  // db.collection.find()
  {
    _id: "X",
    aditivo: 50,
    subtrativo: 20,
  },
  {
    _id: "Y",
    aditivo: 15,
    subtrativo: 20,
  },
];

db.collection.aggregate([
  {
    $project: {
      diferenca: {
        $subtract: ["$aditivo", "$subtrativo"],
      },
    },
  },
]);

[
  {
    _id: "X",
    diferenca: 30,
  },
  {
    _id: "Y",
    diferenca: -5,
  },
];

// addFields
[
  // db.collection.find()
  {
    _id: "X",
    escola: "Trybe",
  },
  {
    _id: "Y",
    escola: "Escola do Futuro",
  },
];

db.collection.aggregate([
  {
    $addFields: {
      modulo: "backend",
      bloco: 25,
      // ...
      // campo: valor
    },
  },
]);

[
  // db.collection.find()
  {
    _id: "X",
    escola: "Trybe",
    modulo: "backend",
    bloco: 25,
  },
  {
    _id: "Y",
    escola: "Escola do Futuro",
    modulo: "backend",
    bloco: 25,
  },
];

// $multiply

[
  // db.collection.find()
  {
    _id: "X",
    fator1: 2,
    fator2: 3,
    fator3: 6,
    // ...
    // fatorN: numero
  },
  {
    _id: "Y",
    fator1: 3,
    fator2: 7,
    fator3: 2,
    // ...
    // fatorN: numero
  },
];

db.collection.aggregate([
  {
    $project: {
      produto: {
        $multiply: [
          "$fator1",
          "$fator2",
          "$fator3",
          // ...
          // "$fatorN"
        ],
      },
    },
  },
]);

[
  {
    _id: "X",
    produto: 36,
  },
  {
    _id: "Y",
    produto: 42,
  },
];

// ceil

[
  // db.collection.find()
  {
    _id: "X",
    valorDecimal: 1.5,
  },
  {
    _id: "Y",
    valorDecimal: 7.23,
  },
];

db.collection.aggregate([
  {
    $project: {
      teto: {
        $ceil: "$valorDecimal",
      },
    },
  },
]);

[
  {
    _id: "X",
    teto: 2,
  },
  {
    _id: "Y",
    teto: 8,
  },
];

// floor

[
  // db.collection.find()
  {
    _id: "X",
    valorDecimal: 1.5,
  },
  {
    _id: "Y",
    valorDecimal: 7.23,
  },
];

db.collection.aggregate([
  {
    $project: {
      piso: {
        $floor: "$valorDecimal",
      },
    },
  },
]);

[
  {
    _id: "X",
    piso: 1,
  },
  {
    _id: "Y",
    piso: 7,
  },
];

//abs

[
  // db.collection.find()
  {
    _id: "X",
    aditivo: 50,
    subtrativo: 20,
  },
  {
    _id: "Y",
    aditivo: 15,
    subtrativo: 20,
  },
];

db.collection.aggregate([
  {
    $project: {
      valorAbsoluto: {
        $abs: {
          $subtract: ["$aditivo", "$subtrativo"],
        },
      },
    },
  },
]);

[
  {
    _id: "X",
    valorAbsoluto: 30,
  },
  {
    _id: "Y",
    valorAbsoluto: 5,
    // modulo de -5
    // |-5| = 5
  },
];

//dive

//divide
[
  // db.collection.find()
  {
    _id: "X",
    dividendo: 6,
    divisor: 3,
  },
  {
    _id: "Y",
    dividendo: 20,
    divisor: 2,
  },
];

db.collection.aggregate([
  {
    $project: {
      quociente: {
        $divide: ["$dividendo", "$divisor"],
      },
    },
  },
]);

[
  {
    _id: "X",
    quociente: 2,
  },
  {
    _id: "Y",
    quociente: 10,
  },
];
