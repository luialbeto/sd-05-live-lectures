// match
db.voos.aggregate([
    //E1
    {
      $match: {
        "empresa.nome": "AMERICAN AIRLINES",
      }
    },
    //E2
    {
      $group: {
        _id: null,
        count: { $sum: 1 }
      }
    }
  ]).pretty();

// count

  db.voos.aggregate([
    //E1
    {
      $match: {
        "empresa.nome": "AMERICAN AIRLINES",
      }
    },
    //E2
    {
      $count: "totalDeVoos"
    }
  ]).pretty();

  db.voos.explain('executionStats').aggregate([
    //E1
    {
      $match: {
        "empresa.nome": "AMERICAN AIRLINES",
      }
    },
    //E2
    { $sort: { decolagens: -1 } },
    //E3
    {
      $limit: 3
    }
  ]).pretty();

 // $lookup 

 db.orders.insertMany(
  [
      { "_id" : 1, "item" : "almonds", "price" : 12, "quantity" : 2 },
      { "_id" : 2, "item" : "pecans", "price" : 20, "quantity" : 1 },
      { "_id" : 3  }
  ]
);

db.inventory.insertMany(
  [
     { "_id" : 1, "sku" : "almonds", "description": "product 1", "instock" : 120 },
      { "_id" : 2, "sku" : "bread", "description": "product 2", "instock" : 80 },
      { "_id" : 3, "sku" : "cashews", "description": "product 3", "instock" : 60 },
      { "_id" : 4, "sku" : "pecans", "description": "product 4", "instock" : 70 },
      { "_id" : 5, "sku": null, "description": "Incomplete" },
      { "_id" : 6 }
  ]
);

db.orders.aggregate([
  {
    $lookup:
      {
        from: "inventory",
        localField: "item",
        foreignField: "sku",
        as: "inventory_docs"
      }
 }
]);

db.orders.drop();

db.orders.insertMany(
    [
        { "_id" : 1, "item" : "almonds", "price" : 12, "ordered" : 2 },
        { "_id" : 2, "item" : "pecans", "price" : 20, "ordered" : 1 },
        { "_id" : 3, "item" : "cookies", "price" : 10, "ordered" : 60 }
    ]
)

db.warehouses.insertMany(
  [
      { "_id" : 1, "stock_item" : "almonds", warehouse: "A", "instock" : 120 },
      { "_id" : 2, "stock_item" : "pecans", warehouse: "A", "instock" : 80 },
      { "_id" : 3, "stock_item" : "almonds", warehouse: "B", "instock" : 60 },
      { "_id" : 4, "stock_item" : "cookies", warehouse: "B", "instock" : 40 },
      { "_id" : 5, "stock_item" : "cookies", warehouse: "A", "instock" : 80 }
  ]
)

db.orders.aggregate([
  {
     $lookup:
        {
          from: "warehouses",
          let: { order_item: "$item", order_qty: "$ordered" },
          pipeline: [
             { $match:
                { $expr:
                   { $and:
                      [
                        { $eq: [ "$stock_item",  "$$order_item" ] },
                        { $gte: [ "$instock", "$$order_qty" ] }
                      ]
                   }
                }
             },
             { $project: { stock_item: 0, _id: 0 } }
          ],
          as: "stockdata"
        }
   }
]).pretty();

// $group

db.voos.updateMany({}, { $set: { valorPassagem: NumberDecimal("200.00") } });

db.voos.aggregate([
  {
      $group: {
          _id: "$empresa.nome",
          // _id do group !== _id do find
          totalDeVendas: { $sum: {
            $multiply: [ "$valorPassagem", "$passageiros.pagos" ]
          }},
      }
  },
  { $match: { totalDeVendas: { $lte: 100000 } } }
]);

// $project

db.voos.aggregate([
  //E1
  {
    $group :
      {
          _id : "$empresa.nome",
          totalDeVendas: {
              $sum: {
                  $multiply: [ "$valorPassagem", "$passageiros.pagos" ]
              }
          }
      }
  },
  //E2
  { $match: { totalDeVendas: { $lte: 100000 } } },
  //E3
  {
      $project: {
          _id: 0,
          empresa: "$_id",
          valorTotal: "$totalDeVendas"
      }
  }, 
  //E4
  { $match: { valorTotal: { $gt: 1 } } }
]);

// unwind

db.products.insertOne({
  "_id" : 1,
  "item" : "ABC1",
  sizes: [ "S", "M", "L"]
});

db.products.insertOne({
  "_id" : 2,
  "item" : "ABC2",
  sizes: [ "S", "M", "L"]
})

db.products.aggregate([
  { $unwind : "$sizes" }
]);

db.products.insertOne({
  "_id" : 3,
  "item" : "ABC3",
  sizes: [ "M", "L"]
})

db.products.aggregate([
  // E1
  { $unwind : "$sizes" },
  // E2
  {
      $match: {
          sizes: "S"
      }
  }
]);

// Fazer um "limit" por agrupamento utilizando
// o $slice em $project (dataFlights)

// Pressupondo que
db.voos.updateMany({}, { $set: { valorPassagem: NumberDecimal("200.00") } });

// Execute a agregação
db.voos.aggregate(
  [
        
    // E1: Agrupando por empresa e gerando
    // um array com o lucro por voo
    { $group: {
      _id: "$empresa.nome",
      valorArrecadadoPorVoo: {
        // O $push também funciona como um acumulador
        $push: {
          $multiply: [ "$valorPassagem", "$passageiros.pagos" ]
        }
      }
    } },
    
    // E2: Projeção utilizando o $slice
    // pra calcular somente sobre os 5 primeiros voos
    // por empresa
    {
      $project: {
          _id: 0,
          "nomeEmpresa": "$_id",
          "valorArrecadadoVoos": {
            "noTotal": { $sum: "$valorArrecadadoPorVoo" },
            "cincoPrimeiros": {
              $sum: {
                // O pulo do gato
                $slice: ["$valorArrecadadoPorVoo",5]
              }
            }
          }
      }
    },

    // E3: Ordenando projeção pelo nome da empresa
    // (Alfabético)
    { $sort: { nomeEmpresa: 1 } },

    // E4: Dando um "Having" pra pegar o resultado dos 
    // cinco primeiros voos que superam 125k
    { $match: { 
      "valorArrecadadoVoos.cincoPrimeiros": {
        $gt: 125000
      } 
    } },

    // E5: Limitando o número de empresas mostradas
    { $limit: 10 }

  ], // Encerra o pipeline;
  {  // Novo parametro com um opcional:
    // Tirando limites de uso de memória por estágio
    // Operações mt grandes com $group requerem essa opção
    // (Ele escreve o uso excedente no disco)
    allowDiskUse: true
  }
).pretty();

