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
  

// Filtrar por gênero - VERIFICAR

  const getByGenre = (req, res) => {
    const genero = req.params.genero;
    console.log(req.url);  
    res.status(200).send(livros.filter((livro) => [livro.genero] == genero[livro.genero]));
    
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

// Inserir os métodos de PUT e PATCH

const putBooks = (req, res) => {
  const id =  req.params.id;
  try{
    const livroASerModificado = livros.find((livro) => livro.id == id);
    console.log(livroASerModificado); // para verificar se o array foi encontrado
    const livroAtualizado = req.body;
    console.log(livroAtualizado); // Requisição com as alterações
    const index = livros.indexOf(livroASerModificado);
    console.log(index); // verificando o index
    livros.splice(index, 1, livroAtualizado);
    console.log(livros); // verificando o array

    //Função para atualizar o JSON

    fs.writeFile("./src/models/livros.json", JSON.stringify(livros), "utf8", function (err) {
      if (err) {
        return res.status(424).send({ message: err });
      }
      console.log("Arquivo atualizado com sucesso");
  
    });  
    res.status(200).send(livros);
  } catch(err){
    return res.status(424).send({ message: err });
  }

}


const patchBooks = (req, res) => {
  const id = req.params.id;
  const atualizacao = req.body;

  try{
    const livroASerModificado = livros.find((livro) => livro.id == id);
    console.log(Object.keys(livroASerModificado)) // Função para substituir o valor no objeto a ser modificado. Se a propriedade não for encontrada, a chave é adicionada.

    Object.keys(atualizacao).forEach((chave) => {
      livroASerModificado[chave] = atualizacao[chave]
    });
    fs. writeFile("./src/models/livros.json", JSON.stringify(livros), "utf8", function(err){
      if (err) {
        return res.status(424).send({ message: err });        
      }
      console.log("Arquivo atualizado com sucesso");
    });
    return res.status(200).send(livros);
  } catch(err){
    return res.status(424).send({message: err});
  }
};

module.exports = {
  getAllBooks,
  getByGenre,
  postBook,
  deleteBook,
  putBooks,
  patchBooks

};




