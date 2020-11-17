const express = require("express");
const app = express();
const router = express.Router();

const middleWare = (request, response, next) => {
  // console.log(request.headers);
  // console.log("Passei por aqui!");
  next();
};

const authMiddleware = (req, res, next) => {
  const auth = req.headers.authorization;
  if (auth === "123qwe") {
    next();
  } else {
    res.status(401).send({ message: "Token inválido" });
  }
};

const logRequestMiddleware = (req, res, next) => {
  console.log(`${req.method} ${req.path}`);
  next();
};

const errorHandler = (err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Algo deu errado :(");
};

app.use(logRequestMiddleware);

// app.use(authMiddleware);

app.use(express.json());

router.use(authMiddleware);

// app.get("/hello", middleWare, (req, res) => res.send("Hello World, again!"));

router.get("/hello", middleWare, (req, res) => res.send("Hello World, again!"));

app.use("/secure", router);

app.get("/", (req, res) => res.send("Rota não segura!"));

app.get("/error", (req, res) => {
  throw new Error("Eu retorno um erro!");
});

app.post("/login", (req, res) => {
  console.log(req.body);
  res.send(req.body);
});

app.use(errorHandler);

app.listen(3000, () => console.log("App ouvindo a porta 3000!"));
