import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
import bodyParser from "body-parser";
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;
var bandName = "";

app.use(bodyParser.urlencoded({extended: true}));

//funcion que crea el nombre de la banda uniendo ambos inputs
function bandNameGenerator(req, res, next){
  console.log(req.body);
  bandName = req.body["street"] + req.body["pet"];
  next();
}

app.use(bandNameGenerator);

//ENVIAR EL HTML CON GET
app.get("/", (req, res) => { 
  res.sendFile(__dirname + "/public/index.html"); //Al tener el server activado y usar el GET en postman, envia el archivo html al server
});

//MIDDLEWARE: Hace el parse del body y al hacer submit envia la informacion
app.post("/submit", (req, res) => {
  res.send(`<h1>Your band name is:</h1><h2>${bandName}✌️</h2>`);
});

//ENVIAR HTML CON EL NOMBRE DE LA BANDA FORMADO POR LOS INPUTS DEL USUARIO


app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
