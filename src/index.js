const express = require("express");
const app = express();
const port = 3000;
app.use(express.json());
const personeRouter = require("./routes/route.persone");

app.get("/", (req, res) => res.send("Hello World!"));

app.use("/api/persone", personeRouter);

app.all("*", (req, res) => {
  res.status(404).send("Not Found");
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
