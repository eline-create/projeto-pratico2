const livros = require("../model/livros.json");
const fs = require("fs");
//const { json } = require("express") - para usar o express


//Controller(Método) para cada rota a ser realizada

//1. POST - Livros;
//2. DELETE - Livro;
//3. GET - todos os livros (GetAllBooks);
//4. GET filter - livros por genero (GetBYGenre);

// Usando o método GET

const getAllBooks = (req, res) => {
    console.log(req.url);
    res.status(200).send(livros);
  };
  
  const getByGenre = (req, res) => {
    const id = req.params.id;
  
    res.status(200).send(livros.filter((livro) => livro.id == id));
    
  };

// Usando o método POST

const postBook = (req, res) => {
    console.log(req.body);
    const { id, nome, autor, editora, genero, ano, quantEstoque } = req.body;
    livros.push({ id, nome, autor, editora, genero, ano, quantEstoque });

    fs.writeFile("./src/model/livros.json", JSON.stringify(livros), "utf8", function(err) {
      if (err) {
        return res.status(424).send({ message:err });
      }
      console.log("Arquivo atualizado com sucesso!");

    });

    res.status(201).send(livros); // Erro 201 para uso do POST
};

// Usando o método DELETE

const deleteBook = (req, res) => {
  const id = req.params.id;
  const livroFiltrado = livros.find((livro) => livro.id == id);
  const index = livros.indexOf(livroFiltrado);
  livros.splice(index, 1);


//PARA REESCREVER O ARQUIVO ATUALIZADO

 fs.writeFile("./src/model/livros.json", JSON.stringify(livros), "utf8", function(err) {
   if (err) {
    return res.status(424).send({ message:err });
  }
  console.log("Livro excluido e arquivo atualizado com sucesso!");

 });

  res.status(200).send(livros);

};



module.exports = {
  getAllBooks,
  getByGenre,
  postBook,
  deleteBook
};




