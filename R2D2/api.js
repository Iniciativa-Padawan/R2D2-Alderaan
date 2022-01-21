const express = require("express");
const app = express();
const controller = require("./controllers/functions");
const swapiController = require('./controllers/swapi')
const cors = require('cors')
app.use(express.json());
app.use(cors({ origin: '*' }));


app.get('/api/planets', async (req, res) => {
    let plaRes = await swapiController.getPlanets()
    res.send(plaRes)

})

app.get('/api/spaceships', async (req, res) => {
    let spaRes = await swapiController.getStarships()
    res.send(spaRes)

})

app.get('/api/vehicles', async (req, res) => {
    let vehRes = await swapiController.getVehicles()
    res.send(vehRes)

})

app.get('/api/people', async (req, res) => {
    
    let apiRes = await swapiController.getPeople()
    res.send(apiRes)

})

app.get('/api/species', async (req, res) =>{
    let speRes = await swapiController.getSpecies()
    res.send(speRes)
})



app.get("/", (req, res) => {
  let query = req.query.name;
  if (query != undefined) {
    res.send(controller.findMovie(query));
  } else {
    res.send(controller.readMovie());
  }
});


app.get("/api/movie/:index", (req, res) => {
  let index = req.params.index;
  res.send(controller.readMovie(index));
});

app.delete("/:index", (req, res) => {
  let index = req.params.index;
  res.send(controller.deleteMovie(index));
  res.send("The movie was deleted!");
});

app.post("/", (req, res) => {
  let movie = req.body;
  controller.createMovie(movie);
  res.send("Movie created!");
});

app.put("/", (req, res) => {
  let index = req.params.index;
  let movie = req.body;
  controller.updateMovie(index, movie);
  res.send("Movie update!");
});

app.listen(3000);

