const http = require("http");

const server = http.createServer((request, response) => {
  /* Primeiro, garantimos que a rota é /login e que o método é POST */
  if (request.url !== "/login" || request.method !== "POST") {
    /* Configuramos o header content-type para application/json, e o status para 404 */
    response.writeHead(404, { "Content-Type": "application/json" });
    /* Enviamos o corpo da resposta como JSON. Note o use de JSON.stringify,
       pois queremos enviar uma String, e não um objeto */
    response.write(JSON.stringify({ message: "Page not found" }));
    /* Finalizamos o envio da resposta */
    response.end();
    /* Encerramos o processamento dessa request */
    return;
  }

  /* Variável para armazenar cada "pedaço" do body da requisição */
  const data = [];

  /* Toda vez que recebermos um pedaço, adicionamos ele à variável `data` */
  request.on("data", (chunk) => data.push(chunk));

  /* Quando terminarmos de receber todo o conteúdo da requisição */
  request.on("end", () => {
    /* Juntamos todos os "pedaços" do body em uma única string */
    const jsonBody = Buffer.concat(data).toString("utf8");
    /* Convertemos o JSON para um objeto JavaScript */
    const body = JSON.parse(jsonBody);

    /* Configuramos o status da resposta como 200, e o tipo como JSON */
    response.writeHead(200, { "Content-Type": "application/json" });
    /* Enviamos de volta o corpo da requisição que recebemos */
    response.write(JSON.stringify(body));
    /* Encerramos a resposta */
    response.end();
  });
});

/* Iniciamos o servidor para que ele comece a escutar a porta 3000, esperando por requests */
server.listen(3000, () => console.log("Listening on 3000"));
