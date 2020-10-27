const db;

// $push

// use school

db.students.insertOne(
  {
    _id: 1,
    name: "Alex"
  }
);

db.students.updateOne(
  { _id: 1 },
  {
    $push: { scores: 88 }
  }
);

db.students.updateOne(
  { _id: 1 },
  {
    $push: { 
      scores: {
        $each: [90, 92, 85]
      } 
    }
  }
);

db.students.find({ _id: 1}).pretty();

// use dataFlights

db.voos.findOne(
  {
    "empresa.nome": "AMERICAN AIRLINES",
    "aeroportoOrigem.sigla": "KJFK",
    "aeroportoDestino.sigla": "SBGR"
  },
  {
    vooId: 1,
    "empresa.nome": 1,
    "aeroportoOrigem.sigla": 1,
    "aeroportoDestino.sigla": 1
  }
);

db.voos.updateOne(
  { vooId: 743218 },
  {
    $push: {
      servicoDeBordo: {
        $each: [
          {
            categoria: "comida",
            item: "lasanha",
            quantidade: 100
          },
          {
            categoria: "comida",
            item: "amendoim",
            quantidade: 50
          }
        ]
      }
    }
  }
);

db.voos.findOne(
  { vooId: 743218 },
  { servicoDeBordo: 1 }
);

db.voos.findOne(
  { vooId: 743218 },
  { "servicoDeBordo.item": 1 }
);

db.voos.updateOne(
  { vooId: 743218 },
  {
    $push: {
      servicoDeBordo:
      {
        $each: [
          { categoria: "bebida", item: "guaraná", quantidade: 40 },
          { categoria: "bebida", item: "vinho", quantidade: 35 },
          { categoria: "bebida", item: "água", quantidade: 150 },
          { categoria: "bebida", item: "leite", quantidade: 100 },
          { categoria: "bebida", item: "café", quantidade: 200 },
          { categoria: "comida", item: "macarrão", quantidade: 80 },
          { categoria: "comida", item: "frango", quantidade: 60 }
        ]
      }
    }
  }
);

// use school;

db.students.insertOne(
  {
    name: "Jennifer",
    quizzes : [
      { wk: 1, score : 10 },
      { wk: 2, score : 8 },
      { wk: 3, score : 5 },
      { wk: 4, score : 6 }
    ]
  }
);

db.students.updateOne(
  { name: "Jennifer" },
  {
    $push: {
      quizzes:{
        $each: [
          { wk: 5, score: 8 },
          { wk: 6, score: 7 },
          { wk: 7, score: 6 }
        ],
        $sort: { score: -1 }, // -1 desc, 1 asc
        $slice: 3
      }
    }
  }
);

db.students.findOne({ name: "Jennifer" });

// use dataFlights

db.voos.findOne(
  { vooId: 743218 },
  { vooId: 1, "servicoDeBordo.item": 1 }
);

db.voos.updateOne(
  { vooId: 743218 },
  {
    $push: {
      servicoDeBordo: {
        $each: [
          { categoria: "comida", item: "carne", quantidade: 180 },
          { categoria: "bebida", item: "sprite", quantidade: 5 }
        ],
        $sort: { categoria: 1, item: 1 }
      }
    }
  },
  { collation: { locale: "pt" } } 
);

db.voos.findOne(
  { vooId: 743218 },
  {
    "servicoDeBordo.categoria": 1,
    "servicoDeBordo.item": 1
  }
);

// $pull

// use superMarket

db.stores.insertMany(
  [
    {
      _id: 1,
      fruits: ["apples", "pears", "oranges", "grapes", "bananas"],
      vegetables: ["carrots", "celery", "squash", "carrots"]
    },
    {
      _id: 2,
      fruits: ["plums", "kiwis", "oranges", "bananas", "apples"],
      vegetables: ["broccoli", "zucchini", "carrots", "onions"]
    }
  ]
);

db.stores.updateMany(
  {},
  {
    $pull: {
      fruits: { $in: ["apples", "oranges"] },
      vegetables: "carrots"
    }
  }
);

//use dataFlights

db.voos.updateOne(
  { vooId: 743218 },
  {
    $pull: {
      servicoDeBordo: { categoria: "comida",  item: "carne", quantidade: 180 }
    }
  }
);

db.voos.updateOne(
  { vooId: 743218 },
  {
    $pull: {
      servicoDeBordo: { item: "macarrão" }
    }
  }
);

db.voos.updateOne(
  { vooId: 743218 },
  {
    $pull: {
      servicoDeBordo: { 
        item: { $in: ["vinho", "leite"] } 
      }
    }
  }
);

db.voos.updateOne(
  { vooId: 743218 },
  {
    $pull: {
      servicoDeBordo: {
        categoria: "bebida",
        quantidade: { $lte: 60 }
      }
    }
  }
);

db.voos.updateOne(
  { vooId: 743218 },
  {
    $pop: { servicoDeBordo: 1, umOutroArray: -1 }
  }
);

//use myWalMart

db.inventory.insertOne({
  _id: 1,
  product: "polarizing_filter",
  tags: ["electronics", "camera"]
});

db.inventory.updateOne(
  { _id: 1 },
  { $addToSet: { tags: "accessories" } }
);

db.inventory.updateOne(
  { _id: 1 },
  { $addToSet: { tags: "camera"  } }
);

db.inventory.updateOne(
  { _id: 1 },
  { 
    $addToSet: { 
      tags: {
        $each: ["camera", "accessories", "camera", "photography"]
      } 
    } 
  }
);

db.inventory.find({ _id: 1 }).pretty();

//use dataFlights

db.voos.updateOne(
  { vooId: 743218 },
  {
    $addToSet: {
      servicoDeBordo: {
        $each: [
          {
            categoria: "bebida",
            item: "café",
            quantidade: 200
          },
          {
            categoria: "bebida",
            item: "água",
            quantidade: 150
          },
          {
            categoria: "comida",
            item: "macarrão",
            quantidade: 80
          }
        ]
      }
    }
  }
);

//encerramento

db.voos.find(
  {
    "empresa.nome": "AMERICAN AIRLINES",
    "aeroportoOrigem.sigla": "KJFK",
    "aeroportoDestino.sigla": "SBGR"
  });

db.voos.updateMany(
  {
    "empresa.nome": "AMERICAN AIRLINES",
    "aeroportoOrigem.sigla": "KJFK",
    "aeroportoDestino.sigla": "SBGR"
  },
  {
    $addToSet: {
      servicoDeBordo : {
        $each: [
          {
            categoria: "bebida",
            item: "coca-cola",
            quantidade: 50
          },
          {
            categoria: "bebida",
            item: "leite",
            quantidade: 100
          },
          {
            categoria: "bebida",
            item: "água",
            quantidade: 150
          },
          {
            categoria: "comida",
            item: "carne",
            quantidade: 180
          },
          {
            categoria: "comida",
            item: "frango",
            quantidade: 60
          },
          {
            categoria: "comida",
            item: "macarrão",
            quantidade: 80
          }
        ]
      }
    }
  }
);

//1º exercicio

//use esercicios

db.movies.updateOne(
  { title: "Batman: O retorno do coringa" },
  {
    $push: {
      category: "superhero"
    }
  }
);