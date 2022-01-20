const express = require('express');
const app = express()
const cors = require('cors');
app.use(express.json())
app.use(cors({
  origin: '*'
}));
const localController = require('./controllers/localapi');
const swapiController = require('./controllers/swapi');


app.get('/api/movies', (request, response) => {
  let name = request.query.name

  if (name != undefined) {
    response.send(localController.findMovie(name))
  } else {
    response.send({data: localController.readMovie()})
  }
})


/*exibir itens da lista*/
app.get('/:indice', (request, response) => {  
  let indice = request.params.indice
  response.send(localController.readMovie(indice))
})

/*deletar itens da lista*/
app.delete('/api/movies/:indice', (request, response) => {
  let indice = request.params.indice
  localController.deleteMovie(indice)
  response.send('Movie deleted!')
})

/*Criar itens na lista de filmes*/
app.post('/api/movies/', (request, response) => {
  let movie = request.body
  localController.createMovie(movie)
  response.send('Movie created!')
})

/*editar a lista de filmes*/
app.put('/api/movies/:indice', (request, response) => {
  let indice = request.params.indice
  let movie = request.body
  localController.updateMovie(indice, movie)
  response.send('Movie updated!')
})

/*exibir os itens de personagens*/
app.get('/api/people', async (request, response) => {
  const result = await swapiController.getpeople()
  response.send(result)
})

/*exibir itens de veículos*/
app.get('/api/vehicles', async (request, response) => {
  const result = await swapiController.getvehicles()
  response.send(result)
})

/*exibir lista de filmes*/
app.get('/api/films', async (request, response) => {
  const result = await swapiController.getfilms()
  response.send(result)
})

/*exibir itens de planetas*/
app.get('/api/planets', async (request, response) => {
  const result = await swapiController.getplanets()
  response.send(result)
})

/*exibir naves*/
app.get('/api/spaceships', async (request, response) => {
  const result = await swapiController.getspaceships()
  response.send(result)
})

/*exibir espécies dos personagens*/
app.get('/api/species', async (request, response) => {
  const result = await swapiController.getspecies()
  response.send(result)
})

/*requerimento da porta onde ocorrerá as exibições*/
app.listen(process.env.PORT || 3000)

