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
  res.status(200).send(colabs);
};

const getByAge = (req, res) => {
  const idade = req.params.idade;

  res.status(200).send(colabs.filter((colab) => colab.idade == idade));
};

// Usando o método POST

const postEmp = (req, res) => {
  console.log(req.body);
  const { id, nome, idade, dataContrato, funcao, telefone, email } = req.body;
  colabs.push({ id, nome, idade, dataContrato, funcao, telefone, email });

  fs.writeFile(
    "./src/model/colabs.json",
    JSON.stringify(colabs),
    "utf8",
    function (err) {
      if (err) {
        return res.status(424).send({ message: err });
      }
      console.log("Arquivo atualizado com sucesso!");
    }
  );

  res.status(201).send(colabs); // Erro 201 para uso do POST
};

// Usando o método DELETE

const deleteEmp = (req, res) => {
  const id = req.params.id;
  const colabFiltrado = colabs.find((colab) => colab.id == id);
  const index = colabs.indexOf(colabFiltrado);
  colabs.splice(index, 1);

  //PARA REESCREVER O ARQUIVO ATUALIZADO

  fs.writeFile(
    "./src/model/colabs.json",
    JSON.stringify(colabs),
    "utf8",
    function (err) {
      if (err) {
        return res.status(424).send({ message: err });
      }
      console.log("Arquivo atualizado com sucesso!");
    }
  );

  res.status(200).send(colabs);
};

// Inserindo PUT e PATCH

const putEmp = (req, res) => {
  const id = req.params.id;
  try {
    const colabASerModificado = colabs.find((colab) => colab.id == id);
    console.log(colabASerModificado); // para verificar se o array foi encontrado
    const colabAtualizado = req.body;
    console.log(colabAtualizado); // Requisição com as alterações
    const index = colabs.indexOf(colabASerModificado);
    console.log(index); // verificando o index
    colabs.splice(index, 1, colabAtualizado);
    console.log(colabs); // verificando o array

    //Função para atualizar o JSON

    fs.writeFile(
      "./src/model/colabs.json",
      JSON.stringify(colabs),
      "utf8",
      function (err) {
        if (err) {
          return res.status(424).send({ message: err });
        }
        console.log("Arquivo atualizado com sucesso");
      }
    );
    res.status(200).send(colabs);
  } catch (err) {
    return res.status(424).send({ message: err });
  }
};


// Acrescentei o Status de Ativo, para não deletar e sim deixar em stand by

const patchEmp = (req, res) => {
const id = req.params.id;
  const atualizacao = req.body;

  try{
    const colabASerModificado = colabs.find((colab) => colab.id == id);
    console.log(Object.keys(colabASerModificado)) // Função para substituir o valor no objeto a ser modificado. Se a propriedade não for encontrada, a chave é adicionada.

    Object.keys(atualizacao).forEach((chave) => {
      colabASerModificado[chave] = atualizacao[chave]
    });
    fs. writeFile("./src/model/colabs.json", JSON.stringify(colabs), "utf8", function(err){
      if (err) {
        return res.status(424).send({ message: err });        
      }
      console.log("Arquivo atualizado com sucesso");
    });
    return res.status(200).send(colabs);
  } catch(err){
    return res.status(424).send({message: err});
  }

};

module.exports = {
  getAllEmp,
  getByAge,
  postEmp,
  deleteEmp,
  putEmp,
  patchEmp,
};
