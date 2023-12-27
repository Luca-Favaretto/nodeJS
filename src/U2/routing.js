const { log } = require("console");
const http = require("http");

const server = http.createServer((req, res) => {
  //   res.write("Benvenuto sul nostro sito");
  //   res.end();
  //   console.log(req);
  console.log(req.url);
  if (req.url === "/") {
    res.end("benvenuto sul sito");
  }
  if (req.url === "/luca") {
    res.end("il mio profilo");
  }
  res.end(`<h1>Errore</h1>
  <p>Torna alla <a href="/">Home</a> perche la pagina non esiste</p>`);
});
server.listen(3000);
