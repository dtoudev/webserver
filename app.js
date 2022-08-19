require("dotenv").config();

const express = require("express");
const hbs = require("hbs");
const app = express();
const port = process.env.PORT;

app.set("view engine", "hbs");
hbs.registerPartials(__dirname + "/views/partials");

//SERVIR CONTENIDO ESTATICO
app.use(express.static("public"));

app.get("/", function (req, res) {
  res.render("home", {
    nombre: "Diego Touriño",
    titulo: "CURSO NODE",
  });
});

app.get("/generic", function (req, res) {
  res.render("generic", {
    nombre: "Diego Touriño",
    titulo: "CURSO NODE",
  });
});

app.get("/elements", function (req, res) {
  res.render("elements", {
    nombre: "Diego Touriño",
    titulo: "CURSO NODE",
  });
});

app.get("/*", function (req, res) {
  res.sendFile(__dirname + "/public/404.html");
});
app.listen(port, () => {
  console.log(`Pagina de prueba en http://localhost:${port}`);
});
