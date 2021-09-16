const express = require("express");
const { v4 } = require("uuid")

const app = express();

app.use(express.json())

/**
 *  MÉTODOS HTTP:
 *  GET - LISTAR
 *  POST - CRIAR
 *  PUT - ATUALIZAR
 *  DELETE - DELETAR
 */

const usuarios = []

// http://localhost:3333/users
app.post('/users', (request, response) => {
  //aqui eu recebo os dados do front-end
  const { name, lastName, phone, sexo} = request.body;

  // aqui eu armazeno os dados recebidos em uma variável
  const usario = { id: v4(), name, lastName, phone, sexo};

  // eu publico os dados da variável dentro do meu vetor/banco dados
  usuarios.push(usario)

  return response.json(usario)
})

app.listen(3333)  //  http://localhost:3333

