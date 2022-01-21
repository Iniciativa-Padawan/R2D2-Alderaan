const express = require("express");
const app = express();
const functionController = require("./controllers/functions");
const swapiController = require('./controllers/swapi')
const cors = require('cors')
app.use(express.json());
app.use(cors({ origin: '*' }));



app.get("/api/films", (req, res) => {
  res.send(functionController.readFilm());
});

app.post("/api/films", (req, res) => {
    let film = req.body;
  functionController.createFilm(film);
  res.send("Film created!");
});

app.put("/api/films/:index", (req, res) => {
    let index = req.params.index
    let film = req.body
    functionController.updateFilm(index, film) 
    res.send("Film Update!!")
})


app.delete("/api/films/:index", (req, res) => {
    let index = req.params.index;
  functionController.deleteFilm(index);
  res.send("The Film was deleted!");
});


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

app.listen(3000);

