const express = require("express");
const app = express();
const PORT = 3000;

const middlewares = require("./middleware");

app.use(middlewares.logger);

// app.use(middlewares.dummy);

// app.get("/", (req, res) => res.send("Olá gente!"));

app.get("/path", middlewares.auth, middlewares.dummy);

app.post("/path", middlewares.dummy);

app.put("/path", middlewares.dummy);

app.delete("/path", middlewares.dummy);

app.listen(PORT, () => console.log(`listen on ${PORT}`));
