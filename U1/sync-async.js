const { error, log } = require("console");
const { readFileSync, writeFileSync } = require("fs");

const prova1 = readFileSync("./sottocartella/altro.txt", "utf8");
const prova2 = readFileSync("./sottocartella/text.txt", "utf8");

console.log(prova1);
console.log(prova2);

writeFileSync("./sottocartella/text.txt", "Nuovo testo");
writeFileSync("./sottocartella/text.txt", " testo appeso", { flag: "a" });
writeFileSync("./sottocartella/FileCreatoQui.txt", "Sono un fungo", {
  flag: "a"
});

const prova3 = readFileSync("./sottocartella/text.txt", "utf8");

console.log(prova3);

////////// Ora asincrono
const { readFile, writeFile } = require("fs");

readFile("./sottocartella/altro.txt", "utf8", (error, result) => {
  if (error) {
    console.log(error);
    return;
  }
  console.log(result);
});
