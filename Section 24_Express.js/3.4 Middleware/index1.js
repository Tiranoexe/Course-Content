import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
import bodyParser from "body-parser";
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;

app.get("/", (req, res) => { 
  // console.log(__dirname + "/public/index.html");    para ver el console.log tengo que usar el get en postman
  res.sendFile(__dirname + "/public/index.html"); //Al tener el server activado y usar el GET en postman, envia el archivo html al server
});

app.use(bodyParser.urlencoded({extended: true}));

app.post("/submit", (req, res) => {
  console.log(req.body);
})

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
