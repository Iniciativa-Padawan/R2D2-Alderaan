const { request, response } = require('express')
const express = require('express')
const res = require('express/lib/response')
const gerenciadorStarWars = require('./controllers/functions')
const app = express()
const swapController = require('./controllers/swap')
app.use(express.json())

app.get('/swap', async (request,response) => {
    const apiResponse = await swapController.getPeople()
    response.send(apiResponse)
})

app.get('/swap/planets', async (request,response) => {
    const apiResponse = await swapController.getPlanets()
    response.send(apiResponse)
})

app.get('/swap/starships', async (request,response) => {
    const apiResponse = await swapController.getStarships()
    response.send(apiResponse)
})

app.get('/swap/vehicles', async (request,response) => {
    const apiResponse = await swapController.getVehicles()
    response.send(apiResponse)
})

app.get('/swap/species', async (request,response) => {
    const apiResponse = await swapController.getSpecies()
    response.send(apiResponse)
})

app.get('/swap/films', async (request,response) => {
    const apiResponse = await swapController.getFilms()
    response.send(apiResponse)
})


app.get('/filmes',(req,res) => {
    res.send(gerenciadorStarWars.listaDeFilmes())
})

app.get('/filmes/:indice',(req,res) => {
    res.send(gerenciadorStarWars.exibirFilme(req.params.indice))
})

app.get('/', function (req, res) {
    res.send('teste')
})

app.post('/', (req, res) => {
    let filme = req.body
    gerenciadorStarWars.criarFilme(filme)
    res.send('Filme criado')
})

app.delete('/:numero', (req, res) => {
    let numero = req.params.numero
    gerenciadorStarWars.deletarFilme(numero)
    res.send('Filme foi deletado')
})

app.listen(3000)