const express = require("express");
const app = express();
const functionController = require("./controllers/functions");
const swapiController = require('./controllers/swapi')
const cors = require('cors')
app.use(express.json());
app.use(cors({ origin: '*' }));
const req = require("express/lib/request");


app.get('/api/movies', (req, res) => {
    let name = request.query.name
  
    if (name != undefined) {
      response.send(localController.findFilm(name))
    } else {
      let filmes = functionController.readFilm()
      response.send({count: filmes.length, data: filmes})
    }
  })


//Solicita a leitura dos filmes, para que assim sejam mostrados.
app.get("/api/films", (req, res) => {
  res.send(functionController.readFilm());
});
//Realiza uma mudança nos filmes, nesse caso criando novos.
app.post("/api/films", (req, res) => {
    let film = req.body;
  functionController.createFilm(film);
  res.send("Film created!");
});
//Faz a substituição dos filmes de acordo com a requisição(req).
app.put("/api/films/:index", (req, res) => {
    let index = req.params.index
    let film = req.body
    functionController.updateFilm(index, film) 
    res.send("Film Update!!")
})

//Remove o filme indicado pelo "index".
app.delete("/api/films/:index", (req, res) => {
    let index = req.params.index;
  functionController.deleteFilm(index);
  res.send("The Film was deleted!");
});

//Puxa e mostra os planetas chamando a função.
app.get('/api/planets', async (req, res) => {
    let plaRes = await swapiController.getPlanets()
    res.send(plaRes)

})
//Puxa e mostra as espaçonaves chamando a função.
app.get('/api/spaceships', async (req, res) => {
    let spaRes = await swapiController.getStarships()
    res.send(spaRes)

})
//Puxa e mostra os veículos chamando a função.
app.get('/api/vehicles', async (req, res) => {
    let vehRes = await swapiController.getVehicles()
    res.send(vehRes)

})
//Puxa e mostra os personagens chamando a função.
app.get('/api/people', async (req, res) => {
    let apiRes = await swapiController.getPeople()
    res.send(apiRes)

})
//Puxa e mostra as espécies chamando a função.
app.get('/api/species', async (req, res) =>{
    let speRes = await swapiController.getSpecies()
    res.send(speRes)
})



app.listen(3000);

