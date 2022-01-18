const express = require('express')
const cors = require('cors')
const app = express()
app.use(express.json())
app.use(cors({ origin: '*' }));
const movieManager = require('./controllers/movies')
const swapiAula = require('./controllers/swapi')
const { response } = require('express')


//swapi

app.get('/api/people', async (req,res) => {
    const apiResponse = await swapiAula.getPeople()
    res.send(apiResponse)
  })
  
  
  app.get('/api/spaceships', async (req,res) => {
    const apiResponse = await swapiAula.getSpaceShips()
    res.send(apiResponse)
  })
  
  app.get('/api/vehicles', async (req,res) => {
    const apiResponse = await swapiAula.getVehicles()
    res.send(apiResponse)
  })
  
  app.get('/api/species', async (req,res) => {
    const apiResponse = await swapiAula.getSpecies()
    res.send(apiResponse)
  })
  
  app.get('/api/movies', async (req,res) => {
    const apiResponse = await swapiAula.getMovies()
    res.send(apiResponse)
  })


//Api movies


  app.get('/SW', (req, res) => {
    res.send(movieManager.showMe())
  }
)


app.get('/SW/search/:index', (req, res) => {
    const parametro = req.params
    res.send(movieManager.showMe(parametro.index))
    }
)

app.get('/SW/search', (req, res) => {            //procura um filme por um termo
  res.send(movieManager.searchMovie(req.query.name))
}
)

app.post('/SW/add', (req, res) => {
  movieManager.addMovie(req.body)
  res.send(`The movie has been added!`)
}
)


app.get('/SW/crono', (req, res) => {          // ordena a lista pela sequência cronológica
  movieManager.cronoMovie()
  res.send(`List Updated!`)
}
)


app.post('/SW/:type', (req, res) => {
  const parametro = req.params
  movieManager.insertMovie(parametro.type,req.body)         //post Adiciona um filme no início ou no fim begin end
  res.send(`The movie has been added!`)
}
)

app.delete('/SW/:index', (req, res) => {
  let index = req.params.index
  movieManager.deleteMovie(index)
  res.send('Movie deleted!')
}
)

app.put('/SW/:index', (req, res) => {
  let index = req.params.index
  let movie = req.body
  movieManager.updateMovie(index, movie)
  res.send('Movie updated!')
}
)


app.listen(process.env.PORT || 3000)
//app.listen(3000)