const generos_do_livro = ['terror', 'drama', 'romance', 'detetive']
const genero_que_quero = 'terror'
console.log(generos_do_livro.includes(genero_que_quero))



// Buscando o funcionário por ID para mostrar idade e nome
// const getEmployeesAge = (req, res) => {
//   const id = req.params.id  
//   const funcionarioFiltrado = funcionarios.find((funcionario) => funcionario.id == id);
//   const idadeDoFuncionario = funcionarioFiltrado.age
//   const nomeDoFuncionario = funcionarioFiltrado.name
//   res.status(200).send({ nomeDoFuncionario, idadeDoFuncionario })
// };

//Usando o MAP e o FILTER

// const getBookAndAuthor = (req, res) => {
//     const autor = req.params.author;
//     console.log(autor);
//     const livrosAutor = livros.filter((livro) => livro.author == autor);
    
//     const titulo = livrosAutor.map(function(livro) {
//     return ({
//     titulo: livro.title,
//     editora: livro.publisher
//     })
    
//     });
//     res.status(200).send(titulo);
//     }
    

// Usando o método POST

const postBook = (req, res) => {
     // console.log(req.body);
    // const { id, nome, autor, editora, genero, ano, quantEstoque } = req.body;
    // livros.push({
    //   id,
    //   nome,
    //   autor,
    //   editora,
    //   genero,
    //   ano,
    //   quantEstoque,
    // });

  const id = (livros[livros.length - 1].id + 1)
  const livro = req.body;
  const novoLivro = [{id, ...livro}]
    console.log(id);
    console.log(livro);

  livro.push(novoLivro);

  
    // fs.writeFile(
    //   "./src/model/livros.json",
    //   JSON.stringify(livros),
    //   "utf8",
    //   function (err) {
    //     if (err) {
    //       return res.status(424).send({
    //         message: err,
    //       });
    //     }
    //     console.log("Arquivo atualizado com sucesso!");
    //   }
    // );
  
    res.status(201).send(livros); // Erro 201 para uso do POST
  };


  const quinzeOut