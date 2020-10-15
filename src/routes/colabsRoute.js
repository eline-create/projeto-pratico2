const express = require("express");
const router = express.Router();
const empController = require("../controller/colabsController");

//rotas a serem realizadas

//1. POST - Colab;
//2. DELETE - Colab;
//3. GET - todos os colab;
//4. GET filter - Idade do colab por id;
//5. PUT;
//6. PATCH.

router.post("/", empController.postEmp);

router.delete("/colabs/:id", empController.deleteEmp);

router.get("/colabs", empController.getAllEmp);

router.get("/colabs/:idade", empController.getByAge);

router.put("/:id", empController.putEmp);

router.patch("/:id", empController.patchEmp);


module.exports = router;