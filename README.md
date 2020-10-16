<h1> Projeto Prático 2 </h1>

Este repositório contém a continuação do [Projeto Prático](https://github.com/eline-create/projeto-pratico). Lá no primeiro repositório é possível ver o passo a passo de como iniciar um projeto deste tipo do zero, como o que deve ser instalado na máquina, desde os softwares às bibliotecas e depêndencias.

Neste utilizaremos, mais outros 2 métodos de JavaScript, que são o POST e o DELETE.

Mas, não deixaremos de usar os outros métodos. Será um [CRUD](https://blog.geekhunter.com.br/criar-crud-nodejs/) completo !!!!

Para saber mais sobre os Métodos de Requisição do JavaScript, favor verificar a documentação do [MDN](https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Methods).

<h2>O que vamos fazer?</h2> 

### Situação Fictícia

Você foi contratada para fazer a implementação de um sistema de uma livraria na cidade do Recife. 

1 - A contratante espera que no sistema ela possa fazer a inclusão de seu estoque contendo as seguintes informações: 

Livros: {
    
    id, 
    nome,
    autor,
    editora, 
    gênero,
    quantidade em estoque. (POST)
} 

2 - A mesma livraria decidiu integrar um sisteminha em que será possível a adição de seus funcionários. A contratante espera que no sistema ela possa fazer a inclusão dos dados de cada um deles, contendo:

Funcionários: {
    
    id,
    nome, 
    idade, 
    data da contratação, 
    telefone, 
    email. (POST)

} 

3 - Nossa livraria gostaria de garantir que será possível a exclusão do registro de determinado livro. (DELETE)

4 - Eles também desejam que seja possível a exclusão do registro de um funcionário. (DELETE)

5 - Nossa contatante espera que seja possível o acesso a uma lista completa com todos os livros do estoque.(GET)

6 - Eles também adorariam ter acesso a uma lista com todos os funcionários.(GET)

7 - Seria de grande valia se nossa livaria tivesse acesso a uma lista com todos os livros por categoria. (GET filter)

8 - A livaria gostaria de ter acesso a idade de um funcionário, de acordo com seu id. (GET filter)


## Utilizando os Métodos PUT e PACTH

Colocando em pratica os novos métodos estudados.

Vamos aplicar com os seguintes pedidos feitos pelo nosso cliente, A Livraria:

1 - Para os livros, crie um método em que será possível a atualização do campo Nome utilizando o método HTTP PUT. 

2 - Para os livros, crie um método em que será possível a atualização do campo Nome utilizando o método HTTP PATCH. Aqui no repositório quis atualizar o campo "renovarEstoque". Como ele não existia, foi criado.

3 - Para os funcionários, crie um método em que será possível a atualização do campo Nome utilizando o método HTTP PUT.

4 - Para os funcionários, crie um método em que será possível a atualização do campo Nome utilizando o método HTTP PATCH. Já para estes, o campo "statusColaborador": "Ativo" , foi inserido, para que no futuro, algum funcionário seja desligado da Livraria , ela não precise excluir os dados, apenas deixar como Inativo em seu banco de Dados.

### Extra

Fizemos um código que atualiza os "id" dos objetos inseridos automaticamente, para que não tenha problemas em inserir o id errado ou duplicá-lo.

Para achar esse código extra é só ir lá no arquivo livrosController.js(41:172), que você verá o comentário o código logo a seguir.


PALAVRAS-CHAVE: Reprograma, Porto Digital/MINAs, JavaScript, Node.js, Métodos de Requisição HTTP, JSON.





