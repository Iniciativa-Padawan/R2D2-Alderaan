const express = require("express");
const cors = require("cors")
const app = express();
app.use(express.json());
app.use(cors({ origin: '*' }));
const swapiController = require("./controllers/swapi")
const functionsController = require("./controllers/functions");
const req = require("express/lib/request");

/**
 * Requisição para ler todos os filmes da lista
 * @param  {} "/api/movies"
 * @param  {} req - Requisição com o verbo GET do cliente
 * @param  {} res - Resposta a ser dada para o cliente
 */

app.get("/api/movies", (req, res) => {
    res.send(functionsController.readMovie()) //Chamada da Função readMovies[lerFilmes] do modulo functions.js
})

/**
 * Requisição para criar um filme ao final da lista
 * @param  {} "/api/movies" - Caminho da Resposta da Requisição
 * @param  {} req - Requisição com o verbo POST do cliente
 * @param  {} res - Resposta a ser dada para o cliente
 */
app.post("/api/movies", (req, res) => {
    let movie = req.body
    functionsController.createMovieOrder(movie)
    res.send("MOVIE CREATED")
})

/**
 * Requisição para substituir/atualizar o filme da posição do indice(index) escolhida
 * @param  {index"} "/api/movies/
 * @param  {} req - Requisição com o verbo PUT do cliente
 * @param  {} res - Resposta a ser dada para o cliente
 */
app.put("/api/movies/:index", (req, res) => {
    let index = req.params.index
    let movie = req.body
    functionsController.updateMovie(index, movie) //Chamada da Função 
    res.send("MOVIE UPDATED")
})

/**
 * Requisição para deletar um filme da lista
 * @param  {index"} "/api/movies/ - Caminho da Resposta da Requisição
 * @param  {} req - Requisição com o verbo DELETE do cliente
 * @param  {} res - Resposta a ser dada para o cliente
 */
app.delete("/api/movies/:index", (req, res) => {
    let index = req.params.index
    functionsController.deleteMovie(index) //Chamada da Função deleteMovie(deletarFilme) do modulo functions.js passando o parametro da posição a ser deletado
    res.send("MOVIE DELETED")
})

//
app.get("/api/species", async (req, res) => {
    const apiRes = await swapiController.getSpecies()
    res.send(apiRes)
})

app.get("/api/planets", async (req, res) => {
    const apiRes = await swapiController.getPlanets()
    res.send(apiRes)
})

app.get("/api/people", async (req, res) => {
    const apiRes = await swapiController.getPeople()
    res.send(apiRes)
})

app.get("/api/spaceships/", async (req, res) => {
    const apiRes = await swapiController.getSpaceships()
    res.send(apiRes)
})

app.get("/api/vehicles", async (req, res) => {
    const apiRes = await swapiController.getVehicles()
    res.send(apiRes)
})



app.listen(process.env.PORT || 3000)