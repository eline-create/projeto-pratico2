const express = require("express");
const router = express.Router();
const controller = require("../controller/livrosController");

//rotas a serem realizadas

//1. POST - Livros;
//2. DELETE - Livro;
//3. GET - todos os livros;
//4. GET filter - livros por genero;


router.get("/", controller.getAllBooks);

router.get("/livros/genero", controller.getByGenre);

router.post("/", controller.postBook);

router.delete("/:id", controller.deleteBook);





module.exports = router;