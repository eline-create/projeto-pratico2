
// testanto o .includes

const generos_do_livro = ['terror', 'drama', 'romance', 'detetive']
const genero_que_quero = 'terror'
//console.log(generos_do_livro.includes(genero_que_quero))



// Buscando o funcionário por ID para mostrar idade e nome -  Código de Clarissa
// const getEmployeesAge = (req, res) => {
//   const id = req.params.id  
//   const funcionarioFiltrado = funcionarios.find((funcionario) => funcionario.id == id);
//   const idadeDoFuncionario = funcionarioFiltrado.age
//   const nomeDoFuncionario = funcionarioFiltrado.name
//   res.status(200).send({ nomeDoFuncionario, idadeDoFuncionario })
// };

//Usando o MAP e o FILTER - Código de Thaisa
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
    
//Felicidades aos Professores

  // const a = "Feliz";
  // const b = "Professores";

  // console.log(`${a} dia dos ${b}, João!!!!`); 

const quinzeOut = ['^-^'];
const pessoa = {
  nome:"Insira aqui o seu nome",
  data: "Dia dos Professores",}

  console.log(`${pessoa.nome}, Feliz ${pessoa.data}, ${quinzeOut}`)




