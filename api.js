const express = require('express');
const app = express()
const cors = require('cors');
app.use(express.json())
app.use(cors({
  origin: '*'
}));
const localController = require('./controllers/movies');
const swapiController = require('./controllers/swapi');

app.get('/api/movies', (request, response) => {
  let name = request.query.name

  if (name != undefined) {
    response.send(localController.findMovie(name))
  } else {
    response.send({data: localController.readMovies()})
  }
})

app.get('/:indice', (request, response) => {  
  let indice = request.params.indice
  response.send(localController.readMovies(indice))
})

app.delete('/:indice', (request, response) => {
  let indice = request.params.indice
  localController.deleteMovie(indice)
  response.send('Movie deleted!')
})

app.post('/', (request, response) => {
  let movie = request.body
  localController.createMovie(movie)
  response.send('Movie created!')
})

app.put('/:indice', (request, response) => {
  let indice = request.params.indice
  let movie = request.body
  localController.updateMovie(indice, movie)
  response.send('Movie updated!')
})

app.get('/api/people', async (request, response) => {
  const result = await swapiController.getpeople()
  response.send(result)
})

app.get('/api/vehicles', async (request, response) => {
  const result = await swapiController.getvehicles()
  response.send(result)
})

app.get('/api/films', async (request, response) => {
  const result = await swapiController.getfilms()
  response.send(result)
})

app.get('/api/planets', async (request, response) => {
  const result = await swapiController.getplanets()
  response.send(result)
})

app.get('/api/spaceships', async (request, response) => {
  const result = await swapiController.getspaceships()
  response.send(result)
})

app.get('/api/species', async (request, response) => {
  const result = await swapiController.getspecies()
  response.send(result)
})

app.listen(process.env.PORT || 3000)

