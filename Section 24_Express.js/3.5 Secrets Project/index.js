//To see how the final website should work, run "node solution.js".
//Make sure you have installed all the dependencies with "npm i".
//The password is ILoveProgramming

import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
import bodyParser from "body-parser";
const __dirname = dirname(fileURLToPath(import.meta.url));

const password = "ILoveProgramming";
const app = express();
const port = 3000;

app.get("/", (req, res) => { 
    res.sendFile(__dirname + "/public/index.html");
});
  
app.use(bodyParser.urlencoded({extended: true}));

app.post("/check", (req, res) => {
    console.log(req.body);
    if (req.body["password"] === password){
            res.sendFile(__dirname + "/public/secret.html");
    }else{
        res.redirect("/"); 
    }
});

app.listen(port, () => {
console.log(`Listening on port ${port}`);
});