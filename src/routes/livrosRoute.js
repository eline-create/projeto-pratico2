const express = require("express");
const router = express.Router();
const controller = require("../controller/livrosController");

//rotas a serem realizadas

//1. POST - Livros;
//2. DELETE - Livro;
//3. GET - todos os livros;
//4. GET filter - livros por genero;
//5. PUT;
//6. PATCH.


router.get("/", controller.getAllBooks);

router.get("/livros/:genero", controller.getByGenre);

router.post("/", controller.postBook);

router.delete("/:id", controller.deleteBook);


//Inserir as rotas de PUT e PATCH

router.put("/:id", controller.putBooks);
router.patch("/:id", controller.patchBooks);

module.exports = router;