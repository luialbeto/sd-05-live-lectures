// arrayFilters (use dataFlights2)
db.voos
  .find(
    { vooId: { $in: [743218, 743217] } },
    { _id: 0, vooId: 1, servicoDeBordo: 1 }
  )
  .limit(2)
  .pretty();

db.voos.updateMany(
  { vooId: { $in: [743218, 743217] } },
  {
    $set: {
      "servicoDeBordo.$[batatinha].item": "café",
      "servicoDeBordo.$[batatinha].quantidade": 200,
    },
  },
  {
    arrayFilters: [{ "batatinha.item": "cafézin" }],
  }
);

// $all 744455, 744456

db.voos.find({ "empresa.nome": "AZUL" }, { vooId: 1 }).limit(2);

db.voos.updateOne(
  { vooId: 744455 },
  {
    $push: {
      referencias: {
        $each: [
          "campinas",
          "fort lauderdale",
          "internacional",
          "regular",
          "pontual",
        ],
      },
    },
  }
);

db.voos.updateOne(
  { vooId: 744456 },
  {
    $push: {
      referencias: {
        $each: [
          "belo horizonte",
          "orlando",
          "internacional",
          "regular",
          "pontual",
        ],
      },
    },
  }
);

db.voos.find({ "empresa.nome": "AZUL" }, { referencias: 1 }).limit(2).pretty();

db.voos
  .find(
    {
      referencias: {
        $all: ["regular", "internacional", "campinas"],
      },
    },
    {
      vooId: 1,
      referencias: 1,
    }
  )
  .pretty();

db.voos
  .find(
    {
      $and: [{ referencias: "regular" }, { referencias: "internacional" }],
    },
    {
      vooId: 1,
      referencias: 1,
    }
  )
  .pretty();

// elemMatch

db.voos
  .find(
    { servicoDeBordo: { $exists: true } },
    {
      vooId: 1,
      servicoDeBordo: 1,
    }
  )
  .limit(2)
  .pretty();

db.voos.updateOne(
  { vooId: 743217 },
  {
    $set: {
      "servicoDeBordo.$[elemento].quantidade": 200,
    },
  },
  {
    arrayFilters: [{ "elemento.item": "coca-cola" }],
  }
);

db.voos.updateOne(
  { vooId: 743218 },
  {
    $set: {
      "servicoDeBordo.$[elemento].quantidade": 300,
    },
  },
  {
    arrayFilters: [
      {
        $or: [{ "elemento.item": "leite" }, { "elemento.item": "água" }],
      },
    ],
  }
);

db.voos
  .find(
    {
      servicoDeBordo: {
        $elemMatch: {
          quantidade: { $gte: 200, $lte: 300 },
        },
      },
    },
    {
      vooId: 1,
      servicoDeBordo: 1,
    }
  )
  .pretty();

db.voos.count({
  servicoDeBordo: {
    $elemMatch: { quantidade: { $gt: 100 } },
  },
});

//$size

db.voos
  .find(
    {
      referencias: { $size: 5 },
    },
    {
      vooId: 1,
      referencias: 1,
    }
  )
  .pretty();

// $expr

db.voos.find(
  {
    $and: [
      {
        $expr: {
          $gt: ["$passageiros.gratis", "$passageiros.pagos"],
        },
      },
      {
        $expr: {
          $eq: ["$passageiros.gratis", 2],
        },
      },
    ],
  },
  { passageiros: 1 }
);

// regex

db.voos
  .find({
    "aeroportoOrigem.continente": {
      $regex: /América/i,
    },
  })
  .pretty();

db.voos.findOne(
  {
    "empresa.nome": "GOL",
    "aeroportoOrigem.nome": {
      $regex: /Santos Dumont/i,
    },
  },
  { "aeroportoOrigem.nome": 1 }
);

db.voos.count({
  "empresa.nome": "GOL",
  "aeroportoOrigem.nome": {
    $regex: /^Santos Dumont/i,
  },
});

// $text

db.articles.insertMany([
  { _id: 1, subject: "coffee", author: "xyz", views: 50 },
  { _id: 2, subject: "Coffee Shopping", author: "efg", views: 5 },
  { _id: 3, subject: "Baking a cake", author: "abc", views: 90 },
  { _id: 4, subject: "baking", author: "xyz", views: 100 },
  { _id: 5, subject: "Café Com Leite", author: "abc", views: 200 },
  { _id: 6, subject: "Сырники", author: "jkl", views: 80 },
  { _id: 7, subject: "coffee and cream", author: "efg", views: 10 },
  { _id: 8, subject: "Cafe com Leite", author: "xyz", views: 10 },
]);

db.articles.createIndex({ subject: "text" });

db.articles.find({ $text: { $search: "coffee" } });

db.articles.find({
  $text: {
    $search: "",
    $language,
  },
});

db.letras.createIndex({ letra: "text" }, { default_language: "portuguese" });

db.letras.find({
  $text: {
    $search: "tomando um café",
    $language: true,
  },
});

// mod

db.voos.findOne(
  {
    "passageiros.pagos": {
      $mod: [2, 0],
    },
  },
  {
    vooId: 1,
    passageiros: 1,
  }
);
