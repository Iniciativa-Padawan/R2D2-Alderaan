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
  let movies =  localController.readMovies()
   response.send({
     count: movies.length,
     data: movies
   })  
})

app.get('/:indice', (request, response) => {  
  let indice = request.params.indice
  response.send(localController.readMovies(indice))
})

app.delete('/:indice', (request, response) => {
  let indice = request.params.indice
  localController.deleteMovies(indice)
  response.send('Movie deleted!')
})

app.post(["/:type/:indice", "/:type"], handleInsert)
    function handleInsert (request, response) {
      let type = request.params.type
      let movie = request.body
      let indice = request.params.indice
      localController.createMovies(type, movie, indice)
      response.send("Movie Created!")
    }

app.put('/:indice', (request, response) => {
  let indice = request.params.indice
  let movie = request.body
  localController.updateMovie(indice, movie)
  response.send('Movie updated!')
})

app.get('/api/people', async (request, response) => {
  const result = await swapiController.getPeople()
  response.send(result)
})

app.get('/api/vehicles', async (request, response) => {
  const result = await swapiController.getVehicles()
  response.send(result)
})

app.get('/api/films', async (request, response) => {
  const result = await swapiController.getFilms()
  response.send(result)
})

app.get('/api/planets', async (request, response) => {
  const result = await swapiController.getPlanets()
  response.send(result)
})

app.get('/api/spaceships', async (request, response) => {
  const result = await swapiController.getSpaceships()
  response.send(result)
})

app.get('/api/species', async (request, response) => {
  const result = await swapiController.getSpecies()
  response.send(result)
})

app.listen(process.env.PORT || 3000)