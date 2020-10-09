const colabs = require("../model/colabs.json");
const fs = require("fs");
//const { json } = require("express") - para usar o express

//Controller(Método) para cada rota a ser realizada

//1. POST - colaboradores;
//2. DELETE - colaboradores;
//3. GET - todos os colaboradores (GetAllEmp);
//4. GET filter - colaboradores por idade (GetByAge);


// Usando o método GET

const getAllEmp = (req, res) => {
  console.log(req.url);
  res.status(200).send(colab);
};

const getByAge = (req, res) => {
  const id = req.params.id;

  res.status(200).send(colabs.filter((colab) => colab.id == id));
  
};



// Usando o método POST

const postEmp = (req, res) => {
    console.log(req.body);
    const { id, nome, idade, dataContrato, funcao, telefone, email } = req.body;
    colabs.push({ id, nome, idade, dataContrato, funcao, telefone, email });

    fs.writeFile("./src/model/colabs.json", JSON.stringify(colabs), "utf8", function(err) {
      if (err) {
        return res.status(424).send({ message:err });
      }
      console.log("Arquivo atualizado com sucesso!");

    });

    res.status(201).send(colabs); // Erro 201 para uso do POST
};

// Usando o método DELETE

const deleteEmp = (req, res) => {
  const id = req.params.id;
  const colabFiltrado = colabs.find((colab) => colab.id == id);
  const index = livros.indexOf(colabFiltrado);
  colabs.splice(index, 1);




//PARA REESCREVER O ARQUIVO ATUALIZADO

 fs.writeFile("./src/model/colabs.json", JSON.stringify(colabs), "utf8", function(err) {
   if (err) {
    return res.status(424).send({ message:err });
  }
  console.log("Arquivo atualizado com sucesso!");

 });

  res.status(200).send(colabs);

};


module.exports = {
  getAllEmp,
  getByAge,
  postEmp,
  deleteEmp
};
