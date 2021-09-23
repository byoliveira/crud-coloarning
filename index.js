const { request, response } = require("express");
const express = require("express"); // importei meu express
const { v4 } = require("uuid"); 

const app = express(); // aqui estou atribuindo o express há uma variável

app.use(express.json()) // aqui eu defino o tipo de dado a ser trafegado


/**
 *  MÉTODOS HTTP:
 *  GET - LISTAR
 *  POST - CRIAR
 *  PUT - ATUALIZAR
 *  DELETE - DELETAR
 */


//const usuarios = [] // aqui fica armazenado todos os usuários

app.get('/users', (request, response) => {
    return response.json([
      "OOOOOI"
    ]) // retornar meu vetor de array
})

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

app.put('/users/:id', (request, response) => {
  const { id } = request.params;   // aqui eu envio o id do usuário
  const { name, lastName, phone, sexo } = request.body;


  // aqui eu só valido se ele existe ou não dentro do meu vetor
  const userIndex = usuarios.findIndex( usuario => usuario.id === id)

  if( userIndex < 0 ) {
    return response.status(400).json({ error: 'Usuário não encotrado'})
  }

  const usuario = {
    id,
    name, 
    lastName, 
    phone, 
    sexo
  } 

  usuarios[userIndex] = usuario;

  return response.json(usuario)
})

app.delete('/users/:id', (request, response) => {
  const { id } = request.params;

  // aqui eu só valido se ele existe ou não dentro do meu vetor
  const userIndex = usuarios.findIndex( usuario => usuario.id === id)

  if( userIndex < 0 ) {
    return response.status(400).json({ error: 'Usuário não encotrado'})
  }

  usuarios.splice(userIndex, 1);

  return response.status(204).send();
})

app.listen(3333)  //  http://localhost:3333/users