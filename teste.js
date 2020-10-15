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