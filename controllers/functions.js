const filmes = require("../db/movies")

function listaDeFilmes() {
    let returnObj = {
        count: filmes.length,
        data: filmes
    }
    return returnObj
}

function criarFilme(movie, type, index) {
    switch (type) {
        case "begin":
            criarFilmeAntes(movie)
            break
        case "middle":
            criarFilmeMeio(index, movie)
            break;
        case "end":
            criarFilmeFim(movie)
            break;
        default:
            break
    }
}

function criarFilmeAntes(movie) {
    filmes.unshift(movie)
}

function criarFilmeMeio(index, movie) {
    filmes.splice(index, 0, movie)
}

function criarFilmeFim(movie) {
    filmes.push(movie)
}

function exibirFilme(indice) {
    if (indice != undefined) {
        return filmes[indice]
    }
    return filmes.map((item, index) =>{
        item.index = index
        return item
    })
}

function atualizarFilme(movie, indice) {
    filmes[indice] = movie
}

function deletarFilme(indice) {
    filmes.splice(indice, 1)
}

function deleteAll() {
    filmes.splice(0, Number.MAX_VALUE)
}

module.exports = { listaDeFilmes, criarFilme, exibirFilme, atualizarFilme, deletarFilme, deleteAll, criarFilmeAntes }