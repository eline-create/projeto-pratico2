//FAzer um outro arquivo app.js para os Colaboradores???

const express = require("express");
const bodyParser = require("body-parser");
const app = express();

//rotas

const index = require("./routes/index")
const livros = require("./routes/livrosRoute")
const colabs = require("./routes/colabsRoute")

//configurar body parser

app.use(bodyParser.json());


//Outra opção. Caso essa seja usada não precisa instalar o body-parser.
//app.use(express.json());


app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*")
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  )
  next()
})

app.use("/", index)
app.use("/livros", livros)
app.use("/colabs", colabs)

module.exports = app

