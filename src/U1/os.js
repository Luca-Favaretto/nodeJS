const { log } = require("console");
const os = require("os");

const prova = {
  nome: os.type(),
  release: os.release(),
  memoria: os.totalmem(),
  diponibile: os.freemem()
};
console.log(prova);

const path = require("path");
console.log(path.sep);
const percorsoFile = path.join("/sottocartella", "text.txt");
console.log(percorsoFile);

console.log(path.basename(percorsoFile));
const percorsoAssoluto = path.resolve(__dirname, "sottocartella", "text.txt");
console.log(percorsoAssoluto);
