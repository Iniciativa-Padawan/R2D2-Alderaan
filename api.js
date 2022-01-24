const express = require('express');
const cors = require('cors')
const app = express()
const movieManager = require('./controllers/movies');
const swapiManager = require('./controllers/swapi');
app.use(cors({ origin: '*' }));
app.use(express.json())


//swapi
app.get('/api/films', async (req,res) => {
  const apiResponse = await swapiAula.getMovies()
  res.send(apiResponse)
})

app.get('/api/species', async (req,res) => {
  const apiResponse = await swapiManager.getSpecies()
  res.send(apiResponse)
}
)

app.get('/api/planets', async (req,res) => {
    const apiResponse = await swapiManager.getPlanets()
    res.send(apiResponse)
  }
)

app.get('/api/people', async (req,res) => {
    const apiResponse = await swapiManager.getPeople()
    res.send(apiResponse)
  }
)
  
app.get('/api/spaceships', async (req,res) => {
    const apiResponse = await swapiManager.getSpaceShips()
    res.send(apiResponse)
  }
)
  
app.get('/api/vehicles', async (req,res) => {
    const apiResponse = await swapiManager.getVehicles()
    res.send(apiResponse)
  }
)

  


//Api movies


app.get('/api/movies', (req, res) => {
    res.send(movieManager.showMe())
  }
)

app.get('/api/search/:index', (req, res) => {
    const parametro = req.params
    res.send(movieManager.showMe(parametro.index))
  }
)

app.get('/api/search', (req, res) => {            //procura um filme por um termo
    res.send(movieManager.searchMovie(req.query.name))
  }
)


app.get('/api/order', (req, res) => {          // ordena a lista pela sequência cronológica
    movieManager.ernstOrder()
    res.send(`List Updated!`)
  }
)


app.post('/api/movies/:type', (req, res) => {
  const parametro = req.params
  movieManager.insertMovie(parametro.type,req.body)         //post Adiciona um filme no início ou no fim begin end
  res.send(`The movie has been added!`)
}
)

app.post('/api/movies', (req, res) => {
    const movie = req.body
    movieManager.insertMovieEnd(movie)         //post Adiciona um filme no início ou no fim begin end
    res.send(`The movie has been added!`)
  }
)

app.delete('/api/movies/:index', (req, res) => {
    let index = req.params.index
    movieManager.deleteMovie(index)
    res.send('Movie deleted!')
  }
)

app.put('/api/movies/:index', (req, res) => {
    let index = req.params.index
    let movie = req.body
    movieManager.updateMovie(index, movie)
    res.send('Movie updated!')
  }
)


app.listen(process.env.PORT || 3000)



/**
 * @author Gabriel Santan <gabrielpser@gmail.com>
 */