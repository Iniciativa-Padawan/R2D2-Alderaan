const { request, response } = require('express')
const cors = require('cors')
const express = require('express')
const res = require('express/lib/response')
const gerenciadorStarWars = require('./controllers/functions')
const app = express()
const swapController = require('./controllers/swapi')
app.use(cors({ origin: '*' }));
app.use(express.json())

app.get('/api/people', async (request,response) => {
    const apiResponse = await swapController.getPeople()
    response.send(apiResponse)
})

app.get('/api/planets', async (request,response) => {
    const apiResponse = await swapController.getPlanets()
    response.send(apiResponse)
})

app.get('/api/spaceships', async (request,response) => {
    const apiResponse = await swapController.getStarships()
    response.send(apiResponse)
})

app.get('/api/vehicles', async (request,response) => {
    const apiResponse = await swapController.getVehicles()
    response.send(apiResponse)
})

app.get('/api/species', async (request,response) => {
    const apiResponse = await swapController.getSpecies()
    response.send(apiResponse)
})

app.get('/api/movies',(request,response) => {
    response.send(gerenciadorStarWars.listaDeFilmes())
})

app.get('/movies/:indice',(request,response) => {
    response.send(gerenciadorStarWars.exibirFilme(request.params.indice))
})

app.post(["/:type/:indice", "/:type"], handleInsert)
    function handleInsert (request, response) {
        let type = request.params.type
        let movie = request.body
        let indice = reques.params.indice
        gerenciadorStarWars.criarFilme(type, movie, indice)
        response.send("O filme foi criado!")  
}

app.put("/api/movies/", (request, response) => {
    let indice = request.params.indice
    let movie = request.body
    gerenciadorStarWars.criarFilme(indice, movie)
    response.send("O filme foi editado!")
})

app.put("/:indice", (request, response) => {
    let indice = request.params.indice
    let movie = request.body
    gerenciadorStarWars.atualizarFilme(indice, movie)
    response.send("O filme foi editado!")
})

app.delete('/:numero', (request, response) => {
    let numero = request.params.numero
    gerenciadorStarWars.deletarFilme(numero)
    response.send('O filme foi deletado!')
})

app.listen(process.env.PORT || 3000)