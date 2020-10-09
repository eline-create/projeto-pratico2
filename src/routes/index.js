const express = require("express");
const router = express.Router();

router.get("/", function (req, res) {
  res.status(200).send({
    title: "Livraria Várzea - o melhor cantinho da Cidade",
    version: "1.0.0"
  })
})

module.exports = router